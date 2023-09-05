import { useEffect, useState } from 'react';

const useLoading = () => {
  const [show, setShow] = useState('hidden');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShow('');
    }, 1500);
  }, []);

  return { show, loading, setLoading };
};

export default useLoading;
