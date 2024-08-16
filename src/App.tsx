import { ThemeSwitcher, Wisp } from '@tatuarvela/wisp';
import {
  vaporwin,
  win2k,
  win9x16Bit,
  win9x16Colors,
  win9x24Bit,
  win9x32Bit,
  win9x256Colors,
} from '@tatuarvela/wisp-win-classic-theme';

import WebVoyager from './webVoyager/WebVoyager.tsx';

const App = () => (
  <div
    style={{
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <div
      style={{
        width: '1024px',
        height: '768px',
      }}
    >
      <Wisp
        themes={[
          win9x16Colors,
          win9x256Colors,
          win9x16Bit,
          win9x24Bit,
          win9x32Bit,
          win2k,
          vaporwin,
        ]}
      >
        <WebVoyager />
        <ThemeSwitcher height={50} positionY={20} isMinimized />
      </Wisp>
    </div>
  </div>
);

export default App;
