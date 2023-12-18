import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
const Row21 = () => {
  const [formData, setFormData] = useState({
    address: "",
    firstname: "",
    middlename: "",
    lastname: "",
    date: "",
    contactnumber: "",
    middlename: "",
    drop2:"",
    refferd:"",
    drop:"",
    Brought:"",
    drop3:"",
    careperson:"",
    text:"",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    drop1:"",
    pincode:"",
    religion:"",
    address:"",   
    pincode:"",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <fieldset>
        <form>
          <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-lg text-darkslategray font-inter">
            <div className="absolute top-[50px] left-[71px] rounded-tl-3xs rounded-tr-6xl rounded-b-3xs bg-white shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] w-[1296px] h-[924px] overflow-hidden">
              <div className="absolute top-[14px] left-[411px] text-[30px] font-semibold [text-shadow:0.3px_0_0_#000,_0_0.3px_0_#000,_-0.3px_0_0_#000,_0_-0.3px_0_#000] opacity-[0.7]">
                Patients Registration
              </div>
              <div className="absolute top-[103px] left-[38px] font-medium opacity-[0.9]">
                First Name:
              </div>
              <div className="absolute top-[160px] left-[38px] font-medium opacity-[0.9]">
                Middle Name:
              </div>
              <div className="absolute top-[217px] left-[38px] font-medium opacity-[0.9]">
                Last Name:
              </div>
              <div className="absolute top-[274px] left-[38px] font-medium opacity-[0.9]">
                Religion:
              </div>
              <div className="absolute top-[331px] left-[38px] font-medium opacity-[0.9]">
                Gender:
              </div>
              <div className="absolute top-[388px] left-[38px] font-medium opacity-[0.9]">
                Age:
              </div>
              <div className="absolute top-[445px] left-[38px] font-medium opacity-[0.9]">
                DOB :
              </div>
              <div className="absolute top-[502px] left-[38px] font-medium opacity-[0.9]">
                Country:
              </div>
              <div className="absolute top-[559px] left-[38px] font-medium opacity-[0.9]">
                State:
              </div>
              <div className="absolute top-[616px] left-[38px] font-medium opacity-[0.9]">
                City
              </div>
              <div className="absolute top-[673px] left-[38px] font-medium opacity-[0.9]">
                Taluka:
              </div>
              <div className="absolute top-[730px] left-[38px] font-medium opacity-[0.9]">
                Address:
              </div>
              <div className="absolute top-[803px] left-[38px] font-medium opacity-[0.9]">
                Pin-code:
              </div>
              <div className="absolute top-[98px] left-[693px] font-medium opacity-[0.9]">
                Case:
              </div>
              <div className="absolute top-[41px] left-[720px] font-medium opacity-[0.9]">{` `}</div>
              <div className="absolute top-[155px] left-[694px] font-medium opacity-[0.9]">
                Contact Number:
              </div>
              <div className="absolute top-[212px] left-[694px] font-medium opacity-[0.9]">
                Reffred By:
              </div>
              <div className="absolute top-[269px] left-[694px] font-medium opacity-[0.9]">
                Condition during arrival:
              </div>
              <div className="absolute top-[326px] left-[694px] font-medium opacity-[0.9]">
                Mode of arrival:
              </div>
              <div className="absolute top-[383px] left-[694px] font-medium opacity-[0.9]">{`Care of Person: `}</div>
              <div className="absolute top-[440px] left-[694px] font-medium opacity-[0.9]">
                Brought By:
              </div>
              <div className="absolute top-[497px] left-[694px] font-medium opacity-[0.9]">
                Relation with patient:
              </div>
              <div className="absolute top-[64.5px] left-[36.5px] box-border w-[1223px] h-[3px] border-t-[3px] border-solid border-lightskyblue" />
              <input
                className="absolute top-[93px] left-[195px] rounded-xl bg-white w-[390px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue  "
                type="text"
                name="firstname"
                onChange={handleChange}
              ></input>
              <select
                className="absolute top-[88px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue "
                value="drop2" name="drop"
                onChange={handleChange}
              >
                {" "}
                <option value="" disabled>
                  Select an option
                </option>
                {/* Add your dropdown options here */}
                <option value="option1">Select the option</option>
                <option value="option2">Emergency</option>
                <option value="option3">Normal</option>
              </select>
              <input
                className="absolute top-[202px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue  "
                type="text"
                name="refferd"
                onChange={handleChange}
              />
              <select
                className="absolute top-[316px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue "
                value="drop" name="drop"
                onChange={handleChange}
              >
                {" "}
                <option value="" disabled>
                  Select an option
                </option>
                {/* Add your dropdown options here */}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                className="absolute top-[430px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="test"
                name="Brought"
                onChange={handleChange}
              ></input>
              <input
                className="absolute top-[145px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="number"
                name="contactnumber"
                onChange={handleChange}
              ></input>
              <select
                className="absolute top-[259px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                value="drop1" name="drop3"
                onChange={handleChange}
              >
                {/* Placeholder option or default value */}
                <option value="" disabled>
                  Select an option
                </option>
                {/* Add your dropdown options here */}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
              <input
                className="absolute top-[373px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="number"
                name="careperson"
                onChange={handleChange}
              />
              <input
                className="absolute top-[487px] left-[924px] rounded-xl bg-white box-border w-[334px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                name="relationpatient"
                type="text"
                onChange={handleChange}
              />
              <select
                className="absolute top-[321px] left-[195px] rounded-xl w-[150px] h-[42px]  bg-white box-border  overflow-hidden border-[1px] border-solid border-dodgerblue"
                value="drop1" name="drop1"
                onChange={handleChange}
              >
                {/* Placeholder option or default value */}
                <option value="" disabled>
                  Select an option
                </option>
                {/* Add your dropdown options here */}
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Trasgender</option>
              </select>
              <input
              className="absolute top-[381px] left-[195px] rounded-xl bg-white box-border w-[150px] h-9 overflow-hidden border-[1px] border-solid border-dodgerblue "
              type="number"
              name="pincode"
              onChange={handleChange}
            />
              <input
                className="absolute top-[549px] left-[195px] rounded-xl w-[350px] h-[42px]   object-cover bg-white box-border border-dodgerblue overflow-hidden border-[1px] border-solid "
                type="text"
                name="text"
                onChange={handleChange}
              />
              <input
                className="absolute top-[207px] left-[195px] rounded-xl bg-white box-border w-[390px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="text"
                name="lastname"
                onChange={handleChange}
              ></input>
              <input
                className="absolute top-[435px] left-[195px] rounded-xl bg-white box-border w-[201px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="date"
                name="date"
                onChange={handleChange}
              ></input>
              <input
                className="absolute top-[663px] left-[195px] rounded-xl w-[350px] h-[42px]   object-cover bg-white box-border border-dodgerblue overflow-hidden border-[1px] border-solid "
                type="text"
                name="text2"
                onChange={handleChange}
              />
              <input
                className="absolute top-[150px] left-[195px] rounded-xl bg-white box-border w-[390px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="text"
                name="middlename"
                onChange={handleChange}
              ></input>

              <input
                className="absolute  border-dodgerblue top-[606px] left-[195px] rounded-xl w-[350px] h-[42px] object-cover  bg-white box-border overflow-hidden border-[1px] border-solid "
                type="text"
                name="text2"
                onChange={handleChange}
              />
              <input
                className="absolute top-[264px] left-[195px] rounded-xl bg-white box-border w-[350px] h-[42px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                type="text"
                name="religion"
                onChange={handleChange}
              ></input>
              <input
                className="absolute top-[492px] left-[195px]  rounded-xl w-[350px] h-[42px] overflow-hidden object-cover bg-white box-border  border-[1px] border-solid border-dodgerblue"
                type="text"
                name="text4"
                onChange={handleChange}
              />
              <input
                className="absolute top-[720px] left-[195px] rounded-xl bg-white box-border w-[390px] h-[61px] overflow-hidden border-[1px] border-solid border-dodgerblue"
                name="address"
                type="text"
                onChange={handleChange}
              />
              <input
                className="absolute top-[796px] left-[195px] rounded-xl bg-white box-border w-[234px] h-9 overflow-hidden border-[1px] border-solid border-dodgerblue "
                type="number"
                name="pincode"
                onChange={handleChange}
              />
              <div className="absolute top-[203px] left-[605px] w-[15px] h-[15px] overflow-hidden" />
              <div className="absolute top-[189px] left-[649px] w-6 h-6 overflow-hidden" />
              <img
                className="absolute h-[2.6%] w-[1.85%] top-[20.45%] right-[48.07%] bottom-[76.95%] left-[50.08%] max-w-full overflow-hidden max-h-full   object-cover"
                alt=""
                src="/group@2x.png"
              />
              <img
                className="absolute top-[0px] left-[1247px] rounded-tl-none rounded-tr-6xl rounded-b-none w-[49px] h-[49px] overflow-hidden object-cover"
                alt=""
                src="/frame-258@2x.png"
              />
            </div>
            <div className=" bg-sky-500 h-10 w-28 rounded-xl pl-5 pt-1 absolute left-[1197px] top-[797px] ">
              <Link to="/IPD" className="link" state={formData}>
                Submit
              </Link>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Row21;
