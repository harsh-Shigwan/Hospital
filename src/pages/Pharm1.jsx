import React from 'react'
import { Formik , Form , Field } from 'formik'
import { useNavigate } from 'react-router-dom'
const Pharm1 = () => {
  const navigate = useNavigate();
   const click =() =>{
        navigate('/Pharmacy')
     }
  return (
    <div>
    <Formik onSubmit={(value) => {
      console.log(value);
    }}><Form><div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-lg text-black font-inter">
    <div className="absolute top-[60px] left-[7px] bg-whitesmoke w-[1440px] h-[38px] overflow-hidden text-mini">
      <div className="absolute top-[10px] left-[94px] font-medium opacity-[0.7]">
        Bill no : A4581
      </div>
      <div className="absolute top-[10px] left-[298px] font-medium opacity-[0.7]">{`Case ID: `}</div>
      <div className="absolute top-[8px] left-[1146px] w-60 h-[22px] opacity-[0.7] text-lg text-darkslategray">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.7]">
          Date:29/12/2023
        </div>
        <div className="absolute top-[0px] left-[162px] font-semibold opacity-[0.7]">
          11:59 Pm
        </div>
      </div>
      <div className="absolute top-[-1.5px] left-[1122.5px] box-border w-[3px] h-[41px] border-r-[3px] border-solid border-white" />
    </div>
    <div className="absolute top-[162px] left-[79px] flex flex-row items-start justify-start gap-[28px]">
      <div className="relative w-[359px] h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Medicine Category*
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-lg bg-whitesmoke w-[359px] h-[35px] overflow-hidden" name="category" as="select"><option value="ABC"></option><option value="ABC1">Abc1</option>
        <option value="ABC2">Abc2</option> <option value="ABC3">Abc3</option><option value="ABC4">Abc4</option>
          
        </Field>
      </div>
      <div className="relative w-64 h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Medicine Name*
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-lg bg-whitesmoke w-64 h-[35px] overflow-hidden" name="mediname" as="select">
        <option value="ABC">Select the option</option><option value="ABC1">Abc1</option>
        <option value="ABC2">Abc2</option> <option value="ABC3">Abc3</option><option value="ABC4">Abc4</option>
        </Field>
      </div>
      <div className="relative w-64 h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Batch No*
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-lg bg-whitesmoke w-64 h-[35px] overflow-hidden" name="batchnum" as="select">
        <option value="ABC">Select the option</option><option value="ABC1">Abc1</option>
        <option value="ABC2">Abc2</option> <option value="ABC3">Abc3</option><option value="ABC4">Abc4</option>
        </Field>
      </div>
      <div className="relative w-[150px] h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Expiry Date
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-lg bg-whitesmoke w-[150px] h-[35px] overflow-hidden" name="Date" type="date">
         
        </Field>
      </div>
      <div className=" absolute w-[168px] h-16 top-[87px] left-[952px] ">

          Quantity Availbale*
       
        <Field className="absolute top-[29px] left-[0px] rounded-8xs box-border w-[168px] h-[35px] overflow-hidden border-[1px] border-solid border-lightskyblue" name="num" type="number" />
      </div>
    </div>
    <div className="absolute top-[250px] left-[466px] w-[481px] h-16">
      <div className="absolute top-[0px] left-[0px] w-[150px] h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Sale Price*
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-8xs  bg-whitesmoke w-[150px] h-[35px] overflow-hidden" name="sale" type="number">
          
        </Field>
      </div>
      <div className="absolute top-[0px] left-[284px] w-[197px] h-16">
        <div className="absolute top-[0px] left-[0px] font-semibold opacity-[0.6]">
          Tax Amount*
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-8xs box-border w-[197px] h-[35px] overflow-hidden border-[1px] border-solid border-lightskyblue"  name="Tax" type="number"/>
      </div>
    </div>
    <div className="absolute top-[450px] left-[92px] w-[797px] h-[226px]">
      <div className="absolute top-[0px] left-[3px] font-semibold opacity-[0.6]">
        Note :
      </div>
      <Field className="absolute top-[29px] left-[0px] rounded-8xs bg-white box-border w-[797px] h-[197px] overflow-hidden border-[1px] border-solid border-lightskyblue" type="textarea " name='note' />
    </div>
    <div className="absolute top-[362px] left-[91px] w-[798px] h-16">
      <div className="absolute top-[0px] left-[3px] font-semibold opacity-[0.6]">
        Hospital Doctor*
      </div>
      <Field className="absolute top-[29px] left-[0px] rounded-8xs bg-whitesmoke w-[475px] h-[35px] overflow-hidden" name="batchnum" as="select"> <option value="ABC">Select the Doctor</option><option value="ABC1">Abc1</option>
      <option value="ABC2">Abc2</option> <option value="ABC3">Abc3</option><option value="ABC4">Abc4</option>
      </Field>
      <div className="absolute top-[0px] left-[538px] w-[260px] h-16">
        <div className="absolute top-[0px] left-[3px] font-semibold opacity-[0.6]">
          Doctor Name :
        </div>
        <Field className="absolute top-[29px] left-[0px] rounded-8xs bg-white box-border w-[260px] h-[35px] overflow-hidden border-[1px] border-solid border-lightskyblue" name="doc" type="text"/>
      </div>
    </div>

    <div className="absolute top-[337.5px] left-[72.5px] box-border w-[1295px] h-px border-t-[1px] border-solid border-gainsboro" />
    <div className="absolute top-[700px] left-[92px] bg-whitesmoke shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] w-[1270px] h-[198px] overflow-hidden">
      <div className="absolute top-[17px] left-[42px] flex flex-col items-start justify-center gap-[25px]">
        <div className="relative font-semibold opacity-[0.6]">
          Total Amount (Rs):<div>18518</div>
        </div>
        <div className="relative font-semibold opacity-[0.6]">
          Discount (Rs) : 20
        </div>
        <div className="relative font-semibold opacity-[0.6]">Tax (Rs) : 2500</div>
        <div className="relative font-semibold opacity-[0.6]">
          Net Amount :
        </div>
      </div>
      <div className="absolute top-[17px] left-[451px] font-semibold opacity-[0.5]">
        Payment Mode :
      </div>
      <div className="absolute top-[86px] left-[451px] font-semibold opacity-[0.5]">
        Amount (Rs) :
      </div>
      <Field className="absolute top-[14px] left-[615px] rounded-8xs bg-white w-[325px] h-8 overflow-hidden"  name="pay" as="select">
      <option value="ABC">Select the option</option><option value="cash">cash</option>
       <option value="online">Online</option>
      </Field>
      <div className="absolute top-[83px] left-[615px] rounded-8xs bg-white w-[231px] h-8 overflow-hidden" />
    </div>
    <button
    className=" absolute h-10 w-28 top-[835px] left-[985px] rounded-xl bg-dodgerblue "
    type="submit" onClick={click} 
  >
    Done
  </button>
   
  </div></Form></Formik></div>
  )
}

export default Pharm1