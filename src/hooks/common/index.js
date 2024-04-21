import {
  login,
  getDashboardProducts,
  getAuctions,
  signUp
} from "../../services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
// import { setLoginData } from "../../Authentication/Login/loginSlice";
// import { setUser } from "../../store/userSlice";
import { setToLocalStorage } from "../../utils/localStorage";
// import {  useNavigate } from "react-router";


export const useLogin = (onError, handleSuccess) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: (Data) => {
      return login(Data);
    },
    
      onSuccess: (data) => {
      // console.log("object", data.access)
      handleSuccess(data)
        // let { user, ...rest } = data;
        setToLocalStorage("authToken", data.access);
        setToLocalStorage("user", JSON.stringify(data));
        setToLocalStorage("email", data.email);
        setToLocalStorage("isSeller", data.isSeller);
        setToLocalStorage("isBuyer", data.isBuyer);

    
        // dispatch(setLoginData({ ...rest, access: data.access }));
        // dispatch(setUser(user));
         // navigate("/");
      },
      onError,
    }
  );
};


export const useSignUp = (onError, handleSuccess) => {
  return useMutation({
    mutationFn: (Data) => {
      return signUp(Data);
    },
    
      onSuccess: (data) => {
      handleSuccess(data)
      },
      onError,
    }
  );
};


export const useDashboardProducts = (page) => {
  return useQuery({
    queryKey: [`fetchDashboardStats${page}`],
    queryFn: () => getDashboardProducts(page),
    select: (data) => data,
    onError: () => {},
  });
};

export const usegetAuctions = (page) => {
  return useQuery({
    queryKey: [`AuctionsGetAll${page}`],
    queryFn: () => getAuctions(page),
    select: (data) => data,
    onError: () => {},
  });
};