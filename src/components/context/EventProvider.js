import React, { useState } from 'react';
import EventContext from './event-context';

const EventProvider = ({ children }) => {
  const [totalEventCount, setTotalEventCount] = useState(0);

  return (
    <EventContext.Provider
      value={{
        totalEventCount,
        changeTotalEventCount: (count) => setTotalEventCount(count),
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
