import { ResponsiveProps } from '@theme/ResponsiveProps/responsiveProps.models';
import { tokens } from '@theme/tokens';
import { CSSProperties } from 'react';

export interface BoxPropsExtended
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<ResponsiveProps<BoxProps>> {}

type SizeProp = keyof typeof tokens.sizes;

export interface BoxProps {
  /**
   * Margin
   */
  margin: SizeProp;
  /**
   * Margin Top
   */
  marginTop: SizeProp;
  /**
   * Margin Bottom
   */
  marginBottom: SizeProp;
  /**
   * Margin Left
   */
  marginLeft: SizeProp;
  /**
   * Margin Right
   */
  marginRight: SizeProp;
  /**
   * Padding
   */
  padding: SizeProp;
  /**
   * Padding Top
   */
  paddingTop: SizeProp;
  /**
   * Padding Bottom
   */
  paddingBottom: SizeProp;
  /**
   * Padding Left
   */
  paddingLeft: SizeProp;
  /**
   * Padding Right
   */
  paddingRight: SizeProp;
  /**
   * Width
   */
  width: SizeProp;
  /**
   * Height
   */
  height: SizeProp;
  /**
   * Max Width
   */
  maxWidth: SizeProp;
  /**
   * Max Height
   */
  maxHeight: SizeProp;
  /**
   * Min Width
   */
  minWidth: SizeProp;
  /**
   * Min Height
   */
  minHeight: SizeProp;
  /**
   * Display
   * @see — https ://developer.mozilla.org/docs/Web/CSS/display
   */
  display: CSSProperties['display'];
  /**
   * Justify content
   * @see — https ://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent: CSSProperties['justifyContent'];
  /**
   * Align items
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems: CSSProperties['alignItems'];
  /**
   * Align content
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent: CSSProperties['alignContent'];
  /**
   * Flex wrap
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-wrap
   */
  flexWrap: CSSProperties['flexWrap'];
  /**
   * Flex direction
   * @see — https ://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection: CSSProperties['flexDirection'];
  /**
   * Flex
   * @see — https ://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex: CSSProperties['flex'];
  /**
   * Position
   * @see — https ://developer.mozilla.org/docs/Web/CSS/position
   */
  position: CSSProperties['position'];
  /**
   * Position Absolute - Top
   *
   */
  top: SizeProp;
  /**
   * Position Absolute - Right
   *
   */
  right: SizeProp;
  /**
   * Position Absolute - Bottom
   *
   */
  bottom: SizeProp;
  /**
   * Position Absolute - Left
   *
   */
  left: SizeProp;
}
