
import { redirect } from 'react-router-dom';

export const logoutAction = () => {
  console.log('logout');
  localStorage.removeItem('userData');
  return redirect('/');
}