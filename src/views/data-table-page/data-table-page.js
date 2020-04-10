import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Datatable from './../../components/data-table/data-table';
import AddEntryModal from './../../components/add-entry-modal/add-entry-modal';

import './data-table-page.scss';

const DatatablePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState({});
  const [columns] = useState([
    {
      label: "name",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: "position",
      field: "position",
      sort: "asc",
      width: 270
    },
    {
      label: "office",
      field: "office",
      sort: "asc",
      width: 200
    },
    {
      label: "birthday",
      field: "birthday",
      sort: "asc",
      width: 100
    },
    {
      label: "salary",
      field: "salary",
      sort: "asc",
      width: 100
    }
  ]);

  useEffect(() => {
    // call getUsers() when the backend is up
    // getUsers();

    // dummy data to populate the table
    let rows = [];
    const bugsBunny = {
      name: 'Bugs Bunny',
      position: 'Rabbit',
      office: 'Meadow',
      birthday: '1940-07-27',
      salary: '4'
    };
    const daffyDuck = {
      name: 'Daffy Duck',
      position: 'Duck',
      office: 'Pond',
      birthday: '1937-04-17',
      salary: '-7'
    };
    rows.push(bugsBunny);
    rows.push(daffyDuck);
    setData({
      columns: columns,
      rows: rows
    });

  }, []);

  function getUsers() {
    axios.get('http://localhost:5000/users')
      .then(res => {
        console.log(res.data);
        let rows = [];
        for (let i = 0; i < res.data.length; i++) {
          const entry = res.data[i];
          const row = {
            username: entry.username,
            name: entry.name,
            position: entry.position,
            office: entry.office,
            birthday: entry.birthday,
            salary: entry.salary
          }
  
          rows.push(row);
        }
  
        setData({
          columns: columns,
          rows: rows
        });
      });
  }

  return (
    <div className="page-container">
        <div className="top-grid">
            <h1 className="title">Super Fancy Datatable</h1>
            <Button className="add-entry-btn" onClick={() => setModalShow(true)}>Add +</Button>
        </div>
        
        <Datatable data={data}></Datatable>

        <AddEntryModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
  );
}

export default DatatablePage;