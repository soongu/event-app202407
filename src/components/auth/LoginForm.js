import React from 'react';
import { Form, Link, useActionData, redirect } from 'react-router-dom'; // Link 컴포넌트 추가
import styles from './LoginForm.module.scss';
import { AUTH_URL } from '../../config/host-config';

const LoginForm = () => {

  const errorText = useActionData();

  return (
    <>
      <Form
        method="post"
        className={styles.form}
      >
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
          />
        </p>
        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>
        </div>
        {errorText && <p className={styles.error}>{errorText}</p>}

        <div className={styles.registerLink}>
          <Link to="/sign-up">회원이 아니십니까? 회원가입을 해보세요</Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;

export const loginAction = async ({ request }) => {
  const formData = await request.formData();

  const payload = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // console.log(payload);

  const response = await fetch(`${AUTH_URL}/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.status === 422) {
    const errorText = await response.text();
    // console.log(errorText);
    return errorText;
  }

  // 토큰 저장
  const responseData = await response.json();
  // console.log(responseData);

  localStorage.setItem('userData', JSON.stringify(responseData));

  return redirect('/');
};
