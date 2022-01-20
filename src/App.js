
import './App.css';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Featured from './components/Featured';
import CategoryShow from './components/CategoryShow';
import CartList from './components/CartList';
import { CustomProvider } from './components/CartContext';


const App = () => {
  const links = [
    { href: '/category/bundles', name: "bundles", type: "bundles"},
    { href: '/category/sourcebook', name: "sourcebooks", type: "sourcebooks"},
    { href: '/category/digitaldice', name: "digitaldice", type: "digitaldice"},
  ]
  return ( 
  <CustomProvider>
    <Router>
    <header>
      <Navbar links={links}/> 
    </header>
    <main>
      <Routes>
        <Route path="/" element={<>
          <section section className="container--featured">
            <Featured />
          </section>
          <section className="container--catalog">
            <ItemListContainer ></ItemListContainer>
          </section>
          </>
        }/>
        <Route path="/category/:type" element={
          <CategoryShow ></CategoryShow>
        } />
        <Route path="/product/:id" element={
          <ItemDetailContainer />
        } />
        <Route path="/cart" element={
          <CartList/>
        } />
      </Routes>
    </main>
    <footer>
      <p>D&D E-commerce for ReactJS project - 2021 - By Juan Pablo Sosa Epifani</p>
    </footer>
  </Router>
  </CustomProvider>

  )
}

export default App;
