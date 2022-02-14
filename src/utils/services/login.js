import { post } from '../../api/network';

export const loginUser = async (data) => {
  let url = `/login`;
  let res = await post(url, data);
  // eslint-disable-next-line no-debugger
  // debugger;
  console.log(res, 'loginUser');
  return res;
};
