import React from 'react';
import Button from 'react-bootstrap/Button';

import Datatable from './../../components/data-table/data-table';
import AddEntryModal from './../../components/add-entry-modal/add-entry-modal';
import JSONdata from './../../components/data-table/data.json';

import './data-table-page.scss';

const DatatablePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="page-container">
        <div className="top-grid">
            <h1 className="title">Super Fancy Datatable</h1>
            <Button className="add-entry-btn" onClick={() => setModalShow(true)}>Add +</Button>
        </div>
        <Datatable data={JSONdata}></Datatable>

        <AddEntryModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
  );
}

export default DatatablePage;