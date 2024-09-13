import { Window } from '@tatuarvela/wisp';

import { Alerts } from './alerts/Alerts.tsx';
import icons from './assets/icons.ts';
import { WebVoyagerContextProvider } from './context/WebVoyagerContextProvider.tsx';
import WebVoyagerApp from './WebVoyagerApp.tsx';

const WebVoyager = () => (
  <WebVoyagerContextProvider>
    <Window
      alwaysShowCloseButton={true}
      icon={icons.webVoyager}
      id="web-voyager"
      isClosable={false}
      isDraggable={false}
      isMaximizable={false}
      isMaximized={true}
      isMinimizable={false}
      isResizable={false}
      title="Sakura Web Voyager"
    >
      <WebVoyagerApp />
    </Window>
    <Alerts />
  </WebVoyagerContextProvider>
);

export default WebVoyager;
