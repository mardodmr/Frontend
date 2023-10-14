import "styles/userinfo.css";
import React, { useEffect, useState } from "react";
import { createUserInfo, updateUserInfo, getUserInfo } from "api/users";
import { useNavigate } from "react-router-dom";

//TODO: upload user image and protect this {never open anything unless user completes his profile}

function UserInfo(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [socials, setSocials] = useState([""]); //form as set tags
  const [cashId, setCashId] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      phone,
      socials,
      cashId,
      governorate,
      address,
    };

    if (props.submitButton === "save") {
      console.log("this is the post method user_data", userData);
      await createUserInfo(userData);
      //disable all fields and navigate home
      navigate("/", { replace: true });
    } else {
      await updateUserInfo(userData);
      //disable all fields and navigate
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    async function fetchUserInfo() {
      const {
        firstName,
        lastName,
        phone,
        socials,
        cashId,
        address,
        governorate,
      } = await getUserInfo();
      setFirstName(firstName);
      setLastName(lastName);
      setPhone(phone);
      setSocials(socials);
      setCashId(cashId);
      setAddress(address);
      setGovernorate(governorate);
    }

    if (props.submitButton === "update") {
      console.log("i'm getting user info to display here");
      fetchUserInfo();
    }
  }, []);
  return (
    <div className="user-info">
      <form onSubmit={handleSubmit}>
        {props.submitButton === "save" ? (
          <h1>Add your info:</h1>
        ) : (
          <h1>Update your info:</h1>
        )}
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First name
          </label>
          <input
            placeholder="First name"
            className="form-control"
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last name
          </label>
          <input
            placeholder="Last name"
            id="last-name"
            className="form-control"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Syrian phone number
          </label>
          <input
            placeholder="Phone number"
            id="phone"
            className="form-control"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="governorate" className="form-label">
            Governorate{" "}
          </label>
          <input
            placeholder="Governorate"
            id="governorate"
            className="form-control"
            required
            value={governorate}
            onChange={(e) => setGovernorate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="socials" className="form-label">
            Social Media links{" "}
          </label>
          <input
            placeholder="Link your socials"
            className="form-control"
            id="socials"
            value={socials}
            required
            onChange={(e) => setSocials(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cash-id" className="form-label">
            Syriatel Cash ID
          </label>
          <input
            placeholder="Add your Syriatel Cash ID"
            className="form-control"
            id="cash-id"
            value={cashId}
            required
            onChange={(e) => setCashId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            rows={4}
            cols={40}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {props.submitButton}
        </button>
      </form>
    </div>
  );
}

export default UserInfo;
