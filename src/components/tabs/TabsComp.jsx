import React from 'react';
import { Tabs } from './Tabs';

export const TabsComp = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>this is Tab1 content</div>,
    },
    {
      label: 'Tab 2',
      content: <h1>this is Tab2 content</h1>,
    },
    {
      label: 'Tab 3',
      content: <div>this is Tab3 content</div>,
    },
  ];

  return <Tabs tabsContent={tabs} />;
};
