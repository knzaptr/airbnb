import { Slot, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RootLayout() {
  const route = useRouter();
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (userID && userToken) {
      route.replace("/home");
    } else {
      route.replace("/");
    }
  });

  const login = (id, token) => {
    setUserID(id);
    setUserToken(token);
  };

  const logout = () => {
    setUserID(null);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userID, userToken }}>
      <Slot screenOptions={{ headerShown: false }} />
    </AuthContext.Provider>
  );
}
