import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const nameValidation = (name) => {
    if (name.length < 2 && name.length != 0) {
      return "Name must be at least 2 characters in length";
    }
    return "";
  };

  const emailValidation = (email) => {
    if (email.length < 5 && email.length != 0) {
      return "E-mail must be at least 5 characters in length";
    }
    return "";
  };

  const passwordValidation = (password) => {
    if (password.length < 8 && password.length != 0) {
      return "Password must be at least 8 characters in length";
    }
    return "";
  };

  const confirmationValidation = (password, confirmation) => {
    if (password != confirmation && confirmation.length != 0) {
      return "Passwords must match";
    }
    return "";
  };

  return (
    <fieldset>
      <legend>UserForm.jsx</legend>
      <div className="card p-3 mb-3">
        <form onSubmit={createUser}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name-input"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <p className="text-danger mt-2">{nameValidation(firstName)}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name-input"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <p className="text-danger mt-2">{nameValidation(lastName)}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="text-danger mt-2">{emailValidation(email)}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <p className="text-danger mt-2">{passwordValidation(password)}</p>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password-input"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <p className="text-danger mt-2">
              {confirmationValidation(password, confirmPassword)}
            </p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="card">
        <div className="card-header text-center">
          <h3>Your Form Data</h3>
        </div>
        <div className="card-body">
          <p>First Name: {firstName} </p>
          <p>Last Name: {lastName} </p>
          <p>E-mail: {email} </p>
          <p>Password: {password} </p>
          <p>Confirm Password: {confirmPassword} </p>
        </div>
      </div>
    </fieldset>
  );
};

export default UserForm;
