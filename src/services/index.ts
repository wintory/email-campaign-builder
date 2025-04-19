import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})
