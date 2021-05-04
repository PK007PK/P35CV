import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.codewars.com/api/v1/users/PK007PK/',
});

export const endpoints = {
  codeChallenges: 'code-challenges/completed',
};
