import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const BackLink = ({ to = '/', children }) => {
  return (
    <Link to={to}>
      <BsArrowLeft />
      {children}
    </Link>
  );
};
