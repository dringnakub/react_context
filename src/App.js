import React from 'react';
import Articles from './components/Article/container/Articles';
import AddArticle from './components/Article/container/AddArticle';
import ArticleProvider from './context/articleContext'

function App() {

  const reversWord = (value) => {
    return value.split(" ").reverse().join(" ");
  }

  return (
    <div>

      {/* {reversWord("I like to read")} */}
      <ArticleProvider >
        <AddArticle />
        <Articles />
      </ArticleProvider>
    </div>
  );
}

export default App;
