import { requireNativeModule, type EventEmitter } from "expo";

import { ClipboardListenerModuleEvents } from "./ClipboardListener.types";

declare class ClipboardListenerModule extends EventEmitter<ClipboardListenerModuleEvents> {
  setString(value: string): void;
  getString(): string;
}

type ClipboardListenerModuleType = Omit<
  ClipboardListenerModule,
  "_TEventsMap_DONT_USE_IT" | "startObserving" | "stopObserving"
>;
// This call loads the native module object from the JSI.
export default requireNativeModule<ClipboardListenerModuleType>(
  "ClipboardListener"
);
