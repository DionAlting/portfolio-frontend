export type submitValues = {
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type SignUpProps = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleSubmit: (values: submitValues) => void;
};
