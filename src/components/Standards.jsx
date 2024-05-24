import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Standards() {
  const lowerStandard = 1;
  const higherStandard = 10;
  const standards = [];
  for (let i = lowerStandard; i <= higherStandard; i++) {
    standards.push({ id: i, standard: i });
  }
  return (
    <ul className="max-w-[80%] h-full grid gap-2">
      {standards.map((standard) => (
        <li
          key={standard.id}
          className="px-4 border border-gray-400 flex justify-center items-center hover:cursor-pointer rounded-sm"
        >
          <div className="flex  items-center space-x-4 rtl:space-x-reverse w-full">
            <div className="flex-1 min-w-0">{standard.standard}</div>
            <div className="inline-flex items-center text-base font-semibold">
              <IoIosArrowDown />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Standards;
