import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./profile.scss";
import { useDispatch, useSelector } from "../../core/hook";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state.showLoading);

  const refForm = useRef();

  const sendForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "Loading/addLoading",
    });
    console.log(showLoading);

    emailjs
      .sendForm(
        "service_zsj7y9t",
        "template_kh2gqv8",
        refForm.current,
        "OPkTdbOKbm7QU8ltu"
      )
      .then(
        (result) => {
          console.log(result.text);
          dispatch({
            type: "Loading/removeLoading",
          });
        },
        (error) => {
          console.log(error.text);
          dispatch({
            type: "Loading/removeLoading",
          });
        }
      );
  };

  return (
    isAuthenticated && (
      <>
        <form
          action=""
          className="form-send-email"
          ref={refForm}
          onSubmit={sendForm}
        >
          <div className="title">
            {user?.picture && <img src={user.picture} className="img" />}
            <h2>{user.name}</h2>
          </div>
          <p className="address">Vị trí: Tiếng Việt{}</p>
          <p className="email">
            Email: <a href={user.email}>{user.email}</a>
          </p>
          <input type="text" name="from_name" defaultValue={user.name} hidden />
          <div className="email input_form">
            <span className="label">Email</span>
            <input
              type="email"
              className="input_email"
              defaultValue={user.email}
            />
          </div>

          <div className="message input_form">
            <span className="label">Message</span>
            <textarea
              name="message"
              defaultValue="Tôi cần trợ giúp bài tập về nhà!"
            ></textarea>
          </div>

          <button className="btn">Yêu cầu hỗ trợ</button>
        </form>
      </>
    )
  );
};

export default Profile;
