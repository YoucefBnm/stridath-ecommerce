import { checkUserSession } from "@/store/user/user.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useCheckUserSession() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
}
