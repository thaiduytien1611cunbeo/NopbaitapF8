import React, { useState } from "react";
import "../assets/home.scss";
import { client } from "../script/client";
import { useDispatch } from "../core/hook";

function Home() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const url = `/api-key?email=${email}`;

    dispatch({
      type: "Loading/addLoading",
    });

    const { data, response } = await client.get(url);

    dispatch({
      type: "Loading/removeLoading",
    });

    dispatch({
      type: "Product/showProduct",
    });

    const { apiKey } = data.data;
    client.setDataCookie(apiKey, email);

    client.setApiKey(client.getCookie("apiKey"));
  };

  return (
    <>
      <div className="body">
        <form action="" className="form-home" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              className="input-email"
              placeholder="example@example.com"
              onChange={handleChange}
              defaultValue={email}
            />
          </label>
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Home;
