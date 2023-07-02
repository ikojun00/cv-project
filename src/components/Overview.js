import React from "react";

const Overview = (props) => {
  console.log(props);
  return (
    <div className="cvPaper">
      <div className="header">
        <div className="headerName">
            <h1>{props.data.basicInfo.firstName} {props.data.basicInfo.lastName}</h1>
        </div>
        <div className="headerOther">
            <p>{props.data.basicInfo.email}</p>
            <p>{props.data.basicInfo.phone}</p>
            <p>{props.data.basicInfo.residence}</p>
        </div>
      </div>
      <h2>Work experience</h2>
      <hr />
      {props.data.workExperience.map((task) => (
        <div key={task.id}>
          <br />
          <strong>{task.company}</strong>
          <div className="workExperience">
            <p>{task.position}</p>
            <p>{task.startDate} - {task.endDate}</p>
          </div>
        </div>
        ))}
      <br />
      <h2>Education</h2>
      <hr />
      {props.data.education.map((task) => (
        <div key={task.id}>
          <div className="workExperience">
            <p>{task.university}</p>
            <p>{task.startDate} - {task.endDate}</p>
          </div>
        </div>
        ))}
      <br />
      <h2>Technical skills</h2>
      <hr />
      <ul>
      {props.data.skills.map((task) => (
        <li key={task.id}>
            <p>{task.skill} - {task.achievedAt}</p>
        </li>
        ))}
      </ul>
      <br />
      <h2>Other skills and interests</h2>
      <hr />
      <p>Languages: {props.data.otherSkills.languages}</p>
      <p>Hobbies: {props.data.otherSkills.hobbies}</p>
    </div>
  );
};

export default Overview;