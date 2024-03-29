import { forwardRef, useMemo } from 'react';

import { replaceTokens } from '../../theme/ReplaceTokens';
import { responsiveProps } from '../../theme/ResponsiveProps';
import { BoxProps, BoxPropsExtended } from './Box.models';
import { BoxContainer } from './Box.styles';

const Box = forwardRef<HTMLDivElement, BoxPropsExtended>((props, ref) => {
  const {
    children,
    margin,
    padding,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    height,
    display = 'block',
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    position,
    top,
    right,
    left,
    bottom,
    flex,
    ...rest
  } = props;

  /**
   * Converts tokens defined in the project into
   * css compatible values
   *
   * The function is cached and only re run if a property changes
   */
  const parsedProps = useMemo(() => {
    const replacedObject = replaceTokens({
      margin,
      padding,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      height,
      top,
      right,
      left,
      bottom,
    });

    /**
     * Creates responsive properties where necessary
     */
    return responsiveProps<BoxProps>({
      ...replacedObject,
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      position,
      flex,
    });
  }, [
    margin,
    padding,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    height,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    position,
    top,
    right,
    left,
    bottom,
    flex,
  ]);

  return (
    <BoxContainer ref={ref} parsedCss={parsedProps} data-testid="box" {...rest}>
      {children}
    </BoxContainer>
  );
});

export default Box;
