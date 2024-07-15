import { redirect } from "react-router-dom";




export const userDataLoader = () => {
  const userDataJson = localStorage.getItem('userData');
  const userData = JSON.parse(userDataJson);
  console.log('current-user: ',userData);

  return userData;
};

export const getAuthToken = () => {
  const {token} = userDataLoader();
  return token;
};

export const authCheckLoader = () => {
  const userData = userDataLoader();
  if (!userData) {
    alert('로그인이 필요한 서비스입니다.');
    return redirect('/');
  }
  return null;
}
