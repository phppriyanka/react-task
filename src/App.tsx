// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import React from 'react';
import './App.css';
import DataTable from './components/DataTable';

// Define the interface for the user data type
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const App: React.FC = () => {

  const userData: User[] = [
    { id: 1, name: 'Priyanka Bhuyan', email: 'priyanka.bhuyan@oasystspl.com', age: 23 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 22 },
  
  ];

  // Accessing environment variables
  const apiUrl = process.env.REACT_APP_API_URL;
  const appEnv = process.env.REACT_APP_ENV;

  return (
    <div className="App">
      <h1>User Data Table</h1>
      {/* <p>API URL: {}</p> */}
      {/* <p>Environment : Development</p> */}
     
      <DataTable data={userData} />
    </div>
  );
};

export default App;

