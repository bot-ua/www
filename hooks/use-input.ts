import { useState } from 'react';

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string>('');

  const handleValueChange = (value: T): void =>
    setValue((prev) => (prev = value));
  const setErrorMsg = (error: string) => setError((prev) => (prev = error));

  return {
    value,
    setValue: handleValueChange,
    onValueChanged: handleValueChange,
    error,
    setError: setErrorMsg,
  };
};

export default useInput;
