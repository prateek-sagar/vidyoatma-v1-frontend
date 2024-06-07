import React, { useEffect, useState } from "react";
import Standards from "./Standards";
import store from "../redux/store";
import institutionStore from "../redux/institutionStore";
import { setInstitution } from "../redux/actions";

const _fetch = {
  id: "",
};
export default function InstitutionHome() {
  const stored_id = store.getState().id;
  console.log(stored_id);
  const jsonData = {
    participantsId: stored_id,
  };
  const [fetched, setFetched] = useState(false);
  const getUser = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/get/institution",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
        credentials: "include",
      }
    );
    console.log(response);
    if (response.ok) {
      let result = await response.json();
      // console.log("====================================");
      // console.log(result.basicInfo.name);
      // console.log("====================================");
      institutionStore.dispatch(
        setInstitution(
          result.basicInfo.name,
          result.basicInfo.establishmentDate,
          result.abreviate,
          result.address.building_no,
          result.address.locality,
          result.address.city,
          result.address.district,
          result.address.state,
          result.address.country,
          result.lowerStandard,
          result.higherStandard
        )
      );
    }
  };
  useEffect(() => {
    if (store.getState().isLogin && institutionStore.getState().name === null) {
      console.log("fetching....");

      console.log(store.getState().id);
      console.log(jsonData);
      getUser();
      setFetched(true);
    }
    return () => {};
  }, [store.getState().isLogin]);
  return (
    <>
      <div className="institution-details">
        <p>{institutionStore.getState().name}</p>
        <p>{store.getState().id}</p>
        <p>{institutionStore.getState().city}</p>
        <p></p>
      </div>
      <section>
        <div className="btn-section">
          <button className="">Add Student</button>
          <button className="">Add Teacher</button>
        </div>
        <div className="">
          <Standards />
        </div>
      </section>
    </>
  );
}
