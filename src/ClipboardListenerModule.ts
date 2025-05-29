import { requireNativeModule, type EventEmitter } from "expo";

import { ClipboardListenerModuleEvents } from "./ClipboardListener.types";

declare class ClipboardListenerModule extends EventEmitter<ClipboardListenerModuleEvents> {
  setString(value: string): void;
  getString(): string;
} 
// This call loads the native module object from the JSI.
export default requireNativeModule<ClipboardListenerModule>(
  "ClipboardListener"
);
