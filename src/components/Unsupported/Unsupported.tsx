import { FunctionComponent, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

const Unsupported: FunctionComponent = () => {
  const { addToast } = useToasts();

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ') > 0;

    const isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1;

    if (msie || isSafari) {
      addToast(
        'The application might not work as expected in this browser, please use Chrome or Firefox. Thank you!',
        { appearance: 'warning', autoDismiss: false }
      );
    }
  }, []);

  return null;
};

export default Unsupported;
