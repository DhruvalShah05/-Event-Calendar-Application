# Event Scheduler

A simple Event Scheduler built using React that allows users to view and manage events on a calendar. The application includes functionalities to add, edit, delete, and persist events for specific days. Events are stored in `localStorage` to maintain persistence across page reloads. The UI is styled using ShadCN components for a modern and clean design.

## Features

1. **Calendar View**:
   - Display a calendar grid for the current month with days aligned properly.
   - Support switching between months with "Previous" and "Next" buttons.
   - Highlight the current day and the selected day.
   
2. **Event Management**:
   - Add, edit, and delete events.
   - Events have attributes: event name, start time, end time, and an optional description.
   - Events are shown in a list when a specific day is selected from the calendar.
   
3. **Data Persistence**:
   - Events are persisted in **localStorage**, ensuring that data remains even after page reloads.
   
4. **UI Styling**:
   - The UI is designed with **ShadCN** to ensure a clean and modern look.
   - The calendar grid visually differentiates weekends and weekdays.

## Installation

Follow these steps to get your local environment running.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/event-scheduler.git
cd event-scheduler
