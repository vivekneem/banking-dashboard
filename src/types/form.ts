export interface FormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface FormField {
  pattern?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  key: keyof FormData;
  label: string;
  type: string;
}
