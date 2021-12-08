import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import Featured from './components/Featured';

function App() {
  // eslint-disable-next-line
  return <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Featured list={ItemListContainer()}/>
    </main>
  </>
  
}


export default App;
