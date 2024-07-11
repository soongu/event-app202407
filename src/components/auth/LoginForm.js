import React from 'react';
import { Form, Link } from 'react-router-dom';  // Link 컴포넌트 추가
import styles from './LoginForm.module.scss';

const LoginForm = () => (
  <>
    <Form method="post" className={styles.form}>
      <h1>Log in</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required/>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required/>
      </p>
      <div className={styles.actions}>
        <button type="submit" className={styles.loginButton}>Login</button>
      </div>
      <div className={styles.registerLink}>
        <Link to="/sign-up">회원이 아니십니까? 회원가입을 해보세요</Link>
      </div>
    </Form>
  </>
);

export default LoginForm;
