import { useForm } from 'react-hook-form';

const AdminArticleForm = ({ setPreviewContents }) => {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      title: 'Wikipedia Page',
      tagline: 'Where information lives',
      image: null,
      author: 'Jimmy Wales',
      issueNo: 3,
      issueUrl: 'https://wikipedia.org',
      copy: 'This is some sample copy.\nIt is also separated by a newline.',
    },
  });

  const formatValues = (values) => {
    return {
      title: values.title,
      tagline: values.tagline,
      image: values.image &&
        values.image.length && {
          url: URL.createObjectURL(values.image[0]),
        },
      author: values.author,
      issue: {
        number: values.issueNo,
        url: values.issueUrl,
      },
      copy: values.copy,
    };
  };

  const onSubmit = (values) => console.log(formatValues(values));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}
    >
      <input {...register('title')} placeholder="Article Title" />
      <input {...register('tagline')} placeholder="Article Tagline" />
      <input {...register('image')} type="file" accept="image/*" />
      <input {...register('author')} placeholder="Author" />
      <input
        {...register('issueNo')}
        type="number"
        min="0"
        placeholder="Issue Number"
      />
      <input
        {...register('issueUrl')}
        type="url"
        pattern="https://.*"
        placeholder="Issue URL: https://..."
      />
      <textarea {...register('copy')} placeholder="Article Content" />
      <input
        type="button"
        value="Preview"
        onClick={() => setPreviewContents(formatValues(getValues()))}
      />
      <input type="submit" value="Post Article" />
    </form>
  );
};

export default AdminArticleForm;
