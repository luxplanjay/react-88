import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import NotFoundPage from 'pages/NotFoundPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateQuizPage />} />
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="quizzes/:quizId" element={<QuizDetailsPage />}>
          <Route path="a" element={<div>A</div>} />
          <Route path="b" element={<div>B</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
