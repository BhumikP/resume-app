import { post } from '../../api/network';

export const loginUser = async (data) => {
  let url = `login`;
  let res = await post(url, data);
  console.log(res, 'loginUser');
  return res;
};

export const signUpUser = async (data) => {
  let url = `signup`;
  let res = await post(url, data);
  console.log(res, 'signUpUser');
  return res;
};
