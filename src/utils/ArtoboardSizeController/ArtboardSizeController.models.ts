export interface ArtboardSizeControllerState {
  width: number;
  height: number;
}

export interface ArtboardSizeControllerReturn {
  state: ArtboardSizeControllerState;
  setSize: (width?: number, height?: number) => void;
}
