import { useSearchParams } from 'react-router-dom';

export const useFilters = () => {
  const [params, setParams] = useSearchParams();
  const topic = params.get('topic') ?? '';
  const level = params.get('level') ?? 'all';

  const changeTopic = evt => {
    params.set('topic', evt.target.value);
    setParams(params);
  };

  const changeLevel = evt => {
    params.set('level', evt.target.value);
    setParams(params);
  };

  const reset = () => {
    setParams({ topic: '', level: 'all' });
  };

  return {
    topic,
    level,
    changeTopic,
    changeLevel,
    reset,
  };
};
