import { request } from '@umijs/max';

class CRUDService {
  saveService = async (url: String, body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  getService = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${Url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  deleteService = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${Url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id: body },
      ...(options || {}),
    });
  };
  getAllService = async (options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${Url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
  };
  searchService = async (Url:string, body: object, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${Url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
}
export default new CRUDService();
