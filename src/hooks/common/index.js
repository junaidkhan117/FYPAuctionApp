import {
  getDashboardStats,
  login
} from "../../services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../Authentication/Login/loginSlice";
import { setUser } from "../../store/userSlice";
import { setToLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router";
export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["fetchDashboardStats"],
    queryFn: () => getDashboardStats(),
    select: (data) => data,
    onError: () => {},
  });
};

export const useLogin = (onError, handleSuccess) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    ({ userName, password }) => {
      return login(userName, password);
    },
    {
      onSuccess: (data) => {
        let { user, ...rest } = data.data;
        // setToLocalStorage("authToken", data.token);
        // setToLocalStorage("user", JSON.stringify(user));
        // setToLocalStorage("websiteMenu", JSON.stringify(data.data.websiteMenu));
        // setToLocalStorage("allowedUserAction", JSON.stringify(data.data.allowedUserAction));
        // dispatch(setLoginData({ ...rest, token: data.token }));
        // dispatch(setUser(user));

      
      navigate("/");
      
        // data.data.websiteMenu.forEach((das, index)=>{
        //     navigate(`${das.url}`);
        // })
      },
      onError,
    }
  );
};