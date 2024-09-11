import React, { useState } from 'react';

export const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabInd, setCurrentTabInd] = useState(0);

  function handleOnClick(getIndex) {
    setCurrentTabInd(getIndex);
    onChange(getIndex);
  }

  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tab, ind) => (
          <div key={tab.label} onClick={() => handleOnClick(ind)}>
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
