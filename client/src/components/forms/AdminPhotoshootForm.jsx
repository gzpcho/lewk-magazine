import { useForm } from 'react-hook-form';
import bucketService from '../../services/bucket';
import photoshootService from '../../services/photoshoot';

const AdminPhotoshootForm = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (values) => {
    const photoshootId = values.title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    const numFiles = values.photos.length;
    const imageUrls = [];
    await Promise.all(
      [...Array(numFiles)].map(async (_, idx) => {
        const uploadedImage = await bucketService.uploadImage(
          values.photos[idx]
        );
        const uploadedImageJson = await uploadedImage.json();
        imageUrls.push(uploadedImageJson.url);
      })
    );
    await photoshootService.post(photoshootId, {
      title: values.title,
      imageUrls,
    });
  };

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
