import React, { useContext } from 'react';

import { Alert } from '../types.ts';

export type WebVoyagerContextType = {
  alerts: Alert[];
  addAlert(alert: Alert): void;
  removeAlert(id: string): void;
};

export const WebVoyagerContext = React.createContext<WebVoyagerContextType>({
  alerts: [],
  addAlert: () => undefined,
  removeAlert: () => undefined,
});

export const useWebVoyagerContext = () => useContext(WebVoyagerContext);
