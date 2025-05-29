import { registerWebModule, NativeModule } from 'expo';

import { ClipboardListenerModuleEvents } from './ClipboardListener.types';

class ClipboardListenerModule extends NativeModule<ClipboardListenerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ClipboardListenerModule, 'ClipboardListenerModule');
