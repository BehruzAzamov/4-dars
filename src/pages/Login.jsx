import { useState } from 'react';
import { useSignin } from '../hooks/useSignIn';
import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

function Login() {
  const { error, isPending, signin } = useSignin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  const handleGuestLogin = async () => {
    await signin('guest@example.com', 'guestpassword');
  };

  return (
    <div className='h-screen grid place-content-center'>
      <Form method='post' onSubmit={handleSubmit} className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          label='Email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='mt-4'>
          {error && <p className='text-error'>{error}</p>}
          {isPending ? (
            <button disabled className='btn btn-primary loading'>
              Loading...
            </button>
          ) : (
            <SubmitBtn text='login' />
          )}
        </div>
        <button type='button' className='btn btn-secondary btn-block' onClick={handleGuestLogin}>
          Guest User
        </button>
        <p className='text-center'>
          Not a member yet? <Link className='capitalize link' to='/register'>register</Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;