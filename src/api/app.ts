// Imports
import request from '@/utils/request';

/**
 * Get configuration
 * @param args
 */
export const getConfigApi = (args?: any) => {
  return request({
    url: '/api/v1/users/setting',
    method: 'get',
    params: {
      ...args,
    },
  });
}
