import { useState, useEffect, useRef } from 'react';

const useCustomTimeout = (initialDelay) => {
  const [isReady, setIsReady] = useState(false);
  const [delay, setDelay] = useState(initialDelay);
  const timeoutRef = useRef(null);

  const startTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      setIsReady(true);
    }, delay);
  };

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current);
    setIsReady(false);
    startTimeout();
  };

  useEffect(() => {
    startTimeout();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [delay]);

  const updateDelay = (newDelay) => {
    setDelay(newDelay);
    setIsReady(false);
    clearTimeout(timeoutRef.current);
    startTimeout();
  };

  return { isReady, updateDelay, resetTimeout };
};

export default useCustomTimeout;
