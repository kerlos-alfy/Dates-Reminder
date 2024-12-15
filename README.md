

# Dates Reminder - React App

This is a simple React app designed to help users manage important dates and reminders. It utilizes React and React-Bootstrap for styling and provides features to view, delete, and manage a list of dates.

## Features

- Display a list of dates and reminders.
- Show the total count of dates in the list.
- Provide options to delete all dates or view the original data.
- Responsive and styled with React-Bootstrap components.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-Bootstrap**: A set of React components that use Bootstrap for styling.
- **JavaScript**: The programming language used to create the app.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kerlos-alfy/Dates-Reminder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Dates-Reminder
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:5174](http://localhost:5174/) to see the app in action.

## Project Structure

- `src/`
  - `data.js`: Contains the initial date and reminder data.
  - `components/`
    - `DataCount.js`: Displays the count of dates in the list.
    - `DataList.js`: Renders the list of dates and reminders.
    - `DataActions.js`: Provides buttons to delete or view the data.
  - `App.js`: The main React component that manages the state and displays other components.
  - `App.css`: Contains the custom styling for the app.

## How to Use

1. The app initially loads with no data, as the `useEffect` hook clears the `personData` state on mount.
2. Click the "View Data" button to load the list of dates and reminders.
3. Click the "Delete Data" button to clear all reminders.
4. The app also displays the count of dates currently in the list.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

