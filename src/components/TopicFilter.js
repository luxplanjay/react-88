import { useFilters } from 'hooks/useFilters';

export const TopicFilter = () => {
  const { topic, changeTopic } = useFilters();

  return (
    <input
      type="text"
      value={topic}
      onChange={changeTopic}
      placeholder="Filter by topic..."
    />
  );
};
