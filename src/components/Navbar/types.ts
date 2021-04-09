export type NavbarProps = {
  isAuthenticated: boolean | "";
  isAdmin: boolean | "";
  isStudyAssociation: boolean | "";
  fullName: string;
  displayName: string;
  avatar: string | "";
  email: string | "";
  handleLogout: () => void;
};
