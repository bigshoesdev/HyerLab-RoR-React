import { useState } from 'react';
import './App.css';
import { Feed } from './components/Feed';
import { Menu } from './components/Menu';
import { Trending } from './components/Trending';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="grid grid-cols-12 divide-x dark:divide-slate-800">
          <div className="col-span-2">
            <Menu></Menu>
          </div>
          <div className="col-span-6">
            <Feed></Feed>
          </div>
          <div className="col-span-4">
            <Trending></Trending>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
