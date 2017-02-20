import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAjcWggSGS67PSbVaViosMua6naSvRg2_Q';

const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'));
