//ตัวอย่าง ตอนที่15
import { useState } from "react";
//วิธีที่2
export default function StudentList() {
  //สร้าง state
  const [students, setStudent] = useState([
    { id: 1, name: "yai" },
    { id: 2, name: "kem" },
    { id: 3, name: "nuch" },
    { id: 4, name: "yai" },
  ]);
  const [show, setShow] = useState(true); //show detail

  function deleteStudent(id) {
    // console.log(id);
    setStudent(students.filter((item) => item.id !== id));
  }

  //พื้นที่แสดงผล
  return (
    <>
      <h1>จำนวนนักเรียน = {students.length}</h1>
      {/* <h2>{show}</h2> */}
      <button onClick={() => setShow(!show)}>สลับ</button>
      <ul>
        {show &&
          students.map((item) => (
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
