import { useState } from 'react';
import AdminArticleForm from '../components/AdminArticleForm.jsx';
import AdminPhotoshootForm from '../components/AdminPhotoshootForm.jsx';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  const [formType, setFormType] = useState('article');

  return (
    <>
      <Navbar />
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