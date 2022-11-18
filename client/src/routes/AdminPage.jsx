import AdminArticleForm from '../components/AdminArticleForm';
import Article from '../components/Article';
import { useState } from 'react';

const AdminPage = () => {
  const [previewContents, setPreviewContents] = useState({});

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AdminArticleForm setPreviewContents={setPreviewContents} />
      <Article {...previewContents} />
    </div>
  );
};

export default AdminPage;
