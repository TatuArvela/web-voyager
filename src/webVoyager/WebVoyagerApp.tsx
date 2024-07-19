import {
  AddressBar,
  MenuBar,
  StatusBar,
  StatusBarSection,
  WindowContent,
} from '@tatuarvela/wisp';

import icons from './assets/icons.ts';

const WebVoyagerApp = () => {
  return (
    <>
      <div style={{ paddingBottom: '4px' }}>
        <MenuBar
          isThrobberActive
          throbberIcon={icons.webVoyager}
          throbberActiveIcon={icons.webVoyagerAnimated}
        >
          <div
            style={{
              width: '100%',
              paddingTop: '1px',
              paddingLeft: '1px',
              paddingRight: '2px',
            }}
          >
            <AddressBar onChange={() => undefined} icon={icons.file} disabled />
          </div>
        </MenuBar>
      </div>
      <WindowContent style={{ marginTop: 0 }}></WindowContent>
      <StatusBar showResizeHandle>
        <StatusBarSection>
          <StatusBarIcon />
          Ready
        </StatusBarSection>
      </StatusBar>
    </>
  );
};

const StatusBarIcon = () => {
  return (
    <img
      style={{
        height: '16px',
        margin: '0 4px 0 0',
        width: '16px',
        imageRendering: 'pixelated',
      }}
      src={icons.file[16]}
    />
  );
};

export default WebVoyagerApp;
