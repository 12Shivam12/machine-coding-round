// import React, { useState } from 'react'
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { IoCloseCircleOutline } from "react-icons/io5";
// const Modal = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleModal = () => {
//         setIsOpen(!isOpen);
//     }

//     return (
//         <div className='w-full h-screen flex justify-center m-auto mt-20'>
//             {!isOpen && <button onClick={handleModal} className='w-2/5 h-[100px] bg-red-400 text-white text-2xl font-semibold rounded-md'>Modal</button>}
//             {
//                 (isOpen) && <div className='w-1/4 h-1/4 border border-red-400 rounded-md p-2'>
//                     <div className='flex justify-between px-4 text-2xl'>
//                         <div className='text-red-700'><RiDeleteBin6Line/></div>
//                         <button className='text-gray-500' onClick={handleModal}><IoCloseCircleOutline/></button>
//                     </div>
//                     <h1 className='mt-4 text-center text-xl font-semibold'>Delete Project</h1>
//                     <p className='text-center text-sm mt-2 font-thin'>Are you sure, You want to delete it</p>
//                     <div className='flex justify-center gap-4 mt-3'>
//                         <button onClick={handleModal} className='bg-gray-300 border font-semibold px-2 py-1 rounded-md hover:text-black hover:bg-white hover:border-black'>Cancel</button>
//                         <button className='bg-red-600 border font-semibold px-2 py-1 rounded-md text-white hover:text-red-600 hover:bg-white hover:border-red-600'>Delete</button>
//                     </div>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Modal



import React, { useState } from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // If modal is not open, don't render it

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &#10005;
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content mb-4">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal