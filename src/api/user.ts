// Imports
import request from '@/utils/request';

/**
 * Get user information
 * @param args
 */
export const getUserInfoApi = (args?: any) => {
  return request({
    url: '/api/v1/users/info',
    method: 'get',
    params: {
      ...args,
    },
  });
}

