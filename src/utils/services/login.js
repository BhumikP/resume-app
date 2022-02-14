import { post } from '../../api/network';

export const loginUser = async (data) => {
  let url = `login`;
  let res = await post(url, data);
  console.log(res, 'loginUser');
  return res;
};
