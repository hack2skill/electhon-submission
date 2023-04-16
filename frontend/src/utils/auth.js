import React, { useEffect } from "react";
import axios from "./axios";
import { api_token_store_name, retrieve, store } from "./store";
import RouteHelper from "./routeHelper";

export default function auth() {
  let isAuth =
    retrieve(api_token_store_name()) != null &&
    retrieve(api_token_store_name()) !== "" &&
    retrieve(api_token_store_name()) !== "null";

  const fetchUser = async () => {
    let user = null;

    if (isAuth) {
      try {
        user = await (await axios().get("/user")).data;
        isAuth = true;

        return { isAuth, user };
      } catch (error) {
        store(api_token_store_name(), "");
        isAuth = false;
        user = null;

        return { isAuth, user };
      }
    }

    return { isAuth, user };
  };

  const login = (data) => {
    return axios().post("/login", data);
  };

  const verify = (data) => {
    return axios().post("/verify", data);
  };

  const setToken = async (data, redirect_route = "/", is_admin = false) => {
    await store(api_token_store_name(), data.token);
    if (is_admin) {
      await store("is_admin", 1);
    }

    RouteHelper.redirect(redirect_route);
  };

  const logout = async (redirectUrl = "/", token_expired = false) => {
    try {
      if (!token_expired) {
        await axios().post("/logout");
      }
    } finally {
      store(api_token_store_name(), "");

      RouteHelper.redirect(redirectUrl);
    }
  };

  return {
    login,
    verify,
    setToken,
    logout,
    fetchUser,
    isAuth,
  };
}
