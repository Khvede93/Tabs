import { useState } from 'react';
import './App.css';
import { TabsComp } from './components/tabs/TabsComp';

function App() {
  const [count, setCount] = useState(0);

  return <TabsComp />;
}

export default App;
