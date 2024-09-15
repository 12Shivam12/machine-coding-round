// import Count from "./components/Counter/Count"
// import Crousal from "./components/Crousal/Crousal"
// import Form from "./components/FormValidation/Form"
// import Modal from "./components/Modal/Modal"
// import Navbar from "./components/Responsive-Navbar/Navbar"
// import Stopwatch from "./components/Stopwatch/Stopwatch"
// import Timer from "./components/Timer/Timer"
// import Users from "./components/uersData/Users"

import { useState } from "react";
import Modal from "./components/Modal/Modal";

// function App() {
//   return (
//     <>
//       {/* <Navbar/> */}
//       {/* <Form/> */}
//       {/* <Users/> */}
//       {/* <Count/> */}
//       {/* <Timer/> */}
//       {/* <Stopwatch/> */}
//       {/* <Crousal/> */}
//       <Modal/>
//     </>
//   )
// }

// export default App

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">React Modal Example</h1>
      <button
        onClick={toggleModal}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Sample Modal">
        <p>This is the content inside the modal. You can place any component here.</p>
      </Modal>
    </div>
  );
};

export default App;

