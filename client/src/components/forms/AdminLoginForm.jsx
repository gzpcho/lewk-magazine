import { useForm } from 'react-hook-form';

const AdminLoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form
      onSubmit={() => {
        handleSubmit(onSubmit);
        reset();
      }}
    >
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
