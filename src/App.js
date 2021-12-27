
import './App.css';

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Featured from './components/Featured';
import CategoryShow from './components/CategoryShow';
import CartList from './components/CartList';
import list from "./database/data"

const App = () => {
  // eslint-disable-next-line

  const links = [
    { href: '/category/featured', name: "featured", type: "featured"},
    { href: '/category/bundles', name: "bundles", type: "bundles"},
    { href: '/category/sourcebook', name: "sourcebooks", type: "sourcebooks"},
    { href: '/category/digitaldice', name: "digitaldice", type: "digitaldice"},
  ]
  return ( 
  <Router>
    <header>
      <Navbar links={links}/> 
    </header>
    <main>
      <Routes>
        <Route path="/" element={<>
          <section section className="container--featured">
            <Featured list={list}/>
          </section>
          <section className="container--catalog">
            <ItemListContainer list={list}></ItemListContainer>
          </section>
          </>
        }/>
        <Route path="/category/:type" element={
          <CategoryShow list={list}></CategoryShow>
        } />
        <Route path="/product/:id" element={
          <ItemDetailContainer list={list}/>
        } />
        <Route path="/cart" element={
          <CartList list={list}/>
        } />
      </Routes>
    </main>
  </Router>
  )
}

export default App;

/**
 * 
 * <section section className="container--featured">
        <Featured/>
      </section>
      <section className="container--catalog">
        <ItemListContainer></ItemListContainer>
      </section>
      <ItemListDetails></ItemListDetails>


 */
