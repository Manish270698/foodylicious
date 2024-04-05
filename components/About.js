import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent render");

    return (
      <div className="h-[100vh] dark:text-[#e2e8f0] pt-28">
        <h1>About Us</h1>
        <h2>This is Namaste React by Manish</h2>
        <UserClass
          name="Child1"
          location="Bangalore"
          contact="@bruce_wayne027"
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React by Manish</h2>
//       <UserClass
//         name="Manish Kumar"
//         location="Bangalore"
//         contact="@bruce_wayne027"
//       />
//     </div>
//   );
// };

export default About;
