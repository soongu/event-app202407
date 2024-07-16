import React, { useState } from 'react';
import EventContext from './event-context';

const EventProvider = ({ children }) => {

  const [totalCount, setTotalCount] = useState(0);

  return (
    <EventContext.Provider
      value={{
        totalCount,
        changeCount: (count) => setTotalCount(count)
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
