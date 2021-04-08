export type submitValues = {
  email: string;
  password: string;
};

export type loginProps = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleSubmit: (values: submitValues) => void;
};
