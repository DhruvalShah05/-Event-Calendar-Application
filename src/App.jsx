import React, { useState, useEffect } from 'react';
import { addEvent, removeEvent, getEvents } from './data';
import Calendar from './Component/Calendar';
import Modal from './Component/Model';
import Navbar from './Component/NavBar';
import Footer from './Component/Footer';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  useEffect(() => {
    const events = getEvents(selectedDate);
    setEventsForSelectedDate(events);
  }, [selectedDate]);

  const handleAddEvent = (event) => {
    addEvent(event);
    const events = getEvents(selectedDate);
    setEventsForSelectedDate(events);
  };

  const handleRemoveEvent = (id) => {
    removeEvent(id);
    const events = getEvents(selectedDate);
    setEventsForSelectedDate(events);
  };

  const handleMonthChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + offset);
    setSelectedDate(newDate);
  };

  const handleDayClick = (day) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto mt-8">
        <h1 className="text-center text-3xl font-semibold">Event Scheduler</h1>
        <Calendar
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
          handleMonthChange={handleMonthChange}
        />

        <div className="mt-6">
          <h2 className="text-xl text-center">Events on {selectedDate.toLocaleDateString()}</h2>
          <div className="flex justify-center">
            <button onClick={() => setShowModal(true)} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Add Event
            </button>
          </div>
        </div>

        {eventsForSelectedDate.map((event) => (
          <div key={event.id} className="event-card">
            <div>{event.name}</div>
            <div>{event.startTime} - {event.endTime}</div>
            <button
              onClick={() => {
                setEventToEdit(event);
                setShowModal(true);
              }}
              className="bg-yellow-500 text-white py-1 px-4 rounded mt-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveEvent(event.id)}
              className="bg-red-500 text-white py-1 px-4 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}

        {/* Modal for adding/editing events */}
        {showModal && (
          <Modal
            closeModal={() => setShowModal(false)}
            handleAddEvent={handleAddEvent}
            eventToEdit={eventToEdit}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
