import React, { useState } from 'react';
import { authLoginPost } from '@features/auth/api/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form/index';

const Login = () => {
  const [error, setError] = useState<{
    validation?: Record<string, string>;
    authentication?: string;
  }>({validation:{}, authentication:""});
  const navigate = useNavigate();
  const { mutate: login } = useMutation({
    mutationFn: authLoginPost,
    onSuccess: () => {
      navigate('/overview');
      setError({});
    },
    onError: (err: any) => {
      if (err.status === 401) {
        setError({ authentication: err.data?.message });
      }
    },
  });
  return (
    <div>
      <Form error={error} login={login} />
    </div>
  );
};

export default Login;
