export type ChangePasswordProps = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleChangePasswordSubmit: (values: SubmitValues) => void;
};

export type SubmitValues = {
  password: string;
  passwordConfirm: string;
};
