import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

import Form from './components/Form'
import Results from './components/Results'

function App() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
})
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} />
      <Results info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
