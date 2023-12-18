import {useState } from 'react';

const Row24 = () => {
    const [formData, setFormData] = useState({
        text:"",
        text1:"",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"",
        text10:"",
        text11:"",        
        radio: "",
        radio1:"",
        radio2:"",
        radio3:"",
        radio4:"",
        radio5:"",
        radio6:"",
        radio7:"",
        radio8:"",
        radio9:"",    
        area:"",
        area1:"",    
     })
    const handleChange =(event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
  return (
    <div> <div className="relative bg-white w-full h-[944px] overflow-hidden text-left text-base text-black font-inter">
    <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1440px] h-[100px] overflow-hidden text-[32px] text-white ">
      <div className="absolute top-[30px] left-[49px] font-semibold">
        Add Prescription
      </div>
    </div>
    <div className="absolute top-[130px] left-[41px] text-xl">
      Header Note
    </div>
    <div className="absolute top-[694px] left-[41px] text-xl">
      Footer Note
    </div>
    <div className="absolute top-[171px]  left-[41px] rounded-10xs bg-gainsboro w-[122px] h-[34px]" />
    <div className="absolute top-[735px] left-[41px] rounded-10xs bg-gainsboro w-[122px] h-[34px]" />
    <div className="absolute top-[171px] left-[174px] rounded-10xs bg-gainsboro w-[250px] h-[34px]" />
    <div className="absolute top-[735px] left-[174px] rounded-10xs bg-gainsboro w-[250px] h-[34px]" />
    <div className="absolute top-[170px] left-[435px] rounded-10xs bg-gainsboro w-[39px] h-[34px]" />
    <div className="absolute top-[734px] left-[435px] rounded-10xs bg-gainsboro w-[39px] h-[34px]" />
    <div className="absolute top-[170px] left-[664px] rounded-10xs bg-gainsboro w-[39px] h-[34px]" />
    <div className="absolute top-[734px] left-[664px] rounded-10xs bg-gainsboro w-[39px] h-[34px]" />
    <div className="absolute top-[170px] left-[485px] rounded-10xs bg-gainsboro w-[168px] h-[34px]" />
    <div className="absolute top-[734px] left-[485px] rounded-10xs bg-gainsboro w-[168px] h-[34px]" />
    <input className="absolute top-[217px] left-[41px] rounded-10xs box-border w-[851px] h-[87px] border-[1px] border-solid border-gray-100" type='textarea' name='area'  onChange={handleChange}/>
    <input className="absolute top-[800px] left-[41px] rounded-10xs box-border w-[851px] h-[87px] border-[1px] border-solid border-gray-100" type='textarea' name='area1' onChange={handleChange} />
    <div className="absolute top-[178px] left-[64px]">Normal Text</div>
    <div className="absolute top-[742px] left-[64px]">Normal Text</div>
    <div className="absolute top-[178px] left-[373px]">Small</div>
    <div className="absolute top-[742px] left-[373px]">Small</div>
    <div className="absolute top-[178px] left-[186px] font-semibold">
      Bold
    </div>
    <div className="absolute top-[742px] left-[186px] font-semibold">
      Bold
    </div>
    <i className="absolute top-[178px] left-[235px] font-medium">Italic</i>
    <i className="absolute top-[742px] left-[235px] font-medium">Italic</i>
    <div className="absolute top-[178px] left-[286px] [text-decoration:underline]">
      Underline
    </div>
    <div className="absolute top-[742px] left-[286px] [text-decoration:underline]">
      Underline
    </div>
    <div className="absolute top-[178px] left-[47px] font-times-new-roman">
      A
    </div>
    <div className="absolute top-[742px] left-[47px] font-times-new-roman">
      A
    </div>
    <div className="absolute top-[330.5px] left-[-0.5px] box-border w-[997px] h-px border-t-[1px] border-solid border-gray-100" />
    <div className="absolute top-[349px] left-[41px] font-medium">
      Finding Category
    </div>
    <div className="absolute top-[143px] left-[1021px] font-medium">
      Pathology
    </div>
    <div className="absolute top-[230px] left-[1021px] font-medium">
      Radiology
    </div>
    <div className="absolute top-[317px] left-[1021px] font-medium">
      Notification to :
    </div>
    <div className="absolute top-[450px] left-[41px] font-medium">
      Medicine Category
    </div>
    <div className="absolute top-[551px] left-[41px] font-medium">Dose</div>
    <div className="absolute top-[349px] left-[324px] font-medium">
      Finding List
    </div>
    <div className="absolute top-[450px] left-[324px] font-medium">
      Medicine
    </div>
    <div className="absolute top-[551px] left-[222px] font-medium">
      Dose Interval
    </div>
    <div className="absolute top-[349px] left-[607px] font-medium">
      Finding Description
    </div>
    <div className="absolute top-[450px] left-[607px] font-medium">Dose</div>
    <div className="absolute top-[551px] left-[447px] font-medium">
      Dose Duration
    </div>
    <div className="absolute top-[551px] left-[721px] font-medium">
      Instruction
    </div>
    <input className="absolute top-[380px] left-[40px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text'  onChange={handleChange}/>
    <input className="absolute top-[481px] left-[40px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text1'  onChange={handleChange}/>
    <input className="absolute top-[582px] left-[40px] rounded-10xs box-border w-[159px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text2' onChange={handleChange} />
    <input className="absolute top-[380px] left-[323px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text3'  onChange={handleChange}/>
    <input className="absolute top-[481px] left-[323px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200"  type='test' name='text4' onChange={handleChange}/>
    <input className="absolute top-[582px] left-[221px] rounded-10xs box-border w-[207px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text5' onChange={handleChange} />
    <input className="absolute top-[380px] left-[606px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200" type='test' name='text6'  onChange={handleChange}/>
    <input className="absolute top-[174px] left-[1020px] rounded-10xs box-border w-96 h-8 border-[1px] border-solid border-gray-200"  type='test' name='text7' onChange={handleChange}/>
    <input className="absolute top-[261px] left-[1020px] rounded-10xs box-border w-96 h-8 border-[1px] border-solid border-gray-200"  type='test' name='text8' onChange={handleChange}/>
    <input className="absolute top-[481px] left-[606px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200"  type='test' name='text9' onChange={handleChange}/>
    <input className="absolute top-[582px] left-[451px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200"  type='test' name='text10' onChange={handleChange}/>
    <input className="absolute top-[582px] left-[720px] rounded-10xs box-border w-[247px] h-8 border-[1px] border-solid border-gray-200"  type='test' name='text11' onChange={handleChange}/>
    <div className="absolute top-[637px] left-[41px] rounded-10xs bg-dodgerblue w-[115px] h-[30px]" />
    <div className="absolute top-[644px] left-[59px] text-[12px] font-semibold text-white">
      Add medicine
    </div>
    <input className="absolute top-[355px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio' onChange={handleChange} />
    <input  className="absolute top-[382px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio1' onChange={handleChange} />
    <input  className="absolute top-[409px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio2'  onChange={handleChange}/>
    <input  className="absolute top-[436px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio3' onChange={handleChange} />
    <input  className="absolute top-[489px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio4' onChange={handleChange} />
    <input  className="absolute top-[516px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio5'  onChange={handleChange}/>
    <input  className="absolute top-[543px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio6' onChange={handleChange} />
    <input  className="absolute top-[570px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio7'  onChange={handleChange}/>
    <input  className="absolute top-[597px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio8' onChange={handleChange} />
    <input  className="absolute top-[462px] left-[1021px] box-border w-[17px] h-[17px] border-[0.5px] border-solid border-black" type='radio' name='radio9' onChange={handleChange} />
    <div className="absolute top-[355px] left-[1053px] text-sm">Admin</div>
    <div className="absolute top-[382px] left-[1053px] text-sm">
      Accountant
    </div>
    <div className="absolute top-[409px] left-[1053px] text-sm">
      Pharmacist
    </div>
    <div className="absolute top-[436px] left-[1053px] text-sm">
      Pathologist
    </div>
    <div className="absolute top-[462px] left-[1053px] text-sm">
      Radiologist
    </div>
    <div className="absolute top-[489px] left-[1053px] text-sm">
      Super Admin
    </div>
    <div className="absolute top-[516px] left-[1053px] text-sm">
      Receptionist
    </div>
    <div className="absolute top-[543px] left-[1053px] text-sm">Nurse</div>
    <div className="absolute top-[570px] left-[1053px] text-sm">
      Website Pro
    </div>
    <div className="absolute top-[597px] left-[1052px] text-sm">
      Clinic Admin
    </div>
  </div></div>
  )
}

export default Row24