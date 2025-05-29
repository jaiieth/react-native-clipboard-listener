package expo.modules.clipboardlistener

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import android.content.ClipboardManager
import android.content.Context
import android.content.ClipData

class ClipboardListenerModule : Module() {
  private lateinit var clipboardManager: ClipboardManager
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ClipboardListener')` in JavaScript.
    Name("ClipboardListener")

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Initializes the ClipboardManager and adds a listener for clipboard changes.
    OnCreate {
      val context = appContext.reactContext
      clipboardManager = context?.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
      clipboardManager.addPrimaryClipChangedListener {
        sendEvent("onChange", mapOf<String, String>(
          "value" to (clipboardManager.primaryClip?.getItemAt(0)?.text?.toString() ?: "")
        ))
      }
    }

    // Cleans up the listener to prevent memory leaks.
    OnDestroy {
      clipboardManager.removePrimaryClipChangedListener { /* No-op listener for removal */ }
    }

    // Sets the clipboard value.
    Function("setString") { value: String? ->
      if (value == null) {
        return@Function
      }
      val clip = ClipData.newPlainText(null, value)
      clipboardManager.setPrimaryClip(clip)
    }

    // Gets the clipboard value.
    Function("getString") { 
      clipboardManager.primaryClip?.getItemAt(0)?.text?.toString() ?: ""
    }
  }
}