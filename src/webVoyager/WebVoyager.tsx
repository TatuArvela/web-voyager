import { Window } from '@tatuarvela/wisp';

import { Alerts } from './alerts/Alerts.tsx';
import icons from './assets/icons.ts';
import { WebVoyagerContextProvider } from './context/WebVoyagerContextProvider.tsx';
import WebVoyagerApp from './WebVoyagerApp.tsx';

const WebVoyager = () => (
  <WebVoyagerContextProvider>
    <Window
      id="web-voyager"
      title="Sakura Web Voyager"
      icon={icons.webVoyager}
      isClosable={false}
      isMinimizable={false}
      isMaximizable={false}
      isMaximized={true}
      alwaysShowCloseButton={true}
    >
      <WebVoyagerApp />
    </Window>
    <Alerts />
  </WebVoyagerContextProvider>
);

export default WebVoyager;
