import { useCallback, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

import { basic } from '../../data/basic';
import { AnimationState } from './Animate.models';

export const useAnimationState = () => {
  const [loaded, setLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState('animation-basic');
  const [state, setState] = useImmer<AnimationState>(basic);
  const [editorVisible, setEditorVisible] = useState(false);
  const [artboardSize, setArtboardSize] = useState({
    width: 600,
    height: 400,
  });

  const [scaling, setScaling] = useState({
    width: 0,
    height: 0,
    scale: 0,
  });

  const onLoad = useCallback(() => {
    setScaling({
      width: document?.getElementById('container')?.clientWidth,
      height: document?.getElementById('container')?.clientHeight,
      scale:
        document?.getElementById('content')?.clientWidth / artboardSize.width,
    });
  }, [artboardSize]);

  useEffect(() => {
    const animationKey = window.localStorage.getItem('currentKey');
    const currentAnimation = window.localStorage.getItem('currentKey');

    if (animationKey && currentAnimation) {
      setAnimationKey(animationKey);
      setState({ ...JSON.parse(currentAnimation) });
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(animationKey, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const targetToWatch = entries[0];

      setScaling({
        width: targetToWatch.contentRect.width,
        height: targetToWatch.contentRect.height,
        scale:
          document?.getElementById('content')?.clientWidth / artboardSize.width,
      });
    });

    const elem = document?.getElementById('container');
    resizeObserver.observe(document?.getElementById('container'));

    return () => {
      resizeObserver.unobserve(elem);
    };
  }, [artboardSize]);

  const handleArtboardSize = ({ width, height }) => {
    setArtboardSize((s) => ({
      ...s,
      width,
      height,
    }));
  };

  const toggleEditorVisibility = useCallback(() => {
    setEditorVisible((s) => !s);
  }, []);

  const handlers = useCallback(
    () => ({
      onChangeMarkup: (input: string) => {
        setState((draft) => {
          draft.markup = input;
        });
      },
      onChangeCss: (input: string) => {
        setState((draft) => {
          draft.css = input;
        });
      },
    }),
    []
  );

  return {
    state,
    loaded,
    handlers,
    editorVisible,
    toggleEditorVisibility,
    artboardSize,
    handleArtboardSize,
    scaling,
    onLoad,
  };
};
