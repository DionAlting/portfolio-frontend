export type EditProfileFormProps = {
  studyAssociations: StudyAssoc[];
  user: User;
  handleUpdateProfileSubmit: (values: UpdateProfileValues) => void;
};

export type StudyAssoc = {
  id: string;
  name: string;
  color: string;
};

export type User = {
  isAuthenticated: boolean;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string;
  studyAssociation: { name: string; id: string };
};

export type UpdateProfileValues = {
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  studyAssociationId: string;
};
