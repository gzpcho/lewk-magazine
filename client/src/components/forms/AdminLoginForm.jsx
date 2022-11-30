import { useForm } from 'react-hook-form';

const AdminLoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username')}
        placeholder="Username"
        autoComplete="username"
      />
      <br />
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default AdminLoginForm;
