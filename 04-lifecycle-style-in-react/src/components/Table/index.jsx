import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
// import Button from "react-bootstrap/Button";
import AddData from "./AddData";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Tablex = () => {
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);

      setData(res.data);
    });

    // codes
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained">Contained</Button>
      <ul>
        {data.map((elem, i) => {
          return <li key={uuidv4()}>{elem.id}</li>;
        })}
      </ul>
    </>
  );
};

export default Tablex;
