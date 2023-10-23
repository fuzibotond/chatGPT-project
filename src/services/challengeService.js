import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchChallenges = async () => {
  const response = await axios.get(`${API_BASE_URL}/challenges`);
  return response.data;
};

export const createChallenge = async (challengeData) => {
  const response = await axios.post(`${API_BASE_URL}/challenges/create`, challengeData);
  return response.data;
};
