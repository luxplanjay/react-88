import { QuizCard } from 'components/QuizCard/QuizCard';

export const QuizList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
