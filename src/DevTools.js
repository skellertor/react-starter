import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-d"
    changeMonitorKey="ctrl-m"
    defaultIsVisible={false}
  >
    <LogMonitor theme="tomorrow" />
    <SliderMonitor />
    <ChartMonitor theme="tomorrow" />
  </DockMonitor>
);

export const renderDevTools = () => {
  if (process.env.NODE_ENV !== 'prod') return <DevTools />;
  return null;
};
