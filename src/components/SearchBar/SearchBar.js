import { LevelFilter } from 'components/LevelFilter';
import { TopicFilter } from 'components/TopicFilter';
import { useFilters } from 'hooks/useFilters';

export const SearchBar = () => {
  const { reset } = useFilters();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={reset}>Reset filters</button>
    </div>
  );
};
