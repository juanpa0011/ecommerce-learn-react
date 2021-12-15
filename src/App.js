
import './App.css';

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import Featured from './components/Featured';
import ItemList from './components/ItemList';


function App() {
  // eslint-disable-next-line

  return <>
    <header>
      <Navbar/>
    </header>
    <main>
    <section className="container--featured">
      <Featured list={ItemListContainer()}/>
    </section>
    <section className="container--catalog">
      <ItemList list={ItemListContainer()}></ItemList>
    </section>
    </main>
  </>
  
}


export default App;
