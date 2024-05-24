import {
  AddressBar,
  MenuBar,
  StatusBar,
  StatusBarSection,
  WindowContent,
} from '@tatuarvela/wisp';

const WebVoyagerApp = () => {
  return (
    <>
      <div style={{ paddingBottom: '4px' }}>
        <MenuBar isThrobberAnimated>
          <div
            style={{
              width: '100%',
              position: 'relative',
              top: '1px',
              paddingLeft: '2px',
            }}
          >
            <AddressBar onChange={() => undefined}>Address</AddressBar>
          </div>
        </MenuBar>
      </div>
      <WindowContent></WindowContent>
      <StatusBar showResizeHandle>
        <StatusBarSection></StatusBarSection>
      </StatusBar>
    </>
  );
};

export default WebVoyagerApp;
