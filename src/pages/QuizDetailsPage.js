import { fetchQuizById } from 'api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
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
      {quiz && (
        <>
          <p>{quiz.topic}</p>
          <p>{quiz.level}</p>
        </>
      )}

      <Outlet />
    </div>
  );
}
