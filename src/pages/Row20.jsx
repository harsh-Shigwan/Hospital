import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
const Row20 = () => {
  const  navigate = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to navigate to a different route
    navigate('/Row21');
  };
  const handleButtonClick1 = () => {
    // Use navigate to navigate to a different route
    navigate('/IPD');
  };
  return (
    <div>
      <Formik
        initialValues={{
          num1: "",
          num2: "",
          num3: "",
          num4: "",
          num5: "",
          num6: "",
          drop1: "",
          drop2: "",
          txt1: "",
          txt2: "",
          txt3: "",
          Date: "",
          txt21: "",
          txt22: "",
          num23: "",
          num24: "",
          num25: "",
          num26: "",
          num27: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <div className="relative bg-aliceblue w-full h-[832px] overflow-hidden text-left text-base text-black font-inter">
            <div className="absolute top-[0px] left-[49px] w-[1303.98px] h-[835px]">
              <div className="absolute top-[0px] left-[0px] w-[1303.98px] h-[835px]">
                <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1303.98px] h-[835px]" />
                <img
                  className="absolute h-[2.63%] w-[1.85%] top-[25.39%] right-[79.85%] bottom-[71.98%] left-[18.3%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
              <input className="absolute top-[26px] left-[39.27px] rounded-xl bg-white w-[557.84px] h-12 p-5" type="test" />
              <button className="absolute top-[26px] left-[630.34px] rounded-xl bg-blue-500 w-[246.7px] h-12" onClick={handleButtonClick}/>
              <div className="absolute top-[133px] left-[39.27px] text-[32px] inline-block w-[247.7px]">
                Neha Singh (32)
              </div>
              
              <button className="absolute top-[38px] left-[695.79px] text-xl inline-block w-[116.8px]" onClick={handleButtonClick}>
                New Patient
              </button>
              <img
                className="absolute top-[212px] left-[39.27px] w-[24.17px] h-6 overflow-hidden object-cover"
                alt=""
                src="/ionmalefemalesharp@2x.png"
              />
              <div className="absolute top-[212px] left-[72.5px] text-lg font-medium inline-block w-[62.43px]">
                Female
              </div>
              <div className="absolute top-[259px] left-[72.5px] text-lg font-medium inline-block w-[99.69px]">
                765427278
              </div>
              <div className="absolute top-[212px] left-[188.3px] text-lg font-medium inline-block w-[24.17px]">
                B+
              </div>
              <img
                className="absolute top-[212px] left-[142.98px] w-[24.17px] h-6 overflow-hidden object-cover"
                alt=""
                src="/gameiconsdrop@2x.png"
              />
              <div className="absolute top-[213px] left-[275.9px] text-lg font-medium inline-block w-[67.46px]">
                Married
              </div>
              <img
                className="absolute h-[2.63%] w-[0.93%] top-[25.39%] right-[86.25%] bottom-[71.98%] left-[12.82%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[1.92%] w-[1.24%] top-[31.74%] right-[95.44%] bottom-[66.35%] left-[3.32%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[1.8%] w-[1.47%] top-[37.13%] right-[95.21%] bottom-[61.08%] left-[3.32%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute top-[345px] left-[45.31px] w-[18.12px] h-[21px] object-cover"
                alt=""
                src="/gingerbread-man@2x.png"
              />
              <div className="absolute top-[391px] left-[43.3px] font-medium inline-block w-[158.09px]">
                Any Known Allergies
              </div>
              <div className="absolute top-[427px] left-[43.3px] font-medium inline-block w-[67.46px]">
                Remarks
              </div>
              <div className="absolute top-[463px] left-[43.3px] font-medium inline-block w-[51.35px]">
                TPA ID
              </div>
              <div className="absolute top-[499px] left-[43.3px] font-medium inline-block w-[92.64px]">
                TPA Validity
              </div>
              <div className="absolute top-[535px] left-[43.3px] font-medium inline-block w-[235.62px]">
                National Identification Number
              </div>
              <div className="absolute top-[577.5px] left-[35.75px] box-border w-[866.96px] h-px border-t-[1px] border-solid border-dimgray" />
              <div className="absolute top-[100px] left-[902.21px] bg-gainsboro w-[401.77px] h-[735px]" />
              <div className="absolute top-[123px] left-[921.34px] inline-block w-[118.82px]">
                Admission Date
              </div>
              <div className="absolute top-[251px] left-[921.34px] inline-block w-[66.46px]">
                Casualty
              </div>
              <div className="absolute top-[315px] left-[921.34px] inline-block w-[31.21px]">
                TPA
              </div>
              <div className="absolute top-[381px] left-[921.34px] inline-block w-[77.53px]">
                Reference
              </div>
              <div className="absolute top-[449px] left-[921.34px] inline-block w-[81.56px]">
                Bed Group
              </div>
              <div className="absolute top-[528px] left-[921.34px] inline-block w-[95.66px]">
                Bed Number
              </div>
              <div className="absolute top-[611px] left-[921.34px] inline-block w-[131.91px]">
                Live Consultation
              </div>
              <div className="absolute top-[315px] left-[1105.61px] inline-block w-[87.6px]">
                Credit Limit
              </div>
              <div className="absolute top-[381px] left-[1105.61px] inline-block w-[138.96px]">
                Consultant Doctor
              </div>
              <div className="absolute top-[251px] left-[1105.61px] inline-block w-[84.58px]">
                Old Patient
              </div>
              <div className="absolute top-[187px] left-[921.34px] inline-block w-[39.27px]">
                Case
              </div>
              <Field
                className="absolute top-[147px] left-[921.34px] rounded-10xs bg-white box-border w-[353.43px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="Date"
                name="Date" 
              />
              <Field
                className="absolute top-[211px] left-[921.34px] rounded-10xs bg-white box-border w-[353.43px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="number"
                name="num21"
              />
              <Field
                className="absolute top-[275px] left-[921.34px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="number"
                name="num22"
              />
              <Field
                className="absolute top-[340px] left-[921.34px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="number"
                name="num23"
              />
              <Field
                className="absolute top-[405px] left-[921.34px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="test"
                name="txt21"
              />
              <Field
                className="absolute top-[476px] left-[921.34px] rounded-10xs bg-white box-border w-[353.43px] h-[37px] border-[1px] border-solid  border-gainsboro"
                type="test"
                name="txt22"
              />
              <Field
                className="absolute top-[556px] left-[921.34px] rounded-10xs bg-white box-border w-[353.43px] h-[37px] border-[1px] border-solid border-gainsboro"
                type="number"
                name="num24"
              />
              <Field
                className="absolute top-[639px] left-[921.34px] rounded-10xs bg-white box-border w-[353.43px] h-[37px] border-[1px] border-solid border-gainsboro"
                name="drop2"
                as="select"
              >
                <option value="select">Select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Field>
              <Field
                className="absolute top-[275px] left-[1105.61px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="number"
                name="num25"
              />
              <Field
                className="absolute top-[340px] left-[1105.61px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid  border-gainsboro"
                type="number"
                name="num26"
              />
              <Field
                className="absolute top-[405px] left-[1105.61px] rounded-10xs bg-white box-border w-[169.16px] h-[30px] border-[1px] border-solid border-gainsboro"
                type="txt"
                name="num27"
              />
              <div className="absolute top-[593px] left-[43.3px] text-sm font-medium inline-block w-[45.31px]">
                Height
              </div>
              <Field
                className="absolute  top-[620px] left-[42.3px] rounded-10xs box-border w-[122.83px] h-8 border-[1px] border-solid border-gray-300"
                name="num1"
                type="number"
              />
              <Field
                className="absolute top-[620px] left-[191.32px] rounded-10xs box-border w-[99.67px] h-8 border-[1px] border-solid border-gray-300 "
                type="number"
                name="num2"
              />
              <Field
                className="absolute top-[620px] left-[324.24px] rounded-10xs box-border w-[72.49px] h-8 border-[1px] border-solid border-gray-300"
                type="number"
                name="num3"
              />
              <Field
                className="absolute top-[620px] left-[429.97px] rounded-10xs box-border w-[101.69px] h-8 border-[1px] border-solid border-gray-300"
                type="number"
                name="num4"
              />
              <Field
                className="absolute top-[620px] left-[556.84px] rounded-10xs box-border w-[123.84px] h-8 border-[1px] border-solid border-gray-300"
                type="number"
                name="num5"
              />
              <Field
                className="absolute top-[620px] left-[705.87px] rounded-10xs box-border w-[158.07px] h-8 border-[1px] border-solid border-gray-300"
                type="number"
                name="num6"
              />
              <div className="absolute top-[593px] left-[192.32px] text-sm font-medium inline-block w-[47.33px]">
                Weight
              </div>
              <div className="absolute top-[593px] left-[335.31px] text-sm font-medium inline-block w-[19.13px]">
                BP
              </div>
              <div className="absolute top-[593px] left-[431.97px] text-sm font-medium inline-block w-[37.26px]">
                Pulse
              </div>
              <div className="absolute top-[593px] left-[557.84px] text-sm font-medium inline-block w-[86.6px]">
                Temperature
              </div>
              <div className="absolute top-[593px] left-[706.87px] text-sm font-medium inline-block w-[76.53px]">
                Respiration
              </div>
              <img
                className="absolute top-[711px] left-[232.6px] w-[13.43px] h-2 object-cover"
                alt=""
                src="/polygon-2@2x.png"
              />
              <Field
                className="absolute top-[699px] left-[42.3px] rounded-10xs box-border w-[213.46px] h-8 border-[1px] border-solid border-gray-300 "
                name="drop1"
                as="select"
              >
                <option value="xyz">select</option>
                <option value="abc">abc</option>
                <option value="xy">xy</option>
              </Field>
              <Field
                className="absolute top-[699px] left-[278.93px] rounded-10xs box-border w-[213.46px] h-8 border-[1px] border-solid border-gray-300"
                type="text"
                name="txt1"
              />
              <Field
                className="absolute top-[699px] left-[521.6px] rounded-10xs box-border w-[342.34px] h-8 border-[1px] border-solid border-gray-300"
                type="text"
                name="txt2"
              />

              <div className="absolute top-[670px] left-[43.3px] text-sm font-medium inline-block w-[109.76px]">
                Symptoms Type
              </div>
              <div className="absolute top-[745px] left-[43.3px] text-sm font-medium inline-block w-[33.23px]">
                Note
              </div>
              <div className="absolute top-[670px] left-[281.94px] text-sm font-medium inline-block w-[105.73px]">
                Symptoms Title
              </div>
              <div className="absolute top-[670px] left-[522.6px] text-sm font-medium inline-block w-[153.05px]">
                Symptoms Description
              </div>
              <Field
                className=" absolute top-[772px] left-[42.3px] rounded-10xs box-border w-[821.64px] h-[53px] border-[1px] border-solid border-gray-300"
                name="txt3"
                as="textarea"
              />
            </div>

            <button
              className=" absolute h-10 w-20 top-[695px] left-[1005px] rounded-xl bg-dodgerblue "
              type="submit" onClick={handleButtonClick1}
            >
              submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Row20;
