import axios from 'axios'

const   API_GET_EMP_URL = 'http://localhost:8080/api/notes';

export const listEmps = () => axios.get(API_GET_EMP_URL);