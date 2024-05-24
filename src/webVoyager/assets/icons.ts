import { Icon } from '@tatuarvela/wisp';

import fileIcon from './file-icon.png';
import icon from './icon.gif';
import iconAnimated from './icon-animated.gif';

const icons: Record<string, Icon> = {
  webVoyager: {
    16: icon,
  },
  webVoyagerAnimated: {
    16: iconAnimated,
  },
  file: {
    16: fileIcon,
  },
};

export default icons;
