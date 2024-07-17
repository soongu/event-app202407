import React from 'react';
import { Form, useNavigate, useRouteLoaderData } from 'react-router-dom';
import { AUTH_URL } from '../config/host-config';

const Main = () => {

  const navigate = useNavigate();

  const { role, email, token } = useRouteLoaderData('user-data');

  const promoteHandler = async (e) => {

    const response = await fetch(`${AUTH_URL}/promote`, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + token }
    });

    if (!response.ok) {
      alert('올바르지 않은 요청입니다.');
      return;
    }

    const responseData = await response.json();

    // 토큰 갱신
    localStorage.setItem('userData', JSON.stringify(responseData));

    alert('프리미엄회원이 되신 것을 축하합니다!');
    navigate('/');

  };

  return (
    <>
      <h2>{email}님 환영합니다.</h2>
      <h3>현재 권한: [ {role} ]</h3>

      {
        role === 'COMMON' &&
        <button 
          style={{
            background: 'orangered',
            color: 'white'
          }}
          onClick={promoteHandler}
        >
          Go To Premium
        </button>
      }

      {/* 다른 라우트의 액션을 트리거하는 방법 */}
      <Form action='/logout' method='POST'>
        <button>Logout</button>
      </Form>
    </>
  );
};

export default Main;
