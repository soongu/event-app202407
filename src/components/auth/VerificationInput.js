import React, { useEffect, useRef, useState } from 'react';
import styles from './SignUpForm.module.scss';

const VerificationInput = () => {

  // 여러개의 컴포넌트에 ref를 거는 방법
  const inputsRef = useRef([]);

  // 입력한 인증코드를 저장
  const [codes, setCodes] = useState([]);


  // 다음 칸으로 포커스를 이동하는 함수
  const focusNextInput = (index) => {
    
    if (index < inputsRef.current.length) {
      inputsRef.current[index].focus();
    }
  };

  // 서버에 검증요청 보내기
  const verifyCode = async (code) => {
    console.log('요청 전송!: ', code);
  };

  const changeHandler = (index, inputValue) => {

    const updatedCodes = [...codes, inputValue ];
    console.log(updatedCodes);

    // codes변수에 입력한 숫자 담아놓기
    setCodes(updatedCodes);

    // 입력이 끝나면 다음 칸으로 포커스 이동
    focusNextInput(index);

    // 입력한 숫자 합치기
    // join() : 배열안에 있는 요소를 전부 연결
    if (updatedCodes.length === 4 && index === 4) {
      const code = updatedCodes.join('');
      // 서버로 인증코드 검증 요청 전송
      verifyCode(code);
    }

  };


  useEffect(() => {
    // 처음엔 첫번째 칸에 포커싱
    inputsRef.current[0].focus();
  }, []);

  return (
    <>
      <p>Step 2: 이메일로 전송된 인증번호 4자리를 입력해주세요.</p>
      <div className={styles.codeInputContainer}>
        {
          Array.from(new Array(4)).map((_, index) => (
              <input 
                ref={($input) => inputsRef.current[index] = $input}
                key={index}
                type='text'
                className={styles.codeInput}
                maxLength={1}
                onChange={(e) => changeHandler(index + 1, e.target.value)}
              />
          ))
        }

        
      </div>
    </>
  );
};

export default VerificationInput;
