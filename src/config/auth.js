

export const userDataLoader = () => {
  const userDataJson = localStorage.getItem('userData');
  const userData = JSON.parse(userDataJson);
  console.log('current-user: ',userData);

  return userData;
};
