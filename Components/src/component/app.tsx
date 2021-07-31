import React from 'react';
import Cards from './cards';
import Search from './search';
import '../style/style.css';

const App = () => (
  <div className="main">
    <Search />
    <Cards />
  </div>
);
export default App;
