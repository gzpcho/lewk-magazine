import { useState } from 'react';
import AdminArticleForm from '../components/forms/AdminArticleForm';
import AdminPhotoshootForm from '../components/forms/AdminPhotoshootForm';

import Header from '../components/ui/Header';

const AdminPage = () => {
  const [formType, setFormType] = useState('article');

  return (
    <>
      <Header />
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
