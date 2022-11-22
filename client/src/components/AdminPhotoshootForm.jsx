import { useForm } from 'react-hook-form';

const AdminPhotoshootForm = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (values) => console.log(values);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}
      >
        <input {...register('title')} placeholder="Photoshoot Title" />
        <input {...register('photos')} type="file" accept="image/*" multiple />
        <input type="submit" value="Post Photoshoot" />
      </form>
    </div>
  );
};
export default AdminPhotoshootForm;
