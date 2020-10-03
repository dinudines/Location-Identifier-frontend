import React, { useState } from 'react';
import { Input } from 'antd';
import { SEARCH } from './services/index';
import './App.css';
import 'antd/dist/antd.css';

function App() {

  const { Search } = Input;
  const [input, setInput] = useState(""); 
  const [ouput, setoutput] = useState("");
  
  const onChange = (e) => {
    setInput(e.target.value);
  }

  const onSearch = async () => {
    try {
      const result = await SEARCH(input);
      if (result.status) {
        if (result.found) {
          setoutput(result.outletName);
        } else {
          setoutput('Not found.');
        }
      } else {
        setoutput('Something went wrong.Please try after sometime.');
      }
    } catch (e) {
      setoutput('Something went wrong.Please try after sometime.');
    }
  }

  return (
    <div className="App">
      <h1> Location Identifier </h1>
      <div className="output">
        <Search
          placeholder="Input search text"
          enterButton="Search"
          size="large"
          value={input}
          onChange={onChange}
          onSearch={onSearch}
        />
      </div>
      <div className="output">
        <p> ouput : {ouput} </p>
      </div>
    </div>
  );
}

export default App;