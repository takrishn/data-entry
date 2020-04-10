import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker'; //https://www.npmjs.com/package/react-datepicker
import { useForm } from 'react-hook-form'; // https://www.npmjs.com/package/react-hook-form

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function AddEntryModal(props) {

  const [day, setDay] = useState(new Date());
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // birthday returned by DatePicker object. birthday is stored in 
    // its own useState and added onto data object before posting
    data = {
      ...data,
      birthday: day.getFullYear() + '-' + (day.getMonth()+1) + '-' + day.getDate()
    }
    console.log(data);

    // axios.post('http://localhost:5000/users/add', data).then( res => {
    //   console.log(res.data);
    // }).catch(err => {
    //   console.log(err);
    // });

  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input type="text" name="name"  ref={register} />
          </label>
          <label>
            Position:
            <input type="text" name="position"  ref={register} />
          </label>
          <label>
            Office:
            <input type="text" name="office" ref={register} />
          </label>
          <label>
            Birthday:
            <DatePicker selected={day} onChange={date => setDay(date)} />
          </label>
          <label>
            Salary:
            <input type="number" name="salary" ref={register} />
          </label>
          <input type="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddEntryModal;