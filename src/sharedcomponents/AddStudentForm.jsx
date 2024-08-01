import React, { useState } from "react";
import "../css/DashboardHome.css";
import { useImmer } from "use-immer";
import store from "../redux/stores/userStore";
const studentData = {
  institution_id: store.getState().id,
  admission_no: "",
  basic: {
    first_name: "",
    second_name: "",
    dob: "",
    gender: "",
  },
  address: {
    building_no: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    country: "",
  },
  standards: "",
  role_number: "",
  section: "",
};

function AddStudentForm() {
  const [data, updateData] = useImmer(studentData);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/student/add`,
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log(response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddress = (e) => {
    updateData((change) => {
      change.address[e.target.name] = e.target.value;
    });
  };

  const handleBasic = (e) => {
    updateData((draft) => {
      draft.basic[e.target.name] = e.target.value;
    });
    console.log(data);
  };
  const handleChange = (e) => {
    console.log(data);
    updateData((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  return (
    <form
      className="student-form"
      action=""
      onSubmit={handleSubmit}
      method="post"
    >
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">First Name</label>
          <input
            name="first_name"
            onChange={(e) => handleBasic(e)}
            required
            type="text"
            value={data.first_name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Last Name</label>
          <input
            name="second_name"
            value={data.second_name}
            onChange={(e) => handleBasic(e)}
            required
            type="text"
          />
        </div>
      </div>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">Admission Number</label>
          <input
            name="admission_no"
            onChange={(e) => handleChange(e)}
            required
            type="number"
            value={data.admission_no}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Standard</label>
          <input
            name="standards"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.standards}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">Section</label>
          <input
            name="section"
            onChange={(e) => handleChange(e)}
            required
            pattern="[a-z]{1}"
            type="text"
            value={data.section}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Role Number</label>
          <input
            name="role_number"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.role_number}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">Date of birth</label>
          <input
            name="dob"
            onChange={(e) => handleBasic(e)}
            required
            type="date"
            value={data.dob}
          />
        </div>
        <div className="input-group">
          <h2>Gender</h2>
          <div className="gender-section">
            <div className="flex gap-1">
              <input
                name="gender"
                onChange={(e) => {
                  setMale(e.target.checked);
                  setFemale(false);
                  setOther(false);
                  updateData((draft) => {
                    draft.basic[e.target.name] = e.target.value;
                  });
                }}
                required
                value="male"
                type="radio"
                checked={male}
              />
              <label htmlFor="">Male</label>
            </div>
            <div className="flex gap-1">
              <input
                name="gender"
                onChange={(e) => {
                  setMale(false);
                  setFemale(e.target.checked);
                  setOther(false);
                  updateData((draft) => {
                    draft.basic[e.target.name] = e.target.value;
                  });
                }}
                required
                type="radio"
                value="female"
                checked={female}
              />
              <label htmlFor="">Female</label>
            </div>
            <div className="flex gap-1">
              <input
                name="gender"
                onChange={(e) => {
                  setMale(false);
                  setFemale(false);
                  setOther(e.target.checked);
                  updateData((draft) => {
                    draft.basic[e.target.name] = e.target.value;
                  });
                }}
                required
                type="radio"
                value="other"
                checked={other}
              />
              <label htmlFor="">Other</label>
            </div>
          </div>
        </div>
      </div>
      <h2 className="fs-500">Address</h2>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">House Number</label>
          <input
            name="building_no"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={data.building_no}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Area/Locality</label>
          <input
            name="locality"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={data.locality}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">City</label>
          <input
            name="city"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={data.city}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">District</label>
          <input
            name="district"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={data.district}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="input-group">
          <label htmlFor="">State</label>
          <input
            name="state"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={data.state}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Country</label>
          <input
            name="country"
            onChange={(e) => handleAddress(e)}
            required
            type="text"
            value={"India"}
          />
        </div>
      </div>
      <input type="submit" value="Save" className="submit-btn" />
    </form>
  );
}

export default AddStudentForm;
