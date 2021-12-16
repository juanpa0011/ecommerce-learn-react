
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
    <section className="container--featured">
      <Featured/>
    </section>
    <section className="container--catalog">
      <ItemListContainer></ItemListContainer>
    </section>
    </main>
  </>
  
}


export default App;
