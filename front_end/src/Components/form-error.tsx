import React from "react";

interface FormErrorProps {
  errorMessage: string;
}
export const FormError: React.FC<FormErrorProps> = ({ errorMessage }) => {
  return <span className="font-medium text-red-500">{errorMessage}</span>;
};
