import { useState } from 'react';
import AdminArticleForm from '../components/AdminArticleForm';
import AdminPhotoshootForm from '../components/AdminPhotoshootForm';

const AdminPage = () => {
  const [formType, setFormType] = useState('article');

  return (
    <>
      <button
        onClick={() => setFormType('article')}
        disabled={formType === 'article'}
      >
        Article Form
      </button>
      <button
        onClick={() => setFormType('photoshoot')}
        disabled={formType === 'photoshoot'}
      >
        Photoshoot Form
      </button>
      {formType === 'article' && <AdminArticleForm />}
      {formType === 'photoshoot' && <AdminPhotoshootForm />}
    </>
  );
};

export default AdminPage;
