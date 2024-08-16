import { ReactNode, useState } from 'react';

import { Alert } from '../types.ts';
import { WebVoyagerContext } from './WebVoyagerContext.ts';

export const WebVoyagerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (alert: Alert) =>
    setAlerts((prevState) => [...prevState, alert]);

  const removeAlert = (id: string) =>
    setAlerts((prevState) => prevState.filter((alert) => alert.id !== id));

  return (
    <WebVoyagerContext.Provider
      value={{
        alerts,
        addAlert,
        removeAlert,
      }}
    >
      {children}
    </WebVoyagerContext.Provider>
  );
};
