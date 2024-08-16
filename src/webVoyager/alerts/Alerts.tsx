import { MessageBox } from '@tatuarvela/wisp';

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
            positionX={positionX}
            positionY={positionY}
            showAsTask={false}
            title={title}
          >
            <span style={{ whiteSpace: 'pre' }}>{message}</span>
          </MessageBox>
        )
      )}
    </>
  );
};
