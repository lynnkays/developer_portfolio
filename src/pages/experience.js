import React, { useState } from "react"
import "../styles/global.scss"

const Experience = () => {
  const experience = [
    {
      pk: 0,
      title: "ESG Engineering Intern",
      company: "NetApp",
      dateStarted: "May 2021",
      dateEnded: "August 2021",
      description: [
        "Learned basic data storage and networking principles",
        "Hands on experience with Kubernetes and Docker",
        "Implemented new data transfer feature from S3 bucket to various data storage systems",
      ],
    },

    {
      pk: 1,
      title: "Frontend Developer",
      company: "Ennovar",
      dateStarted: "December 2020",
      dateEnded: "May 2021",
      description: [
        "Developed and Resolved Bugs in React Application",
        "Collaborated with team in bi-weekly sprints",
        "Worked with Jira, Bitbucket and Jenkins",
        "Designed new Dashboard Feature",
      ],
    },
    {
      pk: 2,
      title: "IT Intern",
      company: "Weigand",
      dateStarted: "March 2020",
      dateEnded: "February 2021",
      description: [
        "Evaluated current network share structure and created plan to migrate data to the cloud",
        "Implemented new CRM for real estate agents",
        "Automated the creation of email signatures for all employees",
        "Implemented Office products including two factor authentication for all employees",
      ],
    },
    {
      pk: 3,
      title: "Lead Student Engineer",
      company: "Ennovar",
      dateStarted: "June 2019",
      dateEnded: "January 2020",
      description: [
        "Finished database React application",
        "Participated as Scrum Master for other students in the team",
        "Interviewed and Onboarded new students",
        "Participated in email migration from on premise to the cloud",
      ],
    },
  ]
  const [toggleState, setToggleState] = useState(0)

  const tabs = experience.map(job => (
    <button
      className={toggleState === job.pk ? "tabs tab-selected" : "tabs"}
      onClick={() => toggleTab(job.pk)}
    >
      {job.company}
    </button>
  ))

  const content = experience.map(job => (
    <div
      className={toggleState === job.pk ? "content  active-content" : "content"}
    >
      <h4>
        {job.title} @ {job.company}
      </h4>
      <p>
        {job.dateStarted} - {job.dateEnded}
      </p>
      <ul>
        {job.description.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  ))

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <div className="block" id="experience">
      <h2>Experience</h2>
      <div className="experience-menu">
        <div className="tab-column">{tabs}</div>
        <div className="content-column">{content}</div>
      </div>
    </div>
  )
}

export default Experience
