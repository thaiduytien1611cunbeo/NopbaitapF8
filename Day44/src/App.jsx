import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import LoginButton from "./components/login/LoginButton";
import LogoutButton from "./components/logout/LogoutButton";
import Profile from "./components/profile/Profile";
import { useSelector } from "./core/hook";

function App() {
  const { isLoading, error } = useAuth0();
  const showLoading = useSelector((state) => state.showLoading);

  // console.log(showLoading);

  return (
    <main>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <Loading />}
      {!error && !isLoading && showLoading && <Loading />}
      {!error && !isLoading && !showLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
  );
}

export default App;
