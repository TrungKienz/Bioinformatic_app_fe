import { request } from '@umijs/max';
import { server } from '@/pages/Api';
const baseUrl = server;
class HealthRecordService {
  saveHealthRecord = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  getHealthRecord = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/get-health-record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  deleteHealthRecord = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/delete-health-record`, {
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
  search = async (body: object, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
}
export default new HealthRecordService();
