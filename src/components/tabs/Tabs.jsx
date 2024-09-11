import React, { useState } from 'react';
import './tabs.css';

export const Tabs = ({ tabsContent }) => {
  const [currentTabInd, setCurrentTabInd] = useState(0);

  function handleOnClick(getIndex) {
    setCurrentTabInd(getIndex);
  }

  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tab, ind) => (
          <div
            key={tab.label}
            onClick={() => handleOnClick(ind)}
            className={`tab-item ${currentTabInd === ind && 'active'}`}
          >
            <span className='label'>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className='content'>
        {tabsContent[currentTabInd] && tabsContent[currentTabInd].content}
      </div>
    </div>
  );
};
