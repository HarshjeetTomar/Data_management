import axios from "axios";
import React, { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Updte = () => {
  const [formData, setFormData] = useState({
    empId: "",
    empName: "",
    class: "",
  });
  const [msg, setMsg] = useState();
  const [err, setErr] = useState({
    empIdErr: "",
    empNameErr: "",
    classErr: "",
  });
  const nevigate = useNavigate();
  let params = useParams();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/" + params.id)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  const HandleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.empId === "" ||
      formData.empName === "" ||
      formData.class === ""
    ) {
      setMsg("please fill all the ndetail");
      console.log("hey fuvk you");
    } else {
      axios
        .put("http://localhost:3000/employee/"+params.id,formData)
        .then((res) => {
          alert("updated success");
          nevigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  const validator = (name, value) => {
    var Error = err;
    switch (name) {
      case "empId":
        if (value.length !== 4) {
          Error.empIdErr = "please fill 4 dight number";
        } else {
          Error.empIdErr = "";
        }
        break;
      case "empName":
        if (value.length <= 4) {
          Error.empNameErr = "please Enter 4 letter atleast";
        } else {
          Error.empNameErr = "";
        }
        break;

      case "class":
        if (value.length === 0) {
          Error.classErr = "fill some ";
        } else {
          Error.classErr = "";
        }
        break;
      default:
        break;
    }
    setErr(Error);
    if (Object.values(Error).every((value) => value === "")) {
      setStatus(true);
      setMsg("");
    } else {
      setStatus(false);
    }
  };
  return (
    <div>
      <Form className="mb-3 px-5" onSubmit={HandleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>EMPLOYEE ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="EMPLOYEE ID"
            name="empId"
            value={formData.empId}
            onChange={HandleChange}
            onBlur={(e) => validator("empId", e.target.value)}
          />
        </Form.Group>

        {err.empIdErr ? (
          <span className="text-danger">({err.empIdErr})</span>
        ) : null}
        <br />
        <br />
        <Form.Group className="mb-3">
          <Form.Label>EMPLOYEE NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="EMPLOYEE NAME"
            name="empName"
            value={formData.empName}
            onChange={HandleChange}
            onBlur={(e) => validator("empName", e.target.value)}
          />
        </Form.Group>

        {err.empNameErr ? (
          <span className="text-danger">({err.empNameErr})</span>
        ) : null}
        <br />
        <br />

        <Form.Group className="mb-3">
          <Form.Label>CLASS</Form.Label>
          <Form.Control
            type="text"
            placeholder="CLASS"
            name="class"
            value={formData.class}
            onChange={HandleChange}
            onBlur={(e) => validator("class", e.target.value)}
          />
        </Form.Group>

        {err.classErr ? (
          <span className="text-danger">({err.classErr})</span>
        ) : null}
        <br />
        <br />

        <Button variant="primary" type="submit" disabled={!status}>
          Submit
        </Button>
      </Form>
      <br />
      <h2>{msg}</h2>
    </div>
  );
};

export default Updte;
