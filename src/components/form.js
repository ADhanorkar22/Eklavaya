import React, { useReducer } from 'react';

const UserRegistrationForm = () => {
  const initialState = {
    First_Name: { value: '', valid: false, touched: false, error: '' },
    Last_Name: { value: '', valid: false, touched: false, error: '' },
    Address: { value: '', valid: false, touched: false, error: '' },
    Contact_Number: { value: '', valid: false, touched: false, error: '' },
    Email: { value: '', valid: true, touched: false, error: '' },
    UserName: { value: '', valid: false, touched: false, error: '' },
    Password: { value: '', valid: false, touched: false, error: '' },
    Form_Valid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update': {
        const { key, value, valid, touched, error, Form_Valid } = action.data;

        return {
          ...state,
          [key]: { value, valid, touched, error },
          Form_Valid,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);

    let Form_Valid = true;
    for (let key in state) {
      if (!state[key].valid) {
        Form_Valid = false;
        break;
      }
    }

    dispatch({ type: 'update', data: { key, value, valid, touched: true, error, Form_Valid } });
  };

  const validateData = (key, value) => {
    let valid = true;
    let error = '';

    switch (key) {
      case 'First_Name':
      case 'Last_Name':
        var pattern = /^[a-zA-Z]+$/;
        if (!pattern.test(value)) {
          valid = false;
          error = 'Enter a valid name';
        }
        break;
      case 'Contact_Number':
        var pattern = /^[6-9]\d{9}$/;
        if (!pattern.test(value)) {
          valid = false;
          error = 'Enter a valid Mobile Number';
        }
        break;
      case 'Password':
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!pattern.test(value)) {
          valid = false;
          error = 'Enter a valid password';
        }
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        First_Name: state.First_Name.value,
        Last_Name: state.Last_Name.value,
        Address: state.Address.value,
        Contact_Number: state.Contact_Number.value,
        Email: state.Email.value,
        UserName: state.UserName.value,
        Password: state.Password.value,
      }),
    };

    fetch('http://localhost:9000/RegisteredFarmer', Data)
      .then(() => {})
      .then(() => {});
  };

  return (
    <div className="container mt-5 col-md-6 Float-Right">
      <h2 className="text-center mb-4">Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="First_Name"
            placeholder="Enter your first name"
            onChange={(e) => {
              handleChange('First_Name', e.target.value);
            }}
          />
          <p className="text-danger">{state.First_Name.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="last_Name"
            placeholder="Enter your last name"
            onChange={(e) => {
              handleChange('Last_Name', e.target.value);
            }}
          />
          <p className="text-danger">{state.Last_Name.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your address"
            onChange={(e) => {
              handleChange('Address', e.target.value);
            }}
          />
          <p className="text-danger">{state.Address.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            placeholder="Enter your contact number"
            onChange={(e) => {
              handleChange('Contact_Number', e.target.value);
            }}
          />
          <p className="text-danger">{state.Contact_Number.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => {
              handleChange('Email', e.target.value);
            }}
          />
          <p className="text-danger">{state.Email.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Choose a username"
            onChange={(e) => {
              handleChange('UserName', e.target.value);
            }}
          />
          <p className="text-danger">{state.UserName.error}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => {
              handleChange('Password', e.target.value);
            }}
          />
          <p className="text-danger">{state.Password.error}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;