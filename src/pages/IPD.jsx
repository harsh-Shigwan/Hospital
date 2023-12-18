import { useNavigate } from "react-router-dom";

import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
const IPD = () => {
    const  navigate = useNavigate();
    const handleButtonClick = () => {
      // Use navigate to navigate to a different route
      navigate('/Row20');
    };
    const  navigate1 = useNavigate();
    const handleButtonClick1 = () => {
      // Use navigate to navigate to a different route
      navigate1('/Row25');
    };
    const location = useLocation()
    const [state, setLocationState] = useState({FormData})
  useEffect (()=>{
      let state = location.state
      setLocationState(state)
    }, [location.state])
  return (
    <div><div className="relative bg-aliceblue w-full h-[832px] overflow-hidden text-left text-xs text-black font-inter">
    <div className="absolute top-[139px] left-[168px] bg-snow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1044px] h-[340px]" />
    <div className="absolute top-[155px] left-[190px] text-[32px]">
      IPD Patient
    </div>
    <div className="absolute top-[236px] left-[190px] text-[20px] text-gray-100">
      Search..
    </div>
    <div className="absolute top-[294px] left-[190px] font-semibold">
      IPD No.
    </div>
    <div className="absolute top-[337px] left-[190px] text-steelblue">
      IPDN5
    </div>
    <div className="absolute top-[337px] left-[285px]">38</div>
    <div className="absolute top-[337px] left-[355px]">
     
    </div>
    <div className="absolute top-[337px] left-[520px]">femake</div>
    <div className="absolute top-[368px] left-[521px]">Female</div>
    <div className="absolute top-[399px] left-[520px]">Female</div>
    <div className="absolute top-[430px] left-[520px]">Female</div>
    <div className="absolute top-[368px] left-[355px]">Anuradha Kumari (26)</div>
    <div className="absolute top-[399px] left-[355px]">Monika Singh (20)</div>
    <div className="absolute top-[430px] left-[355px]">Alia Kumari (29)</div>
    <div className="absolute top-[368px] left-[285px]">42</div>
    <div className="absolute top-[430px] left-[286px]">41</div>
    <div className="absolute top-[399px] left-[285px]">33</div>
    <div className="absolute top-[368px] left-[190px] text-steelblue">
      IPDN4
    </div>
    <div className="absolute top-[399px] left-[190px] text-steelblue">
      IPDN3
    </div>
    <div className="absolute top-[430px] left-[190px] text-steelblue">
      IPDN2
    </div>
    <div className="absolute top-[294px] left-[270px] font-semibold">
      Case ID
    </div>
    <div className="absolute top-[294px] left-[355px] font-semibold">
      Name
    </div>
    <div className="absolute top-[294px] left-[520px] font-semibold">
      Gender
    </div>
    <div className="absolute top-[294px] left-[611px] font-semibold">
      Phone No.
    </div>
    <div className="absolute top-[294px] left-[724px] font-semibold">
      Consultant
    </div>
    <div className="absolute top-[293px] left-[916px] font-semibold">
      Bed
    </div>
    <div className="absolute top-[293px] left-[1126px] font-semibold">
      Credit Limit
    </div>
    <div className="absolute top-[215.5px] left-[165.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
    <div className="absolute top-[280.5px] left-[165.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
    <div className="absolute top-[320.5px] left-[165.5px] box-border w-[1045px] h-px border-t-[1px] border-solid border-gray-200" />
    <div className="absolute top-[337px] left-[616px]"></div>
    <div className="absolute top-[368px] left-[616px]">7363535656</div>
    <div className="absolute top-[399px] left-[616px]">9378647862</div>
    <div className="absolute top-[430px] left-[616px]">8748747673</div>
    <div className="absolute top-[337px] left-[724px]">
      Tanveer Alam (DOC1)
    </div>
    <div className="absolute top-[368px] left-[724px]">
      Tanveer Alam (DOC1)
    </div>
    <div className="absolute top-[399px] left-[724px]">{`Ankit Singhania (DOC021) `}</div>
    <div className="absolute top-[430px] left-[724px]">
      Ankur Mishra (263726)
    </div>
    <div className="absolute top-[337px] left-[916px]">
      110-General ard Ground Floor
    </div>
    <div className="absolute top-[368px] left-[916px]">
      104 Private Ward 1st Floor
    </div>
    <div className="absolute top-[399px] left-[916px]">
      110 General Ward Ground Floor
    </div>
    <div className="absolute top-[430px] left-[916px]">
      101 VIP Ward Ground Floor
    </div>
    <div className="absolute top-[337px] left-[1139px]">20000.00</div>
    <div className="absolute top-[368px] left-[1139px]">20000.00</div>
    <div className="absolute top-[399px] left-[1139px]">20000.00</div>
    <div className="absolute top-[430px] left-[1139px]">20000.00</div>
    <button className="absolute  top-[160px] left-[936px] rounded-xl bg-dodgerblue w-[115px] h-[30px]" onClick={handleButtonClick} />
    <button className="absolute top-[160px] left-[1063px] rounded-xl bg-dodgerblue w-[120px] h-[30px]" onClick={handleButtonClick1}/>
    <button className="absolute top-[167px] left-[960px] font-semibold text-white" onClick={handleButtonClick}>
      Add Patient
    </button>
    <button className="absolute top-[167px] left-[1067px] font-semibold text-white" onClick={handleButtonClick1}>
      Discharged Patient
    </button>
  </div>

<div> 
</div>
  </div>
  )
}

export default IPD