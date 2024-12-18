import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-50 text-red-500 p-4 rounded-lg">
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
