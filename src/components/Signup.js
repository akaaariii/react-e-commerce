import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Validator from '../utils/Validator';

const Signup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState([]);

  const {name, email, password} = formData;
  const onChange = (e) => {
    console.log(e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = (e) => {
    e.preventDefault();
    let errors = [];
    if(name === ''){
      errors.push('Name is required');
    }
    if(!Validator.checkEmail(email)){
      errors.push('Email is not valid');
    }
    if(!Validator.checkPassword(password)){
      errors.push('Password should contain lowercase, uppercase and symbol')
    }

    if(errors.length > 0){
      setFormErrors(errors)
    } else {
      handleClose();
    }
  }

  return (
    <>
      {formErrors.length > 0 &&
        <ul>
          {formErrors.map((formError, index) => (
            <li key={index}>{formError}</li>
          ))}
        </ul>
      }
      <div>
        <button className="btn" onClick={handleClickOpen}>
          <i className="fas fa-user"></i> Sign In
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Your name"
              type="text"
              fullWidth
              onChange={e => onChange(e)}
            /> 
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={e => onChange(e)}
            />
            <TextField
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              onChange={e => onChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={validateForm} color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Signup;