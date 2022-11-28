import { useState } from 'react';
import AdminArticleForm from '../components/AdminArticleForm.jsx';
import AdminPhotoshootForm from '../components/AdminPhotoshootForm.jsx';

import Header from '../components/Header';

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
