import React from 'react';
import { redirect, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { EVENT_URL } from '../config/host-config';
import { getUserToken } from '../config/auth';

const EventDetail = () => {
  // 사용범위가 본인컴포넌트와 그 하위 컴포넌트(children은 하위가 아님)
  // const ev = useLoaderData(); // 자신의 loader를 불러옴

  const ev = useRouteLoaderData('event-detail'); // 부모의 loader를 불러오는 훅

  return <EventItem event={ev} />;
};

export default EventDetail;

export const loader = async ({ params }) => {
  const { eventId: id } = params;

  // console.log('abc: ', abc.params.eventId);

  // use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능
  // const { eventId: id } = useParams();
  // const [ev, setEv] = useState({});

  const response = await fetch(`${EVENT_URL}/${id}`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + getUserToken() }
  });

  if (!response.ok) {
    // ... 예외처리
  }

  return await response.json();
  // console.log('json: ', json);
};

// action을 트리거 하는 방법
// 실제로 버튼이 있는 곳(EventItem.js)으로 이동
export const action = async ({ params }) => {

  const response = await fetch(`${EVENT_URL}/${params.eventId}`, {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + getUserToken() }
  });

  if (!response.ok) { 
    //...
  }

  return redirect('/events');
};
