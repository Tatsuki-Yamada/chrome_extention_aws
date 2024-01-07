import React from 'react';
import './Newtab.css';
import './Newtab.scss';
import { Button } from '@yamada-ui/react';
import GetArticleData from './GetArticleData';

function getLatestArticle() {
  console.log('scrape start!');
}

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={getLatestArticle}>aiueo</Button>
        <GetArticleData />
      </header>
    </div>
  );
};

export default Newtab;
