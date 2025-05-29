import { NativeModule, requireNativeModule } from 'expo';

import { ClipboardListenerModuleEvents } from './ClipboardListener.types';

declare class ClipboardListenerModule extends NativeModule<ClipboardListenerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ClipboardListenerModule>('ClipboardListener');
