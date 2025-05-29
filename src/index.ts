// Reexport the native module. On web, it will be resolved to ClipboardListenerModule.web.ts
// and on native platforms to ClipboardListenerModule.ts
export { default } from './ClipboardListenerModule';
export { default as ClipboardListenerView } from './ClipboardListenerView';
export * from  './ClipboardListener.types';
