import * as React from 'react';

import { ClipboardListenerViewProps } from './ClipboardListener.types';

export default function ClipboardListenerView(props: ClipboardListenerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
