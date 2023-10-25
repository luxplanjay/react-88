import { useFilters } from 'hooks/useFilters';

export const LevelFilter = () => {
  const { level, changeLevel } = useFilters();

  return (
    <select value={level} onChange={changeLevel}>
      <option value="all">All</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
};
