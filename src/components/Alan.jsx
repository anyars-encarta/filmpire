import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const alanKey = process.env.REACT_APP_ALAN_KEY;

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, mode }) => {
        if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.removeItem('accountId');
          localStorage.removeItem('request_token');
          localStorage.removeItem('session_id');

          window.location.href = '/';
        }
      },
    });
  }, []);
};

export default useAlan;
