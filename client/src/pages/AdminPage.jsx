import AdminLoginForm from '../components/forms/AdminLoginForm';
import { useState } from 'react';
import AdminArticleForm from '../components/forms/AdminArticleForm';
import AdminPhotoshootForm from '../components/forms/AdminPhotoshootForm';

import Header from '../components/ui/Header';
import useToken from '../hooks/useToken';

const AdminPage = () => {
  const { setToken } = useToken();
  const [formType, setFormType] = useState('article');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (values) => {
    console.log(values);
    fetch('/api/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => setToken(response.access_token))
      .then((token) => setLoggedIn(token != null))
      .catch((err) => console.error(err));
  };

  return isLoggedIn ? (
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
  ) : (
    <AdminLoginForm onSubmit={handleLogin} />
  );
};

export default AdminPage;
