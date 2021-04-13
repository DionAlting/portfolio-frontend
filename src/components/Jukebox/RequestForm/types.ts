export type RequestFormProps = {
  handleRequestSubmit: (values: RequestValues) => void;
  isAuthenticated: boolean;
};

export type RequestValues = {
  artist: string;
  title: string;
};
