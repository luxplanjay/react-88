import { Component, useEffect, useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();

    // Сохраняем термин поиска (query)
    // Сбрасываем page в 1
    // Очистить массив картинок
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    // HTTP-запрос
    // axios.get(`http/${query}?page=${page}`);
  }, [page, query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>Search form</form>
      {images.length > 0 && <div>GALLERY</div>}
      {loading && <div>Loader...</div>}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};
