import { useContext } from "react";
import AuthContext from "../contexts/Auth";

import tokenStore from "../util/userTokenStore";
import { jwtDecode } from "jwt-decode";

export default () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (authToken) => {
    const { ok } = await tokenStore.storeToken(authToken);
    console.log(ok);
    ok ? setUser(jwtDecode(authToken)) : setUser(null);
  };

  const logout = () => {
    tokenStore.removeToken();
    setUser(null);
  };

  return { user, login, logout };
};
