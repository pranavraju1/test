import { useState } from "react";
import "./App.css";

const App = () => {
  const initialData = [
    {
      id: 1,
      name: "Arjun",
      dob: "16-11-2000",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Mahesh",
      dob: "15-01-2000",
      role: "Web Developer",
    },
    {
      id: 3,
      name: "Pranav",
      dob: "16-11-2000",
      role: "Web Developer",
    },
    {
      id: 4,
      name: "Raju",
      dob: "16-11-2000",
      role: "Web Developer",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  var filteredData = initialData.filter((item) =>
    item.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search with name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div className="items" key={item.id}>
            <p>id : {item.id}</p>
            <p>name : {item.name}</p>
            <p>dob : {item.dob}</p>
            <p>role : {item.role}</p>
          </div>
        ))
      ) : (
        <h1>not found</h1>
      )}
    </div>
  );
};

export default App;
