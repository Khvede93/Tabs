import React, { useState } from 'react';

export const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabInd, setCurrentTabInd] = useState(0);
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tab) => (
          <div key={tab.label}>
            <span className='label'>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className='content'>
        {tabsContent[setCurrentTabInd] && tabsContent[currentTabInd].content}
      </div>
    </div>
  );
};
