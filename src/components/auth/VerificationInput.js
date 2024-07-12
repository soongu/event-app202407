import React from 'react';
import styles from './SignUpForm.module.scss';

const VerificationInput = () => {
  return (
    <>
      <p>Step 2: 이메일로 전송된 인증번호 4자리를 입력해주세요.</p>
      <div className={styles.codeInputContainer}>
        <input 
          type='text'
         />
      </div>
    </>
  );
};

export default VerificationInput;
