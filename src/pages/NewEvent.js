import React, { useContext, useEffect } from 'react';
import EventForm from '../components/EventForm';
import EventContext from '../context/event-context';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

const NewEvent = () => {

  const navigate = useNavigate();
  const {role} = useRouteLoaderData('user-data');
  const {totalCount} = useContext(EventContext);

  useEffect(() => {
    if (role === 'COMMON' && totalCount >= 4) {
      alert('일반 회원은 더 이상 이벤트를 생성할 수 없습니다.');
      navigate('/events');
    }
  }, [totalCount]);

  return <EventForm method="post" />;
};

export default NewEvent;

