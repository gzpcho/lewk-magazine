import { useForm } from 'react-hook-form';
import articleService from '../services/articles';
import bucketService from '../services/bucket';
import Article from './Article';
import { useState } from 'react';

const AdminArticleForm = () => {
  const [loading, setLoading] = useState(false);
  const [previewContents, setPreviewContents] = useState({});
  const { register, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      title: 'Wikipedia Page 2',
      tagline: 'Where information lives',
      image: null,
      author: 'Jimmy Wales',
      issueNo: 3,
      issueUrl: 'https://wikipedia.org',
      copy: 'This is some sample copy.\nIt is also separated by a newline.',
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const uploadedImage = await bucketService.uploadImage(values.image[0]);
    const uploadedImageJson = await uploadedImage.json();

    const articleId = values.title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    await articleService.post(articleId, {
      title: values.title,
      tagline: values.tagline,
      image: uploadedImageJson,
      author: values.author,
      issue: {
        number: values.issueNo,
        url: values.issueUrl,
      },
      copy: values.copy,
    });
    reset();
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
          onClick={() => {
            const values = getValues();
            setPreviewContents({
              title: values.title,
              tagline: values.tagline,
              image: {
                url: URL.createObjectURL(values.image[0]),
              },
              author: values.author,
              issue: {
                number: values.issueNo,
                url: values.issueUrl,
              },
              copy: values.copy,
            });
          }}
          disabled={loading}
        />
        <input type="submit" value="Post Article" disabled={loading} />
      </form>

      <Article {...previewContents} />
    </div>
  );
};

export default AdminArticleForm;
