import React, { useState } from "react";
import { FormField, FormData } from "../../../types/form";

interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

const getValidationRules = (
  type: string,
  field: FormField
): ValidationRule[] => {
  switch (type) {
    case "email":
      return [
        {
          test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
          message: "Please enter a valid email address",
        },
      ];
    case "password":
      return [
        {
          test: (value) => value.length >= 8,
          message: "Password must be at least 8 characters",
        },
        {
          test: (value) => /[A-Z]/.test(value),
          message: "Password must contain at least one uppercase letter",
        },
        {
          test: (value) => /[a-z]/.test(value),
          message: "Password must contain at least one lowercase letter",
        },
        {
          test: (value) => /[0-9]/.test(value),
          message: "Password must contain at least one number",
        },
      ];
    case "text":
      if (field.key === "postalCode") {
        return [
          {
            test: (value) => /^\d{5}(-\d{4})?$/.test(value),
            message: "Please enter a valid postal code",
          },
        ];
      }
      return [
        {
          test: (value) => value.length >= 2,
          message: `${field.label} must be at least 2 characters`,
        },
      ];
    default:
      return [];
  }
};

const FormInput: React.FC<{
  field: FormField;
  value: string;
  onChange: (key: keyof FormData, value: string) => void;
}> = ({ field, value, onChange }) => {
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateField = (value: string) => {
    const rules = getValidationRules(field.type, field);
    const newErrors = rules
      .filter((rule) => !rule.test(value))
      .map((rule) => rule.message);
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleBlur = () => {
    setTouched(true);
    validateField(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(field.key, newValue);
    if (touched) {
      validateField(newValue);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm text-primary mb-2">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={field.type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full p-3 border rounded-lg transition-colors ${
          touched && errors.length > 0
            ? "border-red-500 focus:border-red-500"
            : "border-gray-200 focus:border-primary"
        }`}
        required={field.required}
        placeholder={field.placeholder}
        minLength={field.type === "password" ? 8 : undefined}
        pattern={field.pattern}
      />
      {touched && errors.length > 0 && (
        <div className="mt-1 space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-red-500">
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormInput;
