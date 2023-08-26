import React, { useEffect, useState } from "react";
import axios from "axios";
import "./teamcard.css";

const url = "http://localhost:9090/teams";

const TeamCard = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(false);
  const [toggler, setToggler] = useState(false);

  const deleteTeam = async (_id) => {
    const deleteUrl = `http://localhost:9090/team/delete/${_id}`;
    console.log(deleteUrl);
    try {
      await axios.delete(deleteUrl);
      setToggler(!toggler);
    } catch (error) {
      console.log("Cannot Delete.");
    }
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamList = await axios.get(url);
        console.log(teamList.data);
        setTeams(teamList.data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      }
    };
    fetchTeams();
  }, [toggler]);

  return (
    <>
      {error && <h1>Error on getting the data.</h1>}
      {!error &&
        teams.map(({ _id, name, logo, address, url, manager, coach }) => {
          return (
            <div key={_id} className="team-card">
              <h3>{name}</h3>
              <img src={logo} alt={name} />
              <h5>
                Address: <strong>{address}</strong>
              </h5>
              <h5>
                Website : <strong>{url}</strong>
              </h5>
              <h5>
                Manager : <strong>{manager}</strong>
              </h5>
              <h5>
                Coach : <strong>{coach}</strong>
              </h5>
              <button>View details</button>
              {/* <button onClick={() => deleteTeam(_id)}>Delete Team</button> */}
            </div>
          );
        })}
    </>
  );
};

export default TeamCard;
