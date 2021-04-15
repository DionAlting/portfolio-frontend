import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../redux/user";

export const useBootstrapLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.bootstrapLogin());
  }, [dispatch]);
};
