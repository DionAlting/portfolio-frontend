import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudyAssoc, User } from "../../../redux";
import { EditProfileForm } from "./component";
import { UpdateProfileValues } from "./types";

const EditProfileFormContainer = () => {
  const dispatch = useDispatch();
  const studyAssociations = useSelector(StudyAssoc.Selectors.studyAssociations);
  const user = useSelector(User.Selectors.user);

  useEffect(() => {
    dispatch(StudyAssoc.Actions.fetchStudyAssoc());
  }, [dispatch]);

  const handleUpdateProfileSubmit = (values: UpdateProfileValues) => {
    console.log(values);
  };

  return (
    <EditProfileForm
      studyAssociations={studyAssociations}
      user={user}
      handleUpdateProfileSubmit={handleUpdateProfileSubmit}
    />
  );
};

export default EditProfileFormContainer;
