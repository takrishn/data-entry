import React from 'react';
import { MDBDataTable } from 'mdbreact';

// reference:
// https://mdbootstrap.com/docs/react/tables/datatables/

const Datatable = ({ data }) => {
  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default Datatable;