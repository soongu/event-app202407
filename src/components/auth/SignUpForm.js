import React, { useEffect, useState } from 'react';
import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import ProgressBar from '../ProgressBar';
import PasswordInput from './PasswordInput';

const SignUpForm = () => {

  // 현재 몇 단계가 진행되고 있는지
  const [step, setStep] = useState(1);

  // 단계가 성공적으로 완료되었는지
  const [success, setSuccess] = useState(false);

  // 입력된 이메일
  const [enteredEmail, setEnteredEmail] = useState('');
  // 입력된 패스워드
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsVaild, setPasswordIsValid] = useState(false);

  // 회원가입 버튼 활성화 여부
  const [activeButton, setActiveButton] = useState(false);

  // 다음 단계로 넘어가는 함수
  const nextStep = () => {
    setSuccess(true);

    setTimeout(() => {
      setStep(prevStep => prevStep + 1);
      setSuccess(false);
    }, 1500);
  };

  // 이메일 중복확인이 끝났을 때 호출될 함수
  const emailSuccessHandler = (email) => {
    setEnteredEmail(email);
    nextStep();
  };

  const passwordSuccessHandler = (password, isValid) => {
    setEnteredPassword(password);
    setPasswordIsValid(isValid);
  };

  useEffect(() => {
    // 활성화 여부 감시
    const isActive = enteredEmail && passwordIsVaild;
    setActiveButton(isActive);

  }, [enteredEmail, enteredPassword, passwordIsVaild]);

  return (
    <div className={styles.signupForm}>
      <div className={styles.formStepActive}>

        {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}

        {step === 2 && 
          <VerificationInput 
            email={enteredEmail} 
            onSuccess={() => nextStep()} 
          />
        }

        {step === 3 && <PasswordInput onSuccess={passwordSuccessHandler} />}

        {activeButton &&
          <div>
            <button>
              회원가입 완료
            </button>
          </div>
        }

        {success && <ProgressBar />}

      </div>
    </div>
  );
};

export default SignUpForm;
