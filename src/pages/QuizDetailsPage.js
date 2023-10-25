import { fetchQuizById } from 'api';
import { BackLink } from 'components/BackLink';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
  const location = useLocation();
  const params = useParams();
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    async function getQuiz() {
      try {
        const fetchedQuiz = await fetchQuizById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {}
    }

    getQuiz();
  }, [params.quizId]);

  return (
    <div>
      <h1>QuizDetailsPage</h1>
      <BackLink to={location.state?.from ?? '/quizzes'}>
        Back to quizzes
      </BackLink>

      {quiz && (
        <>
          <p>{quiz.topic}</p>
          <p>{quiz.level}</p>
        </>
      )}
    </div>
  );
}
