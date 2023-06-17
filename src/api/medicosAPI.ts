import axios from 'axios';
import moment from 'moment';
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUfs = async (): Promise<string[]> => {
  const response = await api.get('/uf');
  return response.data;
}

export const getCities = async (uf: string): Promise<{
  local: any;
  codIbge: any;
}[]> => {
  const response = await api.get(`/cities/${uf}`);
  console.log(response.data)
  return response.data;
}

export const getMedicos = async (city: string): Promise<{
  ativos: string[];
  inativos: string[];
}> => {
  console.log(city)
  const response = await api.get(`/medicos/${city}`);
  return response.data;
}

export const addAvaliacao = async (email: string, uf: string, municipio: string, qtMedicos: number, exelente: number, muitoSatisfatorio: number, satisfatorio: number, poucoSatisfatorio: number, insatisfatorio: number): Promise<string> => {
  const response = await api.post('/avaliacao', {
    data: moment().format('DD/MM/YYYY'),
    email,
    uf,
    municipio,
    qtMedicos,
    results: {
      exelente,
      muitoSatisfatorio,
      satisfatorio,
      poucoSatisfatorio,
      insatisfatorio
    }
  });

  return response.data;

}

interface ISectTwo {
  a: string;
  a_text: string;
  b: string;
  b_text: string;
  c: string;
  c_text: string;
  d: string;
  d_text: string;
  e: string;
  e_text: string;
  f: string;
  f_text: string;
  g: string;
  g_text: string;
  h: string;
  h_text: string;
  i: string;
  i_text: string;
}

export const addSectTwo = async (data: ISectTwo, email: string): Promise<string> => {
  const response = await api.post('/sect-two', {
    data,
    email
  });

  return response.data;
}

export const checkEmail = async (email: string): Promise<boolean> => {
  const response = await api.post('/check-email', { email });
  return response.data;
}