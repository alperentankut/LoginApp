import React, { useState } from "react";
import "../styles/form.css";
import { sendForm } from "../functions/sendFormInfo.js";
const Form = () => {
  const [nameInfo, setNameInfo] = useState("");
  const [surnameInfo, setSurnameInfo] = useState("");
  const [phoneInfo, setPhoneInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");
  const data = {
    name : nameInfo,
    surname : surnameInfo,
    phone : phoneInfo,
    email : emailInfo
  }

  return (
    <div className="form-container">
      <form>
        <div className="input-area">
          <br></br>
          <input
            placeholder="Adınızı giriniz"
            type="text"
            name="fname"
            id="fname"
            onChange={(e) => setNameInfo(e.target.value)}
          ></input>
          <br></br>
        </div>
        <div className="input-area">
          <br></br>
          <input
            placeholder="Soyadınızı giriniz"
            type="text"
            name="lname"
            id="lname"
            onChange={(e) => setSurnameInfo(e.target.value)}
          ></input>
          <br></br>
        </div>
        <div className="input-area">
          <br></br>
          <input
            placeholder="Telefon numaranızı giriniz"
            type="tel"
            name="number"
            id="pnumber"
            onChange={(e) => setPhoneInfo(e.target.value)}
          ></input>
          <br></br>
        </div>
        <div className="input-area">
          <br></br>
          <input
            placeholder="E-mail giriniz"
            type="email"
            name="mail"
            id="mail"
            onChange={(e) => setEmailInfo(e.target.value)}
          ></input>
          <br></br>
          <div className="button-area input-area">
            <button type="submit" className="btn" onClick={sendForm(data)}>
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
