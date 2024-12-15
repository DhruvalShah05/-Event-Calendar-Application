import React, { useState } from 'react';

const Modal = ({ closeModal, handleAddEvent, eventToEdit }) => {
  const [eventName, setEventName] = useState(eventToEdit?.name || '');
  const [startTime, setStartTime] = useState(eventToEdit?.startTime || '');
  const [endTime, setEndTime] = useState(eventToEdit?.endTime || '');
  const [description, setDescription] = useState(eventToEdit?.description || '');

  const handleSave = () => {
    const newEvent = {
      id: eventToEdit ? eventToEdit.id : Date.now(),
      name: eventName,
      startTime,
      endTime,
      description,
      date: new Date().toDateString(),
    };
    handleAddEvent(newEvent);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl">Add/Edit Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          className="border p-2 mb-2 w-full"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="time"
          className="border p-2 mb-2 w-full"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          className="border p-2 mb-2 w-full"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 mb-4 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
