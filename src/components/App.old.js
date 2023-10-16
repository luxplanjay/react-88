import { Component } from 'react';
import { Bars } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { QuizForm } from './QuizForm/QuizForm';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { createQuiz, deleteQuizById, fetchQuizzes } from 'api';

export class App extends Component {
  state = {
    quizItems: [],
    loading: false,
    error: false,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem('quiz-filters');
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }

    try {
      this.setState({ loading: true, error: false });
      const quizzes = await fetchQuizzes();
      this.setState({ quizItems: quizzes });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
    }
  }

  addQuiz = async newQuiz => {
    try {
      this.setState({ loading: true, error: false });
      const quiz = await createQuiz(newQuiz);
      this.setState(prevState => ({
        quizItems: [...prevState.quizItems, quiz],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteQuizItem = async quizId => {
    try {
      this.setState({ loading: true, error: false });
      const deletedQuiz = await deleteQuizById(quizId);
      this.setState(prevState => ({
        quizItems: prevState.quizItems.filter(
          quiz => quiz.id !== deletedQuiz.id
        ),
      }));
      toast.success('Удалили квиз!');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  // updateQuiz = async quizId => {
  //   const updatedQuiz = await axios.patch(`/quizzes/${quizId}`, { topic: "qqq" })
  //   this.setState(prevState => ({
  //     quizItems: prevState.quizItems.map(item => {
  //       if (item.id === updatedQuiz.id) {
  //         return updatedQuiz;
  //       }
  //       return item;
  //     })
  //   }))
  // }

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value,
      },
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  getVisibleItems = () => {
    // Если topic содержится в topic квиза И если filter совпадает
    const { quizItems, filters } = this.state;

    return quizItems.filter(quiz => {
      const topicFilter = filters.topic.toLowerCase();
      const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

      if (filters.level === 'all') {
        return hasTopic;
      }

      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters, loading, error } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter}
          onReset={this.resetFilters}
        />

        {loading && (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            visible={true}
          />
        )}
        {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}
        {visibleItems.length > 0 && (
          <QuizList items={visibleItems} onDelete={this.deleteQuizItem} />
        )}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
