import { MessageBox, useWindow, useWindowManager } from '@tatuarvela/wisp';
import { memo, useEffect } from 'react';

import { useWebVoyagerContext } from '../context/WebVoyagerContext.ts';

export const Alerts = () => {
  const { alerts } = useWebVoyagerContext();

  return (
    <>
      {alerts.map(
        ({ id, message, title, buttonLabel, positionX, positionY }) => (
          <MessageBox
            buttonText={buttonLabel}
            id={`alert-${id}`}
            key={id}
            parentId="web-voyager"
            positionX={positionX}
            positionY={positionY}
            title={title}
          >
            <AutoRepositioner />
            <span style={{ whiteSpace: 'pre' }}>{message}</span>
          </MessageBox>
        )
      )}
    </>
  );
};

const AutoRepositioner = memo(() => {
  const window = useWindow();
  const windowManager = useWindowManager();

  useEffect(() => {
    if (
      windowManager.viewportWidth &&
      windowManager.viewportHeight &&
      (window.positionX + window.width > windowManager.viewportWidth ||
        window.positionY + window.height > windowManager.viewportHeight)
    ) {
      const newPositionX = Math.min(
        window.positionX,
        windowManager.viewportWidth - window.width
      );
      const newPositionY = Math.min(
        window.positionY,
        windowManager.viewportHeight - window.height
      );

      windowManager.updateWindow({
        id: window.id,
        positionX: newPositionX,
        positionY: newPositionY,
      });
    }
  }, [window, windowManager]);

  return null;
});
