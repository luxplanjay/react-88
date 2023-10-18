import axios from 'axios';
import { useRef } from 'react';

// к -> создали controller 1 -> привязали
// ко -> отменить controller 1 -> создать controller 2 -> привязать
// кот -> отменить controller 2 -> создать controller 3 -> привязать

export const HttpReqAbortOnEvent = () => {
  const controllerRef = useRef();

  const fetchData = async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, { signal: controllerRef.current.signal });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      <button onClick={() => controllerRef.current.abort()}>Cancel req</button>
    </div>
  );
};
