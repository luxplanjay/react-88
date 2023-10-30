import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux/localeSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  const handleChange = e => dispatch(changeLang(e.target.value));

  return (
    <div>
      <p>Select lang:</p>
      <select value={lang} onChange={handleChange}>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};
