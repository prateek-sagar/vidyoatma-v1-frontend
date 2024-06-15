import React, { useState } from "react";
import "../css/DashboardHome.css";
import { useImmer } from "use-immer";
const studentData = {
  institutionId: "",
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
  standard: "",
  role_number: "",
  section: "",
};

function AddStudentForm() {
  const [data, updateData] = useImmer(studentData);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);
  const handleSubmit = async () => {
    try {
      console.log(import.meta.env.VITE_API_BASE_URL + "/dashboard");
      const response = fetch(
        `${import.meta.env.VITE_API_BASE_URL}/add/student`
      );
    } catch (error) {}
  };

  const handleChange = (e) => {
    let field_name = e.target.name;
    let value = e.target.value;

    updateData((draft) => {
      draft[field_name] = value;
    });
  };

  return (
    <form className="bg-red-200 student-form" onSubmit={() => handleSubmit()}>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">First Name</label>
          <input
            name="first_name"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.first_name}
          />
        </div>
        <div className="grid">
          <label htmlFor="">Last Name</label>
          <input
            name="second_name"
            value={data.second_name}
            onChange={(e) => handleChange(e)}
            required
            type="text"
          />
        </div>
      </div>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">Admission Number</label>
          <input
            name="admission_no"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.admission_no}
          />
        </div>
        <div className="grid">
          <label htmlFor="">Standard</label>
          <input
            name="standard"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.standard}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">Section</label>
          <input
            name="section"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.section}
          />
        </div>
        <div className="grid">
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
      <div className="single-section ">
        <div className="grid">
          <label htmlFor="">Date of birth</label>
          <input
            name="dob"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.dob}
          />
        </div>
        <div className="grid w-1/2">
          <h2>Gender</h2>
          <div className="flex items-center gap-[0.5rem]">
            <input
              name="gender"
              onChange={(e) => {
                setMale(e.target.checked);
                setFemale(false);
                setOther(false);
                updateData((draft) => {
                  draft[e.target.name] = e.target.name;
                });
              }}
              required
              type="radio"
              checked={male}
            />
            <label htmlFor="">Male</label>
            <input
              name="gender"
              onChange={(e) => {
                setMale(false);
                setFemale(e.target.checked);
                setOther(false);
                updateData((draft) => {
                  draft[e.target.name] = e.target.name;
                });
              }}
              required
              type="radio"
              checked={female}
            />
            <label htmlFor="">Female</label>
            <input
              name="gender"
              onChange={(e) => {
                setMale(false);
                setFemale(false);
                setOther(e.target.checked);
                updateData((draft) => {
                  draft[e.target.name] = e.target.name;
                });
              }}
              required
              type="radio"
              checked={other}
            />
            <label htmlFor="">Other</label>
          </div>
        </div>
      </div>
      <h2 className="fs-500">Address</h2>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">House Number</label>
          <input
            name="building_no"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.building_no}
          />
        </div>
        <div className="grid">
          <label htmlFor="">Area/Locality</label>
          <input
            name="locality"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.locality}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">City</label>
          <input
            name="city"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.city}
          />
        </div>
        <div className="grid">
          <label htmlFor="">District</label>
          <input
            name="district"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.district}
          />
        </div>
      </div>
      <div className="single-section">
        <div className="grid">
          <label htmlFor="">State</label>
          <input
            name="state"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={data.state}
          />
        </div>
        <div className="grid">
          <label htmlFor="">Country</label>
          <input
            name="country"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={"India"}
          />
        </div>
      </div>
      <input
        name="save"
        onChange={(e) => handleChange(e)}
        required
        type="submit"
        value="Save"
        className="submit-btn"
      />
    </form>
  );
}

export default AddStudentForm;
