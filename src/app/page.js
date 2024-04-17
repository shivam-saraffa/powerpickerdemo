'use client'
import {  useState } from "react";
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


export default function Home() {


  // Stores the Selected Values
  const [selectedValues, setSelectedValues] = useState(myArray);

  // Fetches the Json Data And converts it to an array
  const opt = getOptions();
  const option = Object.entries(opt.level1); 

  // Handles the changes in the Selected options
  const receiveVal = (key,val) => {
    setSelectedValues(prevData => {
      if(prevData[key] === val){
        return {
          ...prevData,
          [key]:''
        }
      }else{
        return {
          ...prevData,
          [key]:val
        }
      }
    });    
    console.log("Current data: ", selectedValues);
  }
  
  // Resets the Selected Values
  const resetHandler = () => {
    setSelectedValues(myArray);
  }

  // Submits the selected Values
  const printData = () => {
    console.log('print' , selectedValues);
  }


  return (
    <div className="mt-4">

      {/* Header  */}
      <Header />

      {/* Main Body */}
      <div className=" h-[100vh] px-32 py-10">

        <div className="text-[24px] font-[600] text-[#344c72] border-b-2 border-[#E5E7EB] h-[3rem]">Power Picks</div>

        {/* Individual component Rendering */}
        <div className="flex gap-10 pt-10 min-h-[30rem] overflow-x-auto">
          {option.map(m=>
            <Radio m={m} key={m[0]} sendVal={receiveVal} data1={selectedValues}/>
          )}
        </div>

        {/* Action Buttons */}
        <Button resetHandler={resetHandler} printData={printData}/>

      </div>
      
    </div>
  );
}
