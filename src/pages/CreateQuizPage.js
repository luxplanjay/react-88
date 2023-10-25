import { useState } from 'react';
import { QuizForm } from 'components/QuizForm/QuizForm';
import { createQuiz } from 'api';
import toast from 'react-hot-toast';
import { BackLink } from 'components/BackLink';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz(newQuiz);
      toast.success('Создали квиз! Вернитесь на список чтобы увидеть!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BackLink to="/quizzes">Back to quizzes</BackLink>
      <QuizForm onAdd={addQuiz} />
      {loading && <div>ADDING QUIZ...</div>}
      {error && <div>OOPS! AN ERROR!</div>}
    </div>
  );
}
