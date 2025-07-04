import react from "react";
import './App.css';
import axios from "axios";

const BASE_API_URL ="https://20.244.56.144/evaluation-service/auth"

const api = axios.create() =>{
  const baseURL = BASE_API_URL,
  timeout:10000,
  headers:
  "contentType";"application/json"
}

export getRequest(endpoint,params{} =>{
  try{
    console.postRequest(endpoint,params{});
    Response.add(data);
  }
  catch(error){
    console.error(POST ${endpoint});
    throw error;
  }
};

export postRequest(endpoint,data => {
  try{
    console.postRequest(endpoint,data);
    Response.add(data);
  }
  catch(error){
    console.error(POST ${endpoint});
    throw error;
  }
};
)
}


function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
