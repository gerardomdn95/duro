import React from 'react';
import './statusChip.scss';

const StatusChip = ({ status }) => {

  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return setApproved();
      case 'Success':
        return setSuccess();
      case 'In Progress':
        return setInProgress()
      case 'Rejected':
        return setRejected()
      default:
        return setRejected();
    }

  }

  const setApproved = () => (
    <span className="approved">{status}</span>
  )

  const setSuccess = () => (
    <span className="success">{status}</span>
  )

  const setInProgress = () => (
    <span className="in-progress">{status}</span>
  )

  const setRejected = () => (
    <span className="rejected">{status}</span>
  )

  return handleStatus(status);
}

export default StatusChip
