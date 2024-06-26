import {
  login,
  getDashboardProducts,
  getAuctions,
  createAuction,
  signUp,
  getPrice,
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
      handleSuccess(data);
      // let { user, ...rest } = data;
      setToLocalStorage("authToken", data.access);
      setToLocalStorage("user", JSON.stringify(data));
      setToLocalStorage("userId", data.user_id);
      setToLocalStorage("email", data.email);
      setToLocalStorage("userType", data.userType);

      // "user_id": 6,
      // "email": "jk1@gmail.com",
      // "userType": "buyer"
      // dispatch(setLoginData({ ...rest, access: data.access }));
      // dispatch(setUser(user));
      // navigate("/");
    },
    onError,
  });
};

export const usegetProductPriceSuggesion = (
  productName,
  handleSuccess,
  handleError
) => {
  return useMutation({
    mutationFn: () => getPrice(productName),
    onSuccess: (data) => handleSuccess(data),
    onError: (error) => handleError(error),
  });
};

export const useSignUp = (onError, handleSuccess) => {
  return useMutation({
    mutationFn: (Data) => {
      return signUp(Data);
    },

    onSuccess: (data) => {
      handleSuccess(data);
    },
    onError,
  });
};

export const useAuction = (onError, handleSuccess) => {
  return useMutation({
    mutationFn: (Data) => {
      return createAuction(Data);
    },

    onSuccess: (data) => {
      handleSuccess(data);
    },
    onError,
  });
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
