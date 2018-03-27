import React from 'react';

const Manage = ({ wiNumber, modalHandler }) => (
  <button
    onClick={() => modalHandler('manage', wiNumber)} 
    number={wiNumber}
    type="button"
    className="btn btn-outline-primary btn-sm btn-block"
    data-toggle="modal"
    data-target="#createWorkitem"
  >
    Manage
  </button>
);

export default Manage;