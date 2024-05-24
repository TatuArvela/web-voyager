import { Window } from '@tatuarvela/wisp';
import { useEffect, useState } from 'react';

import icons from './assets/icons.ts';
import WebVoyagerApp from './WebVoyagerApp.tsx';

const TimeWindow = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 2000);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Window
      id="web-voyager"
      title="Sakura Web Voyager"
      icon={icons.webVoyager}
      width={800}
      height={640}
      isClosable={false}
      isMinimizable={true}
      isMaximizable={true}
      isMaximized={true}
      alwaysShowCloseButton={true}
    >
      <WebVoyagerApp />
    </Window>
  );
};

export default TimeWindow;
