import React from 'react';
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';

const Spiner = () => {
  return (
    <>
      <div className='d-flex justify-content-center"'>
      <MDBBtn disabled >
        <MDBSpinner grow size='sm' role='status' tag='span' className='me-2' />
        Loading...
      </MDBBtn>
      </div>
    </>
  )
}

export default Spiner