import React from 'react'
import { Table , TableHead , TableBody , TableRow , TableCell , styled, makeStyles ,TBody  } from "@mui/material"
import { PharmacyData } from '../data/dummy'
import { Margin } from '@syncfusion/ej2-react-charts';
import genaratebill from "../data/genaratebill.png"
import pdf from "../data/pdf.png"
import print from "../data/print.png"
import mdei from "../data/mdei.png"
import doc from "../data/doc.png"
import { useNavigate } from 'react-router-dom';
const Pharmacy = () => {
 
     const navigate = useNavigate()
     const handle =() =>{
        navigate('/Pharm1')
     }
     const navigate1 = useNavigate()
     const handle1 =() =>{
        navigate1('/Pharm2')
     }
    
  return (
    <div>  <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-[25px] text-black font-inter">
    <div className="absolute top-[50px] left-[71px] bg-whitesmoke w-[1294px] h-[55px] overflow-hidden">
      <b className="absolute top-[10px] left-[89px] opacity-[0.7]">{`Pharmacy `}</b>
      <div className="absolute top-[10px] left-[828px] w-[323px] h-[35px] text-mini text-white">
        <button className="absolute top-[0px] left-[0px] rounded-lg bg-steelblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[145px] h-[35px] overflow-hidden" onClick={handle}>
          <button className="absolute top-[9px] left-[39.1px] font-semibold" onClick={handle}>
            Generate Bill
          </button>
          <img
            className="absolute h-[48.57%] w-[10.34%] top-[25.71%] right-[80%] bottom-[25.71%] left-[9.66%] max-w-full overflow-hidden max-h-full object-cover "
            alt=""
            src={genaratebill}
          />
        </button>
        <button className="absolute top-[0px] left-[195px] rounded-lg bg-dodgerblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-32 h-[35px] overflow-hidden" onClick={handle1}>
          <button className="absolute top-[8px] left-[39.76px] font-semibold" onClick={handle1}>
            Medicines
          </button>
          <img
            className="absolute h-[54.29%] w-[15.63%] top-[22.86%] right-[73.44%] bottom-[22.86%] left-[10.94%] max-w-full overflow-hidden max-h-full object-cover "
            alt=""
            src={mdei}
          />
        </button>
      </div>
    </div>
    <div className="absolute top-[105px] left-[73px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1294px] h-[669px] overflow-hidden text-mini">
      <input className="absolute top-[16px] left-[63px] rounded-[20px] bg-white box-border w-[273px] h-[45px] overflow-hidden border-[1px] border-solid border-gray pl-5" type='text' placeholder='search'></input>
       
      
      <div className="absolute top-[142.5px] left-[18.5px] box-border w-[1257px] h-px opacity-[0.5] border-t-[1px] border-solid border-black bg-yellow-300" />
     <div className=' relative'>
      <div className="absolute top-[92.5px] left-[18.5px] box-border w-[1257px] h-px opacity-[0.5] border-t-[1px] border-solid border-black bg-slate-800" /></div>
 
      <div className="absolute top-[19px] left-[948px] text-lg font-semibold text-darkslategray inline-block w-[63px] opacity-[0.5]">
        Zoom :
      </div>
     
  
   {/* best option handle table*/}
      <div className="relative top-[17px] left-[112px] w-16 h-[88px] "></div>
      
{/* best option */}
     
      <img
        className="absolute top-[11px] left-[1155px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src={doc}
      />
      <img
        className="absolute top-[11px] left-[1204px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src={print}
      />
      <img
        className="absolute top-[11px] left-[1106px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src={print}
      />
      <div className="absolute top-[15px] left-[1013px] box-border w-[77px] h-[29px] overflow-hidden text-lg border-[0.5px] border-solid border-gray">
        <div className="absolute top-[4px] left-[5px] font-semibold inline-block w-14">
          100 %
        </div>
        <img
          className="absolute top-[8px] left-[59px] w-[15px] h-[15px] overflow-hidden object-cover opacity-[0.5]"
          alt=""
          src="/teenyiconsdownsolid@2x.png"
        />
      </div>
      
      <Table >
      <TableHead>
      <TableRow>
      <TableCell>Bill</TableCell>
      <TableCell>case Id </TableCell>
      <TableCell>date</TableCell>
      <TableCell>Patient</TableCell>
      <TableCell>Doctor name</TableCell>
      <TableCell>amount</TableCell>
      <TableCell>Discount</TableCell>
      <TableCell>Paid Amount</TableCell>
      <TableCell>Balance Amount</TableCell>
      </TableRow></TableHead>
      
      <TableBody>
      { PharmacyData.map(user=>(
        <TableRow key={user.caseid}>
        <TableCell>{user.bill}</TableCell>
        <TableCell>{user.caseid}</TableCell>
        <TableCell>{user.date}</TableCell>
        <TableCell>{user.patient}</TableCell>
        <TableCell>{user.Doctorname}</TableCell>
        <TableCell>{user.amount}</TableCell>
        <TableCell>{user.discount}</TableCell>
        <TableCell>{user.payamount}</TableCell>
        <TableCell>{user.balamount}</TableCell>
       
        </TableRow>
  ))}
     
      </TableBody>
      
      </Table>
      <div className="absolute top-[39px] left-[1155px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[42px] left-[1137px] w-6 h-6 overflow-hidden" />
    </div>
    <div className="absolute top-[815px] left-[352px] w-[732px] h-[45px] text-lg text-white">
      <div className="absolute top-[0px] left-[152px] rounded-xl bg-dodgerblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[132px] h-[45px] overflow-hidden">
        <div className="absolute top-[12px] left-[23px]">Last Page</div>
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-dodgerblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[132px] h-[45px] overflow-hidden">
        <div className="absolute top-[12px] left-[23px]">First Page</div>
      </div>
      <div className="absolute top-[0px] left-[434px] rounded-xl bg-dodgerblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[139px] h-[45px] overflow-hidden">
        <div className="absolute top-[12px] left-[9px]">Previous Page</div>
      </div>
      <div className="absolute top-[0px] left-[593px] rounded-xl bg-dodgerblue shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] w-[139px] h-[45px] overflow-hidden">
        <div className="absolute top-[12px] left-[25px]">Next Page</div>
      </div>
      <div className="absolute top-[12px] left-[307px] font-semibold text-darkslategray">
        Page
      </div>
      <div className="absolute top-[12px] left-[364px] font-semibold text-darkslategray">
        1 of 1
      </div>
    </div>
  </div></div>
  )
}

export default Pharmacy