import React from "react";
import calculator from './../assets/calculator.jpg';
import { useState } from 'react';
function SumNumber() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setNum] = useState('0.00');
  
  const handleInputNum1 = (e) => {
    setNum1(e.target.value);
    }
  const handleCancle = () => {
    setNum1('');
    setNum2('');
    setNum('0.00');
  }

  const handleSumNumberclick = () => {
    if (num1 === '' || num2 === '') {
      alert('กรุณาป้อนตัวเลขทั้งสองตัว');
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert('กรุณาป้อนตัวเลขที่ถูกต้อง');
      return;
    }
    const result = parseFloat(num1) + parseFloat(num2);
    setNum(result.toFixed(2));
  }
  return (
    <>
      <div
        className="flex flex-col items-center 
                    justify-center h-screen 
                    bg-red-300"
      >
        <div
          className="flex flex-col items-center 
                    justify-center w-2/5 
                    bg-red-500 shadow-lg
                    rounded-md py-10 px-20"
        >
          <div className="text-2xl  font-bold text-blue-500">
            ค่าคำนวณผลรวมตัวเลข
          </div>

          <img
            src={calculator}
            alt="รูปเครรื่องคิดเลข"
            className="w-3/5 mt-4 mb-4 rounded-md shadow-md"
          />

          <div
            className="text-xl  font-bold text-gray-800   w-full text-left mt-4 "
          >
            ป้อนตัวเลขตัวที่ 1
          </div>
          <div className="text-gray-800 w-full text-left mt-4 ">
            <input type="text" onChange={(e)=>{setNum1(e.target.value)}} value={num1} className="border  rounded-sm w-full p-2 bg-amber-50 border-gray-400 "
            />
          </div>
          <div
            className="text-xl  font-bold text-gray-800 
                          w-full text-left mt-4 "
          >
            ป้อนตัวเลขตัวที่ 2
          </div>
          <div className="text-gray-800 w-full text-left mt-4 ">
            <input
              type="text" onChange={(e)=>{setNum2(e.target.value)}}value={num2}
              className="border rounded-sm w-full p-2 bg-amber-50 border-gray-400 "
            />
            <div className='flex mt-5 gap-5'>
              <button 
              onClick= {handleCancle}
              className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md cursor-pointer'>
                ยกเลิก
              </button>
              <button onClick={handleSumNumberclick} className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer'>
                คำนวณ
              </button>
              <div className='mt-5'>
                <span className='text-2xl font-bold'>ผลรวมคือ:</span>
                <span className='text4xl font-bold text-black'>{sum}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SumNumber;
