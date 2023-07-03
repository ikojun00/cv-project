import React from "react";

const Overview = ( {data} ) => {
  console.log(data);
  return (
    <div className="cvPaper">
      <div className="header">
        <div className="headerName">
            <h1>{data.basicInfo.firstName} {data.basicInfo.lastName}</h1>
        </div>
        <div className="headerOther">
            <p>{data.basicInfo.email}</p>
            <p>{data.basicInfo.phone}</p>
            <p>{data.basicInfo.residence}</p>
        </div>
      </div>
      <h2>Work experience</h2>
      <hr />
      {data.workExperience.map((task) => (
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
      {data.education.map((task) => (
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
      {data.skills.map((task) => (
        <li key={task.id}>
            <p>{task.skill} - {task.achievedAt}</p>
        </li>
        ))}
      </ul>
      <br />
      <h2>Other skills and interests</h2>
      <hr />
      <p>Languages: {data.otherSkills.languages}</p>
      <p>Hobbies: {data.otherSkills.hobbies}</p>
    </div>
  );
};

export default Overview;