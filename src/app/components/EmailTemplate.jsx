import React from 'react';

const EmailTemplate = ({ name, message }) => {
  return (
    <>
      <div>
        <h2>Hi, {name}!</h2>
        <p>
          Thank you for reaching out to me. I appreciate you taking the time to
          connect. I have received your message, and I will review it shortly.
          You can expect a response from me as soon as possible.
        </p>
        <p>Your message submitted: </p>
        <p className="italic text-gray-500">{message}</p>
      </div>
      <h3 className="text-blue-600 font-bold">David Tung</h3>
      <p>
        <strong>Number:</strong> +1 (510)-500-2752
      </p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:david.yuhsuan.tung@gmail.com" className="text-blue-600">
          david.yuhsuan.tung@gmail.com
        </a>
      </p>
    </>
  );
};

export default EmailTemplate;
