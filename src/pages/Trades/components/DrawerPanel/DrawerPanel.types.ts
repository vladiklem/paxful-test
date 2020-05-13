import React from 'react';

export type Props = {
  drawerOpen: boolean;
  handleToggle: () => void;
  PanelComponent: React.ComponentType<any>,
  panelProps: any;
  anchor: "bottom" | "left" | "right" | "top" | undefined;
};
