
const LOCAL_PORT = 8787; // 백엔드 로컬 서버 포트번호

// 예를들어 지금 요청하는 브라우저의 host가 http://localhost:3000 이라면
// hostname은 localhost만 리턴
// https://www.naver.com => hostname은 www.naver.com만 리턴
const clientHostName = window.location.hostname;

let backendHostName;

if (clientHostName === 'localhost') {
  backendHostName = 'http://localhost:' + LOCAL_PORT;
} else if (clientHostName === 'my-event-app998877.s3-website.ap-northeast-2.amazonaws.com') {
  backendHostName = 'http://3.38.68.209:8989';
}

const API_BASE_URL = backendHostName;

const EVENT = '/events';
const AUTH = '/auth';

export const EVENT_URL = API_BASE_URL + EVENT;
export const AUTH_URL = API_BASE_URL + AUTH;