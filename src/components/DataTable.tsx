// src/components/DataTable.tsx
import React from 'react';

// Define the types for the props
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface DataTableProps {
  data: User[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div>
     <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
