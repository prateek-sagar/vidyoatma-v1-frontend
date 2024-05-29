import React from "react";
import { useImmer } from "use-immer";
import UserAccount from "../components/UserAccount";
import InstitutionDetails from "../components/InstitutionDetails";
import useMultistepForm from "../customHooks/useMultistepForm";
import { Link } from "react-router-dom";

const formData = {
  username: "",
  password: "",
  name: "",
  role: "INSTITUTION",
  abreviate: "",
  establishmentDate: "",
  address: {
    building_no: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    country: "",
  },
  lowerStandard: "1",
  higherStandard: "5",
};

export default function SignUp() {
  const [data, updateData] = useImmer(formData);
  function handleUsernameChange(e) {
    updateData((draft) => {
      draft.username = e.target.value;
    });
  }

  function handlePasswordChange(e) {
    updateData((draft) => {
      draft.password = e.target.value;
    });
  }
  function handleNameChange(e) {
    updateData((draft) => {
      draft.name = e.target.value;
    });
  }
  function handleAbreviateChange(e) {
    updateData((draft) => {
      draft.abreviate = e.target.value;
    });
  }
  function handleEtablishmentChange(e) {
    updateData((draft) => {
      draft.establishmentDate = e.target.value;
    });
  }
  function handleBuildingNoChange(e) {
    updateData((draft) => {
      draft.address.building_no = e.target.value;
    });
  }
  function handleLocalityChange(e) {
    updateData((draft) => {
      draft.address.locality = e.target.value;
    });
  }
  function handleCityChange(e) {
    updateData((draft) => {
      draft.address.city = e.target.value;
    });
  }
  function handleDistrictChange(e) {
    updateData((draft) => {
      draft.address.district = e.target.value;
    });
  }
  function handleStateChange(e) {
    updateData((draft) => {
      draft.address.state = e.target.value;
    });
  }
  function handleCountryChange(e) {
    updateData((draft) => {
      draft.address.country = e.target.value;
    });
  }
  function handlelowerStandardChange(e) {
    updateData((draft) => {
      draft.lowerStandard = e.target.value;
    });
  }
  function handlehigherStandardChange(e) {
    updateData((draft) => {
      draft.higherStandard = e.target.value;
    });
  }
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserAccount
      data={data}
      updateUsername={(e) => handleUsernameChange(e)}
      updatePassword={(e) => handlePasswordChange(e)}
    />,
    <InstitutionDetails
      data={data}
      updateName={(e) => handleNameChange(e)}
      updateAbreviate={(e) => handleAbreviateChange(e)}
      updateEstablishment={(e) => handleEtablishmentChange(e)}
      updateBuildingNo={(e) => handleBuildingNoChange(e)}
      updateLocality={(e) => handleLocalityChange(e)}
      updateCity={(e) => handleCityChange(e)}
      updateDistrict={(e) => handleDistrictChange(e)}
      updateState={(e) => handleStateChange(e)}
      updateCountry={(e) => handleCountryChange(e)}
      updatelowerStandard={(e) => handlelowerStandardChange(e)}
      updatehigherStandard={(e) => handlehigherStandardChange(e)}
    />,
  ]);
  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register/institution",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
      console.log(response.status);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      <div className="w-full my-auto h-auto flex">
        <div className="flex flex-col w-full p-2  md:flex-row-reverse">
          <div className="w-full flex  justify-center items-center text-[4rem] md:text-[6rem] md:font-bold text-teal-300">
            Sign Up
          </div>
          {/* main content  */}
          <div className=" mx-auto  my-auto min-w-[35rem] min-h-[25rem] flex justify-center items-center">
            <form
              onSubmit={onSubmit}
              className="w-3/5 flex flex-col justify-center items-center h-full"
            >
              {step}
              <div className="max-w-sm mx-auto grid gap-y-4 w-full my-8 font-outfit font-medium text-[22px]  text-white ">
                {!isFirstStep && (
                  <button
                    type="button"
                    className="bg-[#23afb7] rounded-md h-10"
                    onClick={back}
                  >
                    Back
                  </button>
                )}
                <button type="submit" className="h-10 bg-[#23afb7] rounded-md">
                  {isLastStep ? "Register" : "Next"}
                </button>
              </div>
              <p>
                Already an existing user?{" "}
                <Link to={"/login"} className="underline">
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
