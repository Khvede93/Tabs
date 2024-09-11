import React from 'react';
import { Tabs } from './Tabs';

export const TabsComp = () => {
  const tabs = [
    {
      label: 'tab 1',
      content: <div>this is Tab1 content</div>,
    },
    {
      label: 'tab 2',
      content: <div>this is Tab2 content</div>,
    },
    {
      label: 'tab 3',
      content: <div>this is Tab3 content</div>,
    },
  ];

  function handleChange(getCurrentTabInd) {
    console.log(getCurrentTabInd);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};
