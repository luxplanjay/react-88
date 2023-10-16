import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { QuizForm } from './QuizForm/QuizForm';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { createQuiz, deleteQuizById, fetchQuizzes } from 'api';

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem('quiz-filters');
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    topic: '',
    level: 'all',
  };
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(getInitialFilters);

  useEffect(() => {
    localStorage.setItem('quiz-filters', JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getQuizzes();
  }, []);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      const quiz = await createQuiz(newQuiz);
      setQuizItems(prevState => [...prevState, quiz]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteQuizItem = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevState =>
        prevState.filter(quiz => quiz.id !== deletedQuiz.id)
      );
      toast.success('Удалили квиз!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeFilter = (key, value) => {
    setFilters(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({ topic: '', level: 'all' });
  };

  // Если topic содержится в topic квиза И если filter совпадает
  const visibleItems = quizItems.filter(quiz => {
    const topicFilter = filters.topic.toLowerCase();
    const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

    if (filters.level === 'all') {
      return hasTopic;
    }

    return hasTopic && quiz.level === filters.level;
  });

  return (
    <Layout>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        filters={filters}
        onChangeFilter={changeFilter}
        onReset={resetFilters}
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
        <QuizList items={visibleItems} onDelete={deleteQuizItem} />
      )}
      <Toaster position="top-right" />
    </Layout>
  );
};
