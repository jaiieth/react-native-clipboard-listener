import { requireNativeView } from 'expo';
import * as React from 'react';

import { ClipboardListenerViewProps } from './ClipboardListener.types';

const NativeView: React.ComponentType<ClipboardListenerViewProps> =
  requireNativeView('ClipboardListener');

export default function ClipboardListenerView(props: ClipboardListenerViewProps) {
  return <NativeView {...props} />;
}
