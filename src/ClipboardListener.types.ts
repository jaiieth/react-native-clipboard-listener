
export type OnLoadEventPayload = {
  value: string;
};

export type ClipboardListenerModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};
