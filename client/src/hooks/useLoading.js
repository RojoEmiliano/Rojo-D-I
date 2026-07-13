import { useEffect, useState } from 'react';

const useLoading = () => {
  const [show, setShow] = useState('hidden');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setShow('');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { show, loading, setLoading };
};

export default useLoading;
