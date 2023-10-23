import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create quiz</Link>
      <Link to="/quizzes">Quiz list</Link>
    </nav>
  );
};
