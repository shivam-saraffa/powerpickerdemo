"use client";
import { useState } from "react";
import Header from "./component/Header";
import Radio from "./component/Radio";
import getOptions from "./lib/menuOptions";
import getUrlPath from "./lib/template";
import Button from "./component/Button";

const myArray = {
  fElectrical: "",
  fGauge: "",
  fHeight: "",
  support_type: "",
  depth: "",
};
const myArray2 = {
  fKPLocation: "",
  style: "",
  brackets: "",
};

export default function Home() {
  // Stores the Selected Values

  const [selectedValues, setSelectedValues] = useState(myArray);
  const [selectedMultipleValues, setSelectedMultipleValues] =
    useState(myArray2);

  // Fetches the Json Data And converts it to an array
  const opt = getOptions();
  const option = Object.entries(opt.level1);
  const opt2 = getOptions();
  const option2 = Object.entries(opt.level2)[0][1];
  // console.log(option2);

  // Handles the changes in the Selected options
  const receiveVal = (key, val) => {
    setSelectedValues((prevData) => {
      if (prevData[key] === val) {
        return {
          ...prevData,
          [key]: "",
        };
      } else {
        return {
          ...prevData,
          [key]: val,
        };
      }
    });

    console.log("Current data: ", selectedValues);
  };

  const receiveVal2 = (key, val) => {
    setSelectedMultipleValues((prevData) => {
      if (prevData[key] === val) {
        return {
          ...prevData,
          [key]: "",
        };
      } else {
        return {
          ...prevData,
          [key]: val,
        };
      }
    });

    console.log(key, val);
    console.log(selectedMultipleValues);
  };

  // Resets the Selected Values
  const resetHandler = () => {
    setSelectedValues(myArray);
    setSelectedMultipleValues(myArray2);
  };

  // Submits the selected Values
  const printData = () => {
    console.log("print", selectedValues);
    console.log("print2", selectedMultipleValues);
  };

  return (
    <div className="mt-4">
      {/* Header  */}
      <Header />

      {/* Main Body */}
      <div className=" h-[100vh] px-32 py-10">
        <div className="text-[24px] font-[600] text-[#344c72] border-b-2 border-[#E5E7EB] h-[3rem]">
          Power Picks
        </div>

        {/* Individual component Rendering */}
        <div className="flex gap-10 pt-10 min-h-[30rem] overflow-x-auto">
          {option.map((m) => (
            <Radio
              m={m}
              key={m[0]}
              sendVal={receiveVal}
              data1={selectedValues}
            />
          ))}
        </div>

        {/* MultiCheckBox component Rendering */}
        <div className="flex flex-col pt-10 min-h-[30rem] overflow-x-auto">
          <div className="font-bold pb-2">{option2.label}</div>
          {Object.entries(option2.children).map((m) => {
            return (
              <div className="border-[#b0b2b6] rounded-md border w-[10rem] py-2">
                <div className="font-semibold px-2">{m[1].label}</div>
                {Object.entries(m[1].options).map(
                  (cOptions, index, allOptions) => {
                    return (
                      <div className="px-4">
                        <div
                          className={`${
                            selectedMultipleValues[m[1].key] === cOptions[0]
                              ? `bg-[#E5E7EB] rounded-md`
                              : "bg-transparent"
                          }  border-b-2 p-2  hover:bg-slate-100`}
                          onClick={() => {
                            receiveVal2(m[1].key, cOptions[0]);
                          }}
                        >
                          {cOptions[1]}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <Button resetHandler={resetHandler} printData={printData} />
      </div>
    </div>
  );
}
