export type RequestFormProps = {
  handleRequestSubmit: (values: RequestValues) => void;
};

export type RequestValues = {
  artist: string;
  title: string;
};
