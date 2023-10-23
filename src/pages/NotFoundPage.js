import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Соряньте, такого маршрута нема :( Пожалуйста перейди по этой ссылке на
      <Link to="/">домашнюю страницу</Link>.
    </div>
  );
}
