import { request } from '@umijs/max';

const baseUrl = 'http://localhost:3000';
const current = 1; 
const pageSize = 10;
class DrugsInformationService {
  saveDrugInfor = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  getDrugInfor = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  deleteDrugInfor = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id: body },
      ...(options || {}),
    });
  };
  getAll = async (options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/get-all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
  };
  search = async (url: string, body: object, options?: { [key: string]: any }) => {
    try {
      const response = await request<ErrorResponse>(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
      });
  
      return response.data; // Return the response data
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      throw error;
    }
  };
}
export default new DrugsInformationService();
