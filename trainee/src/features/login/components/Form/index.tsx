import React from 'react';
import { useForm,SubmitHandler } from 'react-hook-form';
import { loginSchema, FormInputs } from './services/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from '../Logo';
import Text from '../Text';
import { useStyles } from './styled';

interface FormProp {
  error: { validation?: Record<string, string>; authentication?: string };
  login: (values: { username: string; password: string }) => void;
}

const Form: React.FC<FormProp> = ({ login, error }) => {
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  });
  console.log(register('username'), register('password'));

  const onSubmit:SubmitHandler<FormInputs> = async (values: { username: string; password: string }) => {
    console.log('Submitting:', values);
    login(values);
  };
  console.log('Login function passed to Form:', login);


  const classes = useStyles();

  return (
    <>
      <Logo />
      <Text />

      <form 
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submission triggered');
          onSubmit({ username: 'testuser', password: 'testpassword' })        }}
      >
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
    </>
  );
};

export default Form;
