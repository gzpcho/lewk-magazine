const baseUrl = '/api/bucket';

const uploadImageAndGetUrl = async (image, prefixUrl = '') => {
  const formData = new FormData();
  formData.append('file', image); 
  const response = await fetch(`${baseUrl}/upload`, {
    method: 'POST',
    body: formData,
  });
  return response;
};

const bucketService = {
  uploadImage: uploadImageAndGetUrl,
};

export default bucketService;
