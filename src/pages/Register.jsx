import { useSignup } from "../hooks/useSignup";
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from "../components"

function Register() {
  const { error, isPending, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    await signup(email, password);
  };

  return (
    <div className='h-screen grid place-content-center'>
      <Form onSubmit={handleSubmit} method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type="text" label="Name" name="name" defaultValue="user" />
        <FormInput type="url" label="URL" name="url" defaultValue="https://..." />
        <FormInput type="email" label="Email" name="email" defaultValue="test@gmail.com" />
        <FormInput type="password" label="Password" name="password" defaultValue="password" />
        <div className="mt-4">
          {error && <p className="text-error">{error}</p>}
          {isPending ? (
            <button disabled className="btn btn-primary loading">Loading...</button>
          ) : (
            <SubmitBtn text="register" />
          )}
        </div>
        <p className='text-center'>Are you member yet? <Link className='capitalize link' to="/login">
          login</Link></p>
      </Form>
    </div>
  )
}

export default Register