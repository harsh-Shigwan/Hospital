import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react'

import { useLocation } from 'react-router-dom';
const Row25 = () => {
  const  navigate = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to navigate to a different route
    navigate('/Row20');
  };
  const location = useLocation()
  const [state, setLocationState] = useState({})
useEffect (()=>{
    let state = location.state
    setLocationState(state)
  },)

  return (
    <div >
    <div className="relative  w-full h-[832px] overflow-hidden text-left text-xs text-black font-inter left-0">
      <div className="absolute top-[33px] left-[266px] bg-snow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  w-[1044px] h-[340px]" />
      <div className="absolute top-[33px] left-[266px] bg-snow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1044px] h-[340px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[226px] left-[1289px] text-xs font-semibold font-inter text-white text-left inline-block"
        autoFocus={true}
      >
        New Patient
      </button>
      <div className="absolute top-[55px] left-[290px] text-[32px]">
        IPD Discharged Patient
      </div><div className=" absolute top-[65px] left-[1090px] bg-blue-500  rounded-xl"><button className=" h-8 w-32 top-[55px] left-[590px]  text-white" onClick={handleButtonClick}> New Registration</button></div>
      <div className="absolute top-[136px] left-[290px] text-[20px] text-gray-100">
        Search..
      </div>
      <div className="absolute top-[194px] left-[284px] font-semibold">
        Name
      </div>
      <div className="absolute top-[194px] left-[388px] font-semibold">
        Patient ID
      </div>
      <div className="absolute top-[194px] left-[474px] font-semibold">
        Case ID
      </div>
      <div className="absolute top-[194px] left-[548px] font-semibold">
        Gender
      </div>
      <div className="absolute top-[194px] left-[620px] font-semibold">
        Phone No.
      </div>
      <div className="absolute top-[194px] left-[706px] font-semibold">
        Consultant
      </div>
      <div className="absolute top-[194px] left-[852px] font-semibold">
        Admission Date
      </div>
      <div className="absolute top-[194px] left-[993px] font-semibold">
        Discharged Date
      </div>
      <div className="absolute top-[194px] left-[1152px] font-semibold">
        Tax
      </div>
      <div className="absolute top-[212px] left-[1152px] font-semibold">
        (Rs.)
      </div>
      <div className="absolute top-[212px] left-[1208px] font-semibold">
        (Rs.)
      </div>
      <div className="absolute top-[212px] left-[1270px] font-semibold">
        (Rs.)
      </div>
      <div className="absolute top-[194px] left-[1211px] font-semibold">
        Net
      </div>
      <div className="absolute top-[194px] left-[1270px] font-semibold">
        Total
      </div>
      <div className="absolute top-[115.5px] left-[265.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
      <div className="absolute top-[180.5px] left-[265.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
      <div className="absolute top-[242.5px] left-[265.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
      <div className="absolute top-[296.5px] left-[265.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
      <div className="absolute top-[259px] left-[706px]">
        Tanveer Alam (DOC1)
      </div>
      <div className="absolute top-[259px] left-[284px] text-steelblue">
       
      </div>
      <div className="absolute top-[313px] left-[284px] text-gray-200">{`Records 1 of 1 of 1 `}</div>
      <div className="absolute top-[259px] left-[409px]">27</div>
      <div className="absolute top-[259px] left-[489px]">39</div>
      <div className="absolute top-[259px] left-[556px]">Male</div>
      <div className="absolute top-[259px] left-[620px]">947475757</div>
      <div className="absolute top-[259px] left-[852px]">
        10.08.2022 05:16 PM
      </div>
      <div className="absolute top-[259px] left-[993px]">
        11.08.2022 07:39 AM
      </div>
      <div className="absolute top-[259px] left-[1143px]">250.00</div>
      <div className="absolute top-[259px] left-[1198px]">5000.00</div>
      <div className="absolute top-[259px] left-[1260px]">5250.00</div>
      <div className="absolute top-[313px] left-[1260px] bg-gainsboro w-[15px] h-[15px]" />
      <img
        className="absolute h-[0.96%] w-[0.34%] top-[50.12%] right-[6.19%] bottom-[48.92%] left-[93.47%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector@2x.png"
      />
      <img
        className="absolute h-[0.96%] w-[0.34%] top-[50.12%] right-[3.55%] bottom-[48.92%] left-[96.11%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector@2x.png"
      />
      <div className="absolute top-[416px] left-[1265px] text-[8px] text-center">
        1
      </div>
      <div className="absolute top-[143px] left-[1223px] w-[75.11px] h-[13.39px]">
        <img
          className="absolute top-[0px] left-[20.96px] w-[13.39px] h-[13.39px] object-cover"
          alt=""
          src="/edit-property@2x.png"
        />
        <img
          className="absolute top-[0.58px] left-[63.46px] w-[11.64px] h-[11.64px] object-cover"
          alt=""
          src="/print@2x.png"
        />
        <img
          className="absolute top-[1.16px] left-[0px] w-[12.23px] h-[12.23px] object-cover"
          alt=""
          src="/sheet-of-paper@2x.png"
        />
        <img
          className="absolute h-[86.96%] w-[15.5%] top-[4.35%] right-[27.13%] bottom-[8.7%] left-[57.36%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </div>
    </div></div>
  );
};

export default Row25;
