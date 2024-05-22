import React from "react";

export default function InstitutionDetails({
  data,
  updateName,
  updateAbreviate,
  updateEstablishment,
  updateBuildingNo,
  updateLocality,
  updateCity,
  updateDistrict,
  updateState,
  updateCountry,
  updatelowerStandard,
  updatehigherStandard,
}) {
  const inputDesign =
    "h-10 border-none bg-gray-300 font-outfit text-gray-600  text-lg rounded-full focus:ring-blue-500 w-full focus:border-blue-500 block py-1 px-4";
  return (
    <div className="font-outfit text-[18px] grid gap-y-2 max-w-sm mx-auto h-full my-4">
      <div className="h-fit w-full">
        <label>Institution Name</label>
        <input
          required
          type="text"
          name="name"
          value={data.name}
          className={`${inputDesign} w-full`}
          onChange={(e) => updateName(e)}
        />
      </div>
      <div className="input-container">
        <div className="h-fit left">
          <label>ShortName</label>
          <input
            required
            type="text"
            name="abreviate"
            value={data.abreviate}
            className={inputDesign}
            onChange={(e) => updateAbreviate(e)}
          />
        </div>
        <div className="h-fit right">
          <label>Establishment Date</label>
          <input
            required
            type="date"
            name="establishment_date"
            value={data.establishmentDate}
            className={inputDesign}
            onChange={(e) => updateEstablishment(e)}
          />
        </div>
      </div>
      <div className="address-container">
        <div className="h-fit building_no">
          <label>Builduing Number</label>
          <input
            required
            type="text"
            name="building_no"
            value={data.address.building_no}
            className={inputDesign}
            onChange={(e) => updateBuildingNo(e)}
          />
        </div>
        <div className="h-fit locality">
          <label>Locality</label>
          <input
            required
            type="text"
            name="locality"
            value={data.address.locality}
            className={inputDesign}
            onChange={(e) => updateLocality(e)}
          />
        </div>
        <div className="h-fit city">
          <label>City</label>
          <input
            required
            type="text"
            name="city"
            value={data.address.city}
            className={inputDesign}
            onChange={(e) => updateCity(e)}
          />
        </div>

        <div className="h-fit district">
          <label>District</label>
          <input
            required
            type="text"
            name="District"
            value={data.address.district}
            className={inputDesign}
            onChange={(e) => updateDistrict(e)}
          />
        </div>
        <div className="h-fit state">
          <label>State</label>
          <input
            required
            type="text"
            name="state"
            value={data.address.state}
            className={inputDesign}
            onChange={(e) => updateState(e)}
          />
        </div>
        <div className="h-fit country">
          <label>Country</label>
          <input
            required
            type="text"
            name="country"
            value={data.address.country}
            className={inputDesign}
            onChange={(e) => updateCountry(e)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="h-fit left">
          <label>Lower Standard</label>
          <input
            required
            type="number"
            name="lowerstandar"
            min={1}
            max={12}
            value={data.lowerStandard}
            className={inputDesign}
            onChange={(e) => updatelowerStandard(e)}
          />
        </div>
        <div className="h-fit right">
          <label>Higher Standard</label>
          <input
            required
            type="number"
            name="higherStandard"
            min={5}
            max={12}
            value={data.higherStandard}
            className={inputDesign}
            onChange={(e) => updatehigherStandard(e)}
          />
        </div>
      </div>
    </div>
  );
}
