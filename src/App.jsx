import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './data/components/Main/Home/Home';
import User from './data/components/Main/User/User';
import Cards from './data/components/Main/Cards/Cards';
import NotFound from './data/components/Main/NotFound/NotFound';

import Nav from './data/components/Nav/Nav.jsx';
import UserDetail from './data/components/Main/User/UserDetail';
import CardsDetail from './data/components/Main/Cards/CardsDetail';
import Header from './data/components/Header/Header';
function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/user/*" element={<User />}>
          <Route path=":uid" element={<UserDetail />} />
        </Route>
        <Route path="/credit_cards/*" element={<Cards />}>
          <Route path=":uid" element={<CardsDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
