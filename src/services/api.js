// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export function getChallenges() {
  return axios.get(`${API_BASE_URL}/challenges/filter`);
}

export function createChallenge(newChallenge) {
  return axios.post(`${API_BASE_URL}/challenges/create`, newChallenge);
}

// Add more API request functions as needed
