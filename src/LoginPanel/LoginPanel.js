import LoginForm from "./LoginForm/LoginForm";
import LoginHeader from "./LoginHeader/LoginHeader";
import { useState, useEffect, setState } from 'react';
import axios from "axios";

const url = "http://localhost:4000";

function LoginPanel() {
  const [subtitle, setSubtitle] = useState('zoar com a rapazeada.');
  const [auth, setAuth] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    axios.post(url + '/login', {
      user: {
        email: formJson['email'],
        password: formJson['password']
      }
    }).then(response => {
      setAuth(response.headers.getAuthorization());
    }).catch(error => {
      console.error(error)
    });
  }

  useEffect(() => {
    axios.get(url + '/welcome')
      .then(response => {
        setSubtitle(response.data.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, []);
  return (
    <div className="container">
        <div className="wrapper">

          <LoginHeader subtitle={subtitle}></LoginHeader>

          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
  )
}


export default LoginPanel;