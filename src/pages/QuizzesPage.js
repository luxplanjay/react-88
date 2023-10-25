import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ErrorMessage } from 'components/ErrorMessage';
import { deleteQuizById, fetchQuizzes } from 'api';
import { useFilters } from 'hooks/useFilters';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { topic, level } = useFilters();

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

  // Если topic содержится в topic квиза И если filter совпадает
  const visibleItems = quizItems.filter(quiz => {
    const topicFilter = topic.toLowerCase();
    const hasTopic = quiz.topic.toLowerCase().includes(topicFilter);

    if (level === 'all') {
      return hasTopic;
    }

    return hasTopic && quiz.level === level;
  });

  return (
    <div>
      <SearchBar />

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
    </div>
  );
}
