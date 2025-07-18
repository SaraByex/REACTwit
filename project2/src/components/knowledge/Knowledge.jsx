import React, { useState } from 'react';

function Knowledge({ name, email, age, message }) {
  const cityOfCalgary = [
    { id: 1, email: "jin@yahoo.com", firstname: "Hyejin", role: "Web Developer" },
    { id: 2, email: "faranak@gmail.com", firstname: "Faranak", role: "Software Engineer" },
    { id: 3, email: "sarah@yahoo.com", firstname: "Sarah", role: "Manager" }
  ];

  const [studentCount, setStudentCount] = useState(1);

  return (
    <>
      <h1>This is {name}, email is {email}, and is {age} years old</h1>
      <button onClick={() => message("WIT 2025")}>Show Alert</button>

      {cityOfCalgary.map((employee) => (
        <p key={employee.id}>
          {employee.firstname} is a {employee.role}
        </p>
      ))}

      <p>Number of students present in class: {studentCount}</p>
      <button onClick={() => setStudentCount(studentCount + 1)}>Add Student</button>
    </>
  );
}

export default Knowledge;