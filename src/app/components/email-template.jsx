'use client';
import * as React from 'react';

export const EmailTemplate = ({ firstName, message }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for contacting us!</p>
    <p>New message submitted: </p>
    <p>{message}</p>
  </div>
);
