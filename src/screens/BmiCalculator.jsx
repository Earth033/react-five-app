import React from "react";
import bmi from "./../assets/bmi.jpg"
function BmiCalculator() {
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
                ค่าคำนวณ BMI
              </div>
    
              <img
                src={bmi}
                alt="รูปเครรื่องคิดเลข"
                className="w-3/5 mt-4 mb-4 rounded-md shadow-md"
              />
    
              <div
                className="text-xl  font-bold text-gray-800   w-full text-left mt-4 "
              >
                ป้อนตัวเลขตัวที่ 1
              </div>
              <div className="text-gray-800 w-full text-left mt-4 ">
                <input
                  type="text"
                  className="border rounded-sm w-full p-2 bg-amber-50 border-gray-400"
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
                  type="text"
                  className="border rounded-sm w-full p-2 bg-amber-50 border-gray-400"
                />
                <div className='flex mt-5 gap-5'>
                  <button className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md cursor-pointer'>
                    ยกเลิก
                  </button>
                  <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer'>
                    คำนวณ
                  </button>
                  <button className='bg-blue-500 hover:bg-blue-950 text white py-2 px-4 rounded-md cursor-pointer'>
                    เพศชาย
                  </button>
                  <button className='bg-blue-500 hover:bg-blue-950 text white py-2 px-4 rounded-md cursor-pointer'>
                    เพศหญิง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
  );
}

export default BmiCalculator;
