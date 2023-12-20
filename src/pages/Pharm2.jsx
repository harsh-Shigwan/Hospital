import React from 'react';
import plus from '../data/plus.png';
import doc from '../data/doc.png';
import { useNavigate } from 'react-router-dom';
import { Table , TableHead , TableBody , TableRow , TableCell , styled, makeStyles ,TBody  } from "@mui/material"
import { Medicine, PharmacyData } from '../data/dummy';
import print from '../data/print.png'
import pdf from '../data/doc.png'
import cross from '../data/cross.png'
import { Field, Formik , Form} from 'formik';
const Pharm2 = () => {
    const navigate = useNavigate();
    const click =() =>{
         navigate('/Pharmacy')
      }
      const navigate1 = useNavigate();
    const click1=()=>{
        navigate1('/Pharmacy')
    }
  return (
    <div><Formik><Form><div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-mini text-black font-inter">
    <div className="absolute top-[61px] left-[0px] bg-whitesmoke w-[1440px] h-[38px] overflow-hidden">
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
    <div className="absolute top-[167px] left-[73px] bg-white  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1254px] h-[722px] overflow-hidden text-lg">
      <div className="absolute top-[-3px] left-[1162px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[72px] left-[65px] w-[1171px] h-[50px] ">
        <Field className="absolute top-[5px] left-[0px] rounded-[20px] p-5 box-border w-[273px] h-[45px] overflow-hidden text-mini border-[1px]  border-solid border-gray" 
        name="text1" type='text'>
 
        </Field>
        <div className="absolute top-[8px] left-[885px] font-semibold text-darkslategray inline-block w-[63px] opacity-[0.5]">
          Zoom :
        </div>
        <img
          className="absolute top-[0px] left-[1092px] w-[30px] h-[30px] overflow-hidden object-cover "
          alt=""
          src={print}
        />
        <img
          className="absolute top-[0px] left-[1141px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={doc}
        />
        <img
          className="absolute top-[0px] left-[1043px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={pdf}
        />
        <div className="absolute top-[4px] left-[950px] box-border w-[77px] h-[29px] overflow-hidden border-[0.5px] border-solid border-gray">
          <div className="absolute top-[4px] left-[5px] font-semibold inline-block w-14">
            100 %
          </div>
          <img
            className="absolute top-[8px] left-[59px] w-[15px] h-[15px] overflow-hidden object-cover opacity-[0.5] bg-slate-500"
            alt=""
            src="/teenyiconsdownsolid@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1294px] h-[60px] overflow-hidden text-[25px] text-white">
        <b className="absolute top-[15px] left-[87px]">Medicines Stocks</b>
        <img
          className="absolute top-[0px] left-[1201px] w-[53px] h-[60px] overflow-hidden object-cover"
          alt=""
          src={cross} onClick={click}
        />
        <div className="absolute top-[7px] left-[614px] flex flex-row items-start justify-start gap-[32px] text-mini">
          <div className="relative rounded-lg bg-darkslategray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[191px] h-[43px] overflow-hidden shrink-0">
            <div className="absolute top-[14.28px] left-[49.83px] w-[129px] h-[18px]">
              <div className="absolute top-[0px] left-[0px] w-[129px] h-[18px] ">
                <div className="absolute top-[0px] left-[0px]">
                  Import Medicines
                </div>
              </div>
            </div>
            <img
              className="absolute h-[65.12%] w-[11.52%] top-[13.95%] right-[80.1%] bottom-[20.93%] left-[8.38% ] w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={doc}
            />
          </div>
          <div className="relative rounded-lg bg-white shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[191px] h-[43px] overflow-hidden shrink-0 text-darkslategray">
            <div className="absolute h-[45.93%] w-[76.96%] top-[27.91%] right-[11.52%] bottom-[26.17%] left-[11.52%]">
              <img
                className="absolute h-full w-[14.06%] top-[0%] right-[85.94%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover  "
                alt=""
                src={plus}
              />
              <b className="absolute top-[1.41px] left-[37px]">
                Add Medicines
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[17px] left-[112px] w-16 h-[186px] "></div>
      <Table >
      <TableHead>
      <TableRow>
   
      <TableCell>Medicine Name</TableCell>
      <TableCell>Medicine Company </TableCell>
      <TableCell>Medicine Composition</TableCell>
      <TableCell>Medicine Category</TableCell>
      <TableCell>Medicine Group</TableCell>
      <TableCell>Unit</TableCell>
      <TableCell>Availbale Qty</TableCell>

      </TableRow></TableHead>
      
      <TableBody>
      { Medicine.map(user=>(
        <TableRow key={user.sr}>
        <TableCell>{user.medname}</TableCell>
        <TableCell>{user.medcomp}</TableCell>
        <TableCell>{user.medicompo}</TableCell>
        <TableCell>{user.medicat}</TableCell>
        <TableCell>{user.medigrp}</TableCell>
        <TableCell>{user.unit}</TableCell>
        <TableCell>{user.Qty}</TableCell>      
        </TableRow>
  ))}
     
      </TableBody>
      
      </Table>
       

    </div>
  </div></Form></Formik></div>
  )
}

export default Pharm2