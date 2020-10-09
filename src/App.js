import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Spinner } from 'reactstrap';
import { SEARCH } from './services/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [input, setInput] = useState(""); 
  const [ouput, setoutput] = useState("____________");
  const [isLoading, setLoading] = useState(false);
  
  const onChange = (e) => {
    setInput(e.target.value);
  }

  const onSearch = async () => {
    try {
      if (!input) {
        alert('Please type something to search ...');
      } else {
        setLoading(true);
        const result = await SEARCH(input);
        setLoading(false);
        if (result.status) {
          if (result.found) {
            setoutput(result.outletName);
          } else {
            setoutput('Not found.');
          }
        } else {
          setoutput('Not found.');
        }
      }
    } catch (e) {
      setoutput('Something went wrong.Please try after sometime.');
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h2> Outlet Identifier </h2>
      </div>
      <div className="input">
        <InputGroup>
          <Input value={input} onChange={onChange} placeholder="Please type your address"/>
          <InputGroupAddon addonType="append">
            <Button
              color={isLoading ? "secondary" : "primary"}
              disabled={isLoading ? true : undefined}
              onClick={onSearch}>
              {isLoading ? "Searching..." : "Search"}
            </Button>
            { isLoading ? <Spinner color="dark" /> : null}
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="output">
        <h5> Outlet : </h5>
        <h5> <strong>{ouput}</strong> </h5>
      </div>
    </div>
  );
}

export default App;