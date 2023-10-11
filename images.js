import { Component } from 'react';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // Сохраняем термин поиска (query)
    // Сбрасываем page в 1
    // Очистить массив картинок
  };

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // HTTP-запрос с setState
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>Search form</form>
        {this.state.images.length > 0 && <div>GALLERY</div>}
        {this.state.loading && <div>Loader...</div>}
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
