import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchPhotosByQuery = async (query, page = 1) => {
  const { data } = await axios.get(`/?q=${query}&page=${page}&key=32913610-49b3d582ca5680640c97479c9&`, {});
  return data;
};
