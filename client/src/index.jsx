import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    var termObj = {term: term};

    axios.post('url here', termObj)
      .then(function(response) => {
        console.log(response);
      })
      .catch(function(error) => {
        console.log(error);
      })
    console.log(`${term} was searched`);
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
