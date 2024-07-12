import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import ProgressBar from '../ProgressBar';

const SignUpForm = () => {

  // 현재 몇 단계가 진행되고 있는지
  const [step, setStep] = useState(1);

  // 단계가 성공적으로 완료되었는지
  const [success, setSuccess] = useState(false);

  // 입력된 이메일
  const [enteredEmail, setEnteredEmail] = useState('');

  // 이메일 중복확인이 끝났을 때 호출될 함수
  const emailSuccessHandler = (email) => {

    setSuccess(true);
    setEnteredEmail(email);

    setTimeout(() => {
      setStep(2);
      setSuccess(false);
    }, 1500);

  };

  return (
    <div className={styles.signupForm}>
      <div className={styles.formStepActive}>

        {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}

        {step === 2 && <VerificationInput email={enteredEmail} />}

        {success && <ProgressBar />}

      </div>
    </div>
  );
};

export default SignUpForm;
