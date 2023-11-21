import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./login.scss";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div
        className="form-login"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="title">Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
        <p className="text">
          Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
          tại đây!
        </p>
        <button
          className="codepen-button"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          <span>Log in</span>
        </button>
      </div>
    )
  );
};

export default LoginButton;
