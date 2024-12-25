import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, FormInputs } from './services/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface FormProp{
  error: { validation?: Record<string, string>; authentication?: string };
  login: (values: { username: string; password: string }) => void;
}

const Form: React.FC<FormProp> = ({ login, error }) => {
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  });
  const onSubmit = async (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder=""
        error={error.validation?.username}
        hasError={!!error.authentication}
        {...register('username')}
      />
      <Input
        type="password"
        placeholder=""
        error={error.validation?.password}
        hasError={!!error.authentication}
        {...register('password')}
      />
      <Button type="submit">login</Button>
    </form>
  );
};

export default Form;
