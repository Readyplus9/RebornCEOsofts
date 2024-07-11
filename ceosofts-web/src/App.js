// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import logo from './logo.svg';
// import './App.css';

//ตัวอย่าง ตอนที่10

// function App() {
//   const name = "Yingyai";
//   return (
//     <div>
//       <h1>hello: {name}</h1>
//       <button onClick={() => alert("ok")}> Click </button>
//     </div>
//   );
// }

//ตัวอย่าง ตอนที่11

// function App() {
//   //ตัวแปร
//   let count = 0;
//   function addCount() {
//     count += 1;
//     console.log(count);
//   }

//   //พื้นที่แสดงผล
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={addCount}>เพิ่มค่า</button>
//     </>
//   );
// }

// //ตัวอย่าง ตอนที่12
// import { useState } from "react";
// function App() {
//   //ตสร้าง state
//   const [count, setCount] = useState(0); //ค่าเริ่มต้นคือ 0

//   //วิธีที่1
//   // function addCount() {
//   //   // console.log(count);
//   //   setCount(count + 1);
//   // }

//   // function subtractCount() {
//   //   // console.log(count);
//   //   setCount(count - 1);
//   // }

//   // function resetCount() {
//   //   // console.log(count);
//   //   setCount(0);
//   // }

//   //พื้นที่แสดงผล
//   return (
//     <>
//       <h1>{count}</h1>
//       {/* //วิธีที่1 */}
//       {/* <button onClick={addCount}>เพิ่มค่า</button>
//       <button onClick={subtractCount}>ลดค่า</button>
//       <button onClick={resetCount}>Clear</button> */}
//       {/* //วิธีที่2 */}
//       <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
//       <button onClick={() => setCount(count - 1)}>ลดค่า</button>
//       <button onClick={() => setCount(0)}>Clear</button>
//     </>
//   );
// }

//ตัวอย่าง ตอนที่13
import { useState } from "react";
function App() {
  //สร้าง state

  const [students, setStudent] = useState([
    { id: 1, name: "yai" },
    { id: 2, name: "kem" },
    { id: 3, name: "nuch" },
    { id: 4, name: "yai" },
  ]);
  function deleteStudent(id) {
    // console.log(id);
    setStudent(students.filter((item) => item.id !== id));
  }
  //พื้นที่แสดงผล
  return (
    <>
      <h1>จำนวนนักเรียน = {students.length}</h1>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            {/* {item.id} - {item.name} */}
            <p>
              {item.id} - {item.name}
              <button onClick={() => deleteStudent(item.id)}>Delete</button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
