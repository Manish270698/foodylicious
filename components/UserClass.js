import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name ," constrcutor");
  }

  componentDidMount(){
    console.log(this.props.name ," ComponentDidMount");
    const time = setInterval(()=>console.log("setInterval created"), 2000);
  }

  componentWillUnmount(){
    this.state.time;
  }

  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    console.log(this.props.name ," render");

    return (
      <div className="team-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
