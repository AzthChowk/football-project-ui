import React from "react";
import TeamCard from "../../components/Team/TeamCard";
import "../../styles/teams.css";

const Teams = () => {
  return (
    <div className="container teams-page">
      <div className="teams-page-header">
        <h1>Teams</h1>
      </div>
      <div className="team-grid">
        <TeamCard />
      </div>
    </div>
  );
};

export default Teams;
