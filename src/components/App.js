import { useSelector } from 'react-redux';
import { Account } from './Account';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const lang = useSelector(state => state.locale.lang);

  return (
    <div>
      <LangSwitcher />
      <h1>User account data</h1>
      <Account />
      <p>
        <b>Lang: {lang}</b>
      </p>
    </div>
  );
};
