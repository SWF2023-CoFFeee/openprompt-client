import { useState } from 'react';

type ReturnTypes<T = any> = [
  T,
  (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void,
  () => void,
];

export const useInputs = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  initialValue: T,
): ReturnTypes<T> => {
  const [values, setValues] = useState<T>(initialValue);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onInit = () => {
    setValues(initialValue);
  };

  return [values, onChange, onInit];
};
