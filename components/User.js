const User = ({name, location, contact}) =>{
        return (
            <div className="team-card">
              <h2>Name: {name}</h2>
              <h3>Address: {location}</h3>
              <h4>Contact: {contact}</h4>
            </div>
          );
};

export default User;