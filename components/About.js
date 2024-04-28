import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      // <div className="h-[100vh] min-h-screen pt-28 dark:text-[#e2e8f0]">
      //   <h1>About Us</h1>
      //   <h2>This is Foodylicious by Manish</h2>
      //   <UserClass
      //     name="Child1"
      //     location="Bangalore"
      //     contact="@bruce_wayne027"
      //   />
      // </div>
      <div className="min-h-screen pt-28 dark:text-[#e2e8f0]">
        <div className="relative m-auto flex w-5/6 flex-wrap text-[#02060c] dark:text-[#e2e8f0] lg:w-3/5">
          <div className="mb-4">
            <h1 className="pb-2 text-2xl font-bold">About Us</h1>
          </div>
        </div>

        <div className="-z-10 m-auto w-5/6 rounded-2xl p-2 shadow-lg  dark:bg-[#1e293b] md:p-4 lg:w-3/5 lg:p-6 xl:p-8">
          <div className="m-auto mb-4 mt-0 flex flex-wrap items-center justify-center rounded-2xl py-3 text-[#484949]  dark:text-[#e2e8f0]">
            <div className="mt-6 flex w-72 items-center justify-center rounded-2xl border-2 border-slate-200 bg-[#f7d3c2] p-2 text-lg font-bold text-[#ea624d] shadow-2xl dark:border-slate-400 dark:bg-slate-950 md:w-96">
              <p className="p-2 text-sm md:text-lg">
                This is Foodylicious by Manish
              </p>
            </div>
          </div>
        </div>
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
