// //ตัวอย่าง ตอนที่15
// import { useState } from "react";
// //วิธีที่2
// import "./StudentList.css";
// export default function StudentList() {
//   //สร้าง state
//   const [students, setStudent] = useState([
//     { id: 1, name: "yai" },
//     { id: 2, name: "kem" },
//     { id: 3, name: "nuch" },
//     { id: 4, name: "yai" },
//   ]);
//   const [show, setShow] = useState(true); //show detail

//   function deleteStudent(id) {
//     // console.log(id);
//     setStudent(students.filter((item) => item.id !== id));
//   }

//   //พื้นที่แสดงผล
//   //บทที่20
//   const btnStyle = {
//     background: show ? "purple" : "green",
//   };
//   return (
//     <>
//       <ul>
//         <div className="header">
//           {/* <h1>จำนวนนักเรียน = {students.length}</h1> */}
//           <h1 style={{ color: "red", fontSize: "50px" }}>
//             จำนวนนักเรียน = {students.length}
//           </h1>
//           {/* ปรับ stayle แบบเฉพาะเจาะจง */}

//           {/* <h2>{show}</h2> */}
//           {/* <button onClick={() => setShow(!show)} style={btnStyle}>
//             สลับ
//           </button> */}

//           <button onClick={() => setShow(!show)} style={btnStyle}>
//             {show ? "hide" : "show"}
//           </button>
//         </div>
//         {show &&
//           students.map((item) => (
//             <li key={item.id}>
//               {/* {item.id} - {item.name} */}
//               <p>
//                 {item.id} - {item.name}
//               </p>
//               <button onClick={() => deleteStudent(item.id)} className="delete">
//                 Delete
//               </button>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }
//ตัวอย่าง ตอนที่22

import "./StudentList.css";
import Item from "./Item";
import { useState } from "react";

export default function StudentList(props) {
  const [show, setShow] = useState(true); //show detail
  const { students, deleteStudent } = props;
  //พื้นที่แสดงผล
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน = ({students.length})</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "hide" : "show"}
          </button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
}
