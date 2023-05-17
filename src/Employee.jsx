import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  let nevigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);
  const deleteItem = (id) => {
    axios
      .delete("http://localhost:3000/employee/" + id)
      .then((res) => {alert(`we deleted the id ${id}`);nevigate(0)})
      .catch((err) => console.log(err));
  };
  const updateItem=(id)=>{
    nevigate("/UPDATE/"+id)
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> EMPLOYEE ID</th>
            <th>EMPLOYEE NAME</th>
            <th>EMPLOYEE CLASS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.class}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteItem(emp.id)}>
                    DELETE
                  </Button>{" "}
                  <Button variant="primary" onClick={()=>updateItem(emp.id)}>UPDATE</Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Employee;
