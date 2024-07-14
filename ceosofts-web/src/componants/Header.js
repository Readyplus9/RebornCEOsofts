//วิธีที่1
// function Header() {
//   return <h1>CEO softs from file Header</h1>;
// }
// export default Header;

//วิธีที่2
// export default function Header() {
//   return <h1>CEO softs from file Header</h1>;
// }

// //วิธีที่3
// const Header = () => {
//   return <h1>CEO softs from file Header</h1>;
// };
// export default Header;

// //ตอนที่16
// import Logo from "../image/Slide5.JPG";
// import "./Header.css";

// export default function Header(props) {

//   return (
//     <nav>
//       <img src={Logo} alt="Slide4" className="logo"/>
//       <a href="/">{props.title}</a>
//     </nav>
//   );
// }

// //ตอนที่21
// import Logo from "../image/Slide5.JPG";
// import "./Header.css";

// export default function Header(props) {
//   const {title} = props
//   return (
//     <nav>
//       <img src={Logo} alt="Slide4" className="logo"/>
//       <a href="/">{title}</a>
//     </nav>
//   );
// }

//ตอนที่21
import Logo from "../image/Slide5.JPG";
import "./Header.css";

export default function Header({ title }) {
  return (
    <nav>
      <img src={Logo} alt="Slide4" className="logo" />
      <a href="/">{title}</a>
    </nav>
  );
}
