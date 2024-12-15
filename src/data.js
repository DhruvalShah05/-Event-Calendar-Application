// data.js
const getStoredEvents = () => {
    const events = localStorage.getItem('events');
    return events ? JSON.parse(events) : [];
  };
  
  const storeEvents = (events) => {
    localStorage.setItem('events', JSON.stringify(events));
  };
  
  export const addEvent = (event) => {
    const events = getStoredEvents();
    events.push(event);
    storeEvents(events);
  };
  
  export const removeEvent = (eventId) => {
    let events = getStoredEvents();
    events = events.filter(event => event.id !== eventId);
    storeEvents(events);
  };
  
  export const getEvents = (selectedDate) => {
    const events = getStoredEvents();
    return events.filter(event => event.date === selectedDate.toDateString());
  };
  