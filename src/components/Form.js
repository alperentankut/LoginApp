import React, { useState } from "react";
import "../styles/form.css";
import { db } from "../firebaseSetup/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
  const [nameInfo, setNameInfo] = useState("");
  const [surnameInfo, setSurnameInfo] = useState("");
  const [phoneInfo, setPhoneInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");

  const data = {
    name: nameInfo,
    surname: surnameInfo,
    phone: phoneInfo,
    email: emailInfo,
  };

  const sendData = async (e) => {
    try {
      e.preventDefault();
      const dataReference = collection(db, "user-info");
      if (
        data.name !== "" &&
        data.email !== "" &&
        data.phone !== "" &&
        data.surname !== ""
      ) {
        await addDoc(dataReference, data);

        let timerInterval;
        Swal.fire({
          title: "Kayıt Başarılı",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            window.location.reload(true);
          },
        });
      } else {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
          title: <strong>Lütfen Tüm Alanları Doldurunuz.</strong>,
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={sendData}>
        <h3 className="title">Kullanıcı Kayıt Paneli</h3>
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
            <button type="submit" className="btn">
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
