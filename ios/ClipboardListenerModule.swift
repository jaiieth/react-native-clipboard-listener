import ExpoModulesCore

public class ClipboardListenerModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ClipboardListener')` in JavaScript.
    Name("ClipboardListener")

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    //Registers a notification observer for clipboard changes.
    OnStartObserving {
      NotificationCenter.default.addObserver(
        forName: UIPasteboard.changedNotification,
        object: nil,
        queue: nil
      ) { _ in
        self.sendEvent("onChange", ["value": UIPasteboard.general.string ?? ""])
      }
    }

    // Removes the observer when no longer needed.
    OnStopObserving {
      NotificationCenter.default.removeObserver(
        self, name: UIPasteboard.changedNotification, object: nil)
    }

    // Sets the clipboard value.
    Function("setString") { (value: String?) in
      if value != nil {
        UIPasteboard.general.string = value
      }
    }


    Function("getString") { () -> String in
      return UIPasteboard.general.string ?? ""
    }

  }
}
