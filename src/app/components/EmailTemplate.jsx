// 'use client';
import React from 'react';

const EmailTemplate = ({ firstName, message }) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted: </p>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
