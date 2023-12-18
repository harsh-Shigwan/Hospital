import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
const Row31 = () => {
  const navigate = useNavigate();
  const handleButtonClick1 = () => {
    // Use navigate to navigate to a different route
    navigate("/OPD");
  };
  const  navigate1 = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to navigate to a different route
    navigate1('/Row21');
  };
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ 
          date:"",
          text: "", 
          text1: "",
          num0:"",
          num1:"",
          num2:"",
          num3:"",
          num4:"",
          num5:"",
          num6:"",
          num7:"",
          num8:"",
          num9:"",
          num10:"",
          num11:"",
          num12:"",
          num13:"",
          num14:"",
          num15:"",
          num16:"",
          num17:"", 
          num18:"",
          drop:"",
          drop1:"",
          drop2:"",
          drop3:"",
          area1:"",
          area:"",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
        
          <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-black font-inter">
            <div className="absolute top-[100px] left-[902px] bg-aliceblue w-[538px] h-[924px]" />
            <img
              className="absolute top-[859px] left-[207px] w-[13.33px] h-2 object-cover"
              alt=""
              src="/polygon-1@2x.png"
            />
            <div className="absolute top-[119px] left-[17px] text-xl font-medium">{`ANKITA KUMARI `}</div>
            <div className="absolute top-[119px] left-[188px] text-xl font-medium">
              (12)
            </div>
            <img
              className="relative w-[67px] h-6 object-cover"
              alt=""
              src="/union@2x.png"
            />
            <div className="absolute top-[197px] left-[103px] text-[10px] font-medium text-white">
              Blood Group
            </div>
            <img
              className="absolute top-[218px] left-[17px] w-6 h-6 overflow-hidden object-cover"
              alt=""
              src="/ionmalefemalesharp@2x.png"
            />
            <img
              className="absolute top-[313px] left-[17px] rounded-sm w-[22px] h-[22px] overflow-hidden object-cover"
              alt=""
              src="/fluentcall24regular@2x.png"
            />
            <img
              className="absolute top-[367px] left-[17px] w-[25px] h-[25px] overflow-hidden object-cover"
              alt=""
              src="/letsiconsmessagealtfill@2x.png"
            />
            <div className="absolute top-[221px] left-[51px] font-medium">
              Female
            </div>
            <div className="absolute top-[266px] left-[47px] font-medium">
              32 Year
            </div>
            <img
              className="absolute top-[218px] left-[120px] w-6 h-6 overflow-hidden object-cover"
              alt=""
              src="/gameiconsdrop@2x.png"
            />
            <div className="absolute top-[223px] left-[141px] font-medium">
              B
            </div>
            <div className="absolute top-[223px] left-[149px] font-medium">
              +
            </div>
            <div className="absolute top-[221px] left-[199px] font-medium">
              Married
            </div>
            <div className="absolute top-[464px] left-[21px] font-medium">
              Any Known Allergies
            </div>
            <div className="absolute top-[513px] left-[21px] font-medium">
              Remarks
            </div>
            <div className="absolute top-[562px] left-[25px] font-medium">
              TPA ID
            </div>
            <div className="absolute top-[611px] left-[19px] font-medium">
              TPA Validity
            </div>
            <div className="absolute top-[660px] left-[22px] font-medium">
              National Identification Number
            </div>
            <div className="absolute top-[708.5px] left-[22.5px] box-border w-[864px] h-px border-t-[1px] border-solid border-dimgray " />
            <Field
              className="absolute top-[756px] left-[18px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              name="num0"
              type="number"
            ></Field>
            <Field
              className="absolute top-[847px] left-[18px] rounded-10xs box-border w-[212px] h-8 border-[1px] border-solid border-gray-200 "
              name="drop"
              as="select"
            >
              <option value="no">no</option>
              <option value="yes">yes</option>
            </Field>
            <Field
              className="absolute top-[847px] left-[253px] rounded-10xs box-border w-[212px] h-8 border-[1px] border-solid border-gray-200 "
              type="text"
              name="text"
            />
            <Field
              className="absolute top-[847px] left-[494px] rounded-10xs box-border w-[396px] h-[42px] border-[1px] border-solid border-gray-200"
              type="text"
              name="text1"
            />
            <Field
              className="absolute top-[933px] left-[17px] rounded-10xs box-border w-[423px] h-[72px] border-[1px] border-solid border-gray-200 "
              type="textarea"
              name="area"
            />
            <Field
              className="absolute top-[933px] left-[494px] rounded-10xs box-border w-[396px] h-[76px] border-[1px] border-solid border-gray-200 "
              type="text"
              name="area1"
            />
            <Field
              className="absolute top-[756px] left-[168px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              type="number"
              name="num1"
            />
            <Field
              className="absolute top-[756px] left-[318px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              type="number"
              name="num2"
            />
            <Field
              className="absolute top-[756px] left-[468px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              type="number"
              name="num3"
            />
            <Field
              className="absolute top-[756px] left-[618px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              type="number"
              name="num4"
            />
            <Field
              className="absolute top-[756px] left-[768px] rounded-10xs box-border w-[122px] h-8 border-[1px] border-solid border-gray-200"
              type="number"
              name="num4"
            />
            <div className="absolute top-[734px] left-[21px] font-medium">
              Height
            </div>
            <div className="absolute top-[854px] left-[36px] font-medium text-gray-100">
              Select
            </div>
            <div className="absolute top-[734px] left-[175px] font-medium">
              Weight
            </div>
            <div className="absolute top-[734px] left-[331px] font-medium">
              BP
            </div>
            <div className="absolute top-[734px] left-[475px] font-medium">
              Pulse
            </div>
            <div className="absolute top-[734px] left-[619px] font-medium">
              Temperature
            </div>
            <div className="absolute top-[734px] left-[776px] font-medium">
              Respiration
            </div>
            <div className="absolute top-[823px] left-[21px] font-medium">
              Symptoms Type
            </div>
            <div className="absolute top-[823px] left-[254px] font-medium">
              Symptoms Title
            </div>
            <div className="absolute top-[823px] left-[495px] font-medium">
              Symptoms Description
            </div>
            <img
              className="absolute top-[882px] left-[883px] w-[5.96px] h-[5.33px] object-cover"
              alt=""
              src="/line-27@2x.png"
            />
            <img
              className="absolute top-[998px] left-[433px] w-[5.96px] h-[5.33px] object-cover"
              alt=""
              src="/line-29@2x.png"
            />
            <img
              className="absolute top-[1002px] left-[882px] w-[5.96px] h-[5.33px] object-cover"
              alt=""
              src="/line-31@2x.png"
            />
            <img
              className="absolute top-[884.36px] left-[885.71px] w-[3.78px] h-[3.27px] object-cover"
              alt=""
              src="/line-28@2x.png"
            />
            <img
              className="absolute top-[1000.36px] left-[435.71px] w-[3.78px] h-[3.27px] object-cover"
              alt=""
              src="/line-30@2x.png"
            />
            <img
              className="absolute top-[1004.36px] left-[884.71px] w-[3.78px] h-[3.27px] object-cover"
              alt=""
              src="/line-32@2x.png"
            />
            <div className="absolute top-[912px] left-[25px] font-medium">
              Note
            </div>
            <div className="absolute top-[912px] left-[512px] font-medium">
              Any Known Allergies
            </div>
            <div className="absolute top-[126px] left-[912px] text-lg font-medium">
              Appointment Date
            </div>
            <div className="absolute top-[227px] left-[915px] text-lg font-medium">
              Casualty
            </div>
            <div className="absolute top-[319px] left-[921px] text-lg font-medium">
              TPA
            </div>
            <div className="absolute top-[404px] left-[912px] text-lg font-medium">
              Consultant Doctor
            </div>
            <div className="absolute top-[501px] left-[912px] text-lg font-medium">
              Charge Category
            </div>
            <div className="absolute top-[580px] left-[915px] text-lg font-medium">
              Tax
            </div>
            <div className="absolute top-[501px] left-[1196px] text-lg font-medium">
              Charge
            </div>
            <div className="absolute top-[787px] left-[916px] text-lg font-medium">
              Payment Mode
            </div>
            <div className="absolute top-[877px] left-[916px] text-lg font-medium">
              Live Consultation
            </div>
            <div className="absolute top-[600px] left-[488px] text-[20px] font-medium">
              Live Consultation
            </div>
            <div className="absolute top-[787px] left-[1196px] text-lg font-medium">
              Paid Amount (Rs.)
            </div>
            <div className="absolute top-[580px] left-[1196px] text-lg font-medium">
              Standard Charge (Rs.)
            </div>
            <div className="absolute top-[685px] left-[915px] text-lg font-medium">
              Applied Charge (Rs.)
            </div>
            <div className="absolute top-[685px] left-[1196px] text-lg font-medium">
              Amount (Rs.)
            </div>
            <div className="absolute top-[319px] left-[1196px] text-lg font-medium">
              Reference
            </div>
            <div className="absolute top-[227px] left-[1200px] text-lg font-medium">
              Old Patient
            </div>
            <div className="absolute top-[123px] left-[1246px] text-lg font-medium">
              Case
            </div>
            <Field
              className="absolute top-[158px] left-[912px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="date"
              name="date"
            />
            <Field
              className="absolute top-[253px] left-[914px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num5"
            />
            <Field
              className="absolute top-[343px] left-[914px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num6"
            />
            <Field
              className="absolute top-[528px] left-[912px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num7"
            />
            <Field
              className="absolute top-[608px] left-[912px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num8"
            />
            <Field
              className="absolute top-[606px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num9"
            />
            <Field
              className="absolute top-[713px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num10"
            />
            <Field
              className="absolute top-[815px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num11"
            />
            <Field
              className="absolute top-[713px] left-[914px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid  border-gainsboro"
              type="number"
              name="num12"
            />
            <Field
              className="absolute top-[814px] left-[913px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid  border-gainsboro"
              type="number"
              name="num13"
            />
            <Field
              className="absolute   top-[911px] left-[912px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              name="drop3"
              as="select"
            >
              <option value="online">Online</option>
              <option value="Offline">Offline</option>
            </Field>
            <Field
              className="absolute top-[528px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num14"
            />
            <Field
              className="absolute  top-[439px] left-[914px] bg-white box-border w-[504px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num15"
            />
            <Field
              className="absolute   top-[343px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid  border-gainsboro"
              type="number"
              name="num16"
            />
            <Field
              className="absolute top-[253px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid  border-gainsboro"
              type="number"
              name="num17"
            />
            <Field
              className="absolute  top-[158px] left-[1188px] rounded-10xs bg-white box-border w-[235px] h-10 border-[1px] border-solid border-gainsboro"
              type="number"
              name="num18"
            />
            <div className="absolute top-[118px] left-[777px] [background:linear-gradient(180deg,_rgba(217,_217,_217,_0.48),_rgba(217,_217,_217,_0.04)_50.52%,_rgba(217,_217,_217,_0.48))] w-[100px] h-[100px]" />
            <div className="absolute top-[154px] left-[790px] text-[15px] font-medium text-gray-100">
              NO IMAGE
            </div>
            <div className="absolute top-[172px] left-[795px] text-[12px] text-gray-100">
              AVAILABLE
            </div>
            <img
              className="absolute top-[263px] left-[15px] w-6 h-6 overflow-hidden object-cover"
              alt=""
              src="/guidancetime@2x.png"
            />
            <img
              className="absolute top-[218px] left-[171px] w-6 h-6 overflow-hidden object-cover"
              alt=""
              src="/phheart@2x.png"
            />
            <img
              className="absolute top-[411px] left-[19px] w-[23px] h-[26.83px] object-cover"
              alt=""
              src="/gingerbread-man@2x.png"
            />
            <button
              className=" absolute h-10 w-20 top-[955px] left-[1255px] rounded-xl bg-dodgerblue "
              type="submit"
              onClick={handleButtonClick1}
            >
              submit
            </button><button className="absolute text-white top-[36px] left-[830.34px] text-xl inline-block rounded-xl bg-blue-500 w-[246.7px] h-12" onClick={handleButtonClick}>Add Patient</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Row31;
