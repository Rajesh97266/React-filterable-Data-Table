import { useState } from "react";
import "./App.css";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-primary">Filter Table Data</h4>
        <form className="col-md-6">
          <input
          className="form-control"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                // Convert search term to lowercase
                const searchTerm = search.toLowerCase();
                // Check all fields for a match
                return (
                  searchTerm === "" ||
                  item.first_name.toLowerCase().includes(searchTerm) ||
                  item.last_name.toLowerCase().includes(searchTerm) ||
                  item.email.toLowerCase().includes(searchTerm) ||
                  item.phone.toLowerCase().includes(searchTerm)
                );
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
