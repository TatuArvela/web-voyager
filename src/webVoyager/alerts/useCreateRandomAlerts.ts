import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useWebVoyagerContext } from '../context/WebVoyagerContext.ts';
import chord from './CHORD.wav';

const titles = [
  'Web Voyager',
  'ɹǝƃɐʎoΛ qǝM',
  'Computer Error',
  'Error',
  'Alert',
  'Notification',
  'Application Error',
  'Web Voyager (Not Responding)',
  'Disaster',
  'Connection failed',
  'Failed to display document',
  '？？？',
  'Spectacular failure',
  'Oof',
];

const messages = [
  'Sorry, a system error occurred.\n\
\n\
To temporarily turn off extensions, restart and hold down the shift key.',
  "Your browser ran into a problem that it couldn't\n\
handle, and now you need to click here.",
  '0000000F\n\
00000003',
  'Not ready accessing site\n\
Abort, Retry, Fail?',
  'Software Failure.   Press left mouse button to continue.\n\
        Guru Meditation #00000004,0000AAC0',
  'An error has occurred. To continue:\n\
\n\
Press Enter to return to Web Voyager, or\n\
\n\
Press CTRL+ALT+DEL to restart your computer. If you do this,\n\
you will lose any unsaved information in all open applications.\n\
\n\
Error: 0E : 016F : BFF9B3D4',
  'Unexpected Error. Please Investigate.',
  'Cannot quit Web Voyager.',
  'Cannot delete Web Voyager: There is not enough free disk space.\n\
\n\
Delete one or more files to free disk space, and then try again.',
  'Web Voyager has caused an error in Web Voyager.\n\
Web Voyager will now close.\n\
\n\
If you continue to experience problems,\n\
try restarting your computer.',
  'Exception from external thread.\n\
Technical Details: Object reference not set to an instance of an object.',
  'The operation completed successfully.',
  'You need to click this button. Hold your mouse cursor\n\
over the button and press the left mouse button.',
  'Disconnected from server\n\
Connection failed.\n\
OOPS: child died',
  'Browsing is not supported on this browser.',
  'Failed to startup browser session: Socket error: Success',
  'Mouse not found\n\
Click left mouse button to Resume',
  'Bailing out, you are on your own. Good luck.',
  'Boy, you sure are stupid',
  '900 Internal Browser Error\n\
\n\
Sorry, something went wrong.',
  '？？？',
];

const buttonLabels = [
  'OK',
  'No',
  'Cancel',
  'Escape',
  'Abort',
  'Retry',
  'Ignore',
  'Default',
  '▯',
  '？？？',
  'Oof',
];

export const useCreateRandomAlerts = () => {
  const { addAlert } = useWebVoyagerContext();
  const timeoutIdRef = useRef<number | null>(null);

  const getRandomElement = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    const createRandomAlert = () => {
      void new Audio(chord).play();
      addAlert({
        buttonLabel: getRandomElement(buttonLabels),
        id: uuidv4(),
        message: getRandomElement(messages),
        title: getRandomElement(titles),
        positionX: Math.floor(Math.random() * 900),
        positionY: Math.floor(Math.random() * 500),
      });
    };

    const setRandomTimeout = () => {
      const interval = Math.random() * (5000 - 500) + 500;
      timeoutIdRef.current = window.setTimeout(() => {
        createRandomAlert();
        setRandomTimeout(); // Schedule the next random alert
      }, interval);
    };

    setRandomTimeout();

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [addAlert]);
};
