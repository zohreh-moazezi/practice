import  { useState } from 'react';
import { authLoginPost } from '@features/auth/api/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form/index';
import { useStyles } from './styled';

const Login = () => {
  const [error, setError] = useState<{
    validation?: Record<string, string>;
    authentication?: string;
  }>({ validation: {}, authentication: '' });
  const navigate = useNavigate();
  const classes = useStyles();
  const { mutate: login } = useMutation({
    
    mutationFn: authLoginPost,
    
    onSuccess: () => {
      navigate('/overview');
      setError({});
    },
    onError: (err: any) => {
      console.error(err);
      
      if (err.status === 401) {
        setError({ authentication: err.data?.message });
      }else if(err.response?.data?.error){
        setError({validation:err.response.data.error})
      }
    },
    
  });
  console.log('Login function passed to Form:');


  return (
    <div className={classes.div}>
      <Form error={error} login={login} />
    </div>
  );
};

export default Login;
