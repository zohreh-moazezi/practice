import React from 'react';
import {useForm} from 'react-hook-form';
import { Schema } from 'zod';

interface FormProp {
  error: { validation: Record<string, string>; authentication: string };
  setError: React.Dispatch<
    React.SetStateAction<{
      validation: Record<string, string>;
      authentication: string;
    }>
  >;
  login: (values: { username: string; password: string }) => void;
}

const Form:React.FC<FormProp> = ({ login, error, setError }) => {
  const { register, handleSubmit } = useForm<FormProp>({
    defaultValue: { username: '', password: '' }, resolver:Schema
  });
  const handleValidate=()=>{
    setError({})
  }

  return (
    <form  onSubmit={handleSubmit(login)}>
      <input {...register('username')} />
      <input {...register('password')} />
      <button type="submit">login</button>
    </form>
  );
};

export default Form;
