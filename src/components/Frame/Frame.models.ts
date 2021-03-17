export interface FrameProps extends Partial<FrameStyles> {
  title: string;
  [props: string]: unknown;
}

export interface FrameStyles {
  width: string;
  height: string;
}
