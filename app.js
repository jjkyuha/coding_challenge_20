// U76798924

import React, { useState } from 'react';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [objective, setObjective] = useState('');

  const [education, setEducation] = useState([{ title: '', details: '' }]);

  const [workExperience, setWorkExperience] = useState([{ title: '', details: '' }]);

  const [skills, setSkills] = useState(['']);

  const [references, setReferences] = useState([{ name: '', contactInfo: '' }]);

  const handleInputChange = (index, event, section) => {
    const { name, value } = event.target;
    const list = [...section];
    list[index][name] = value;
    if (name === 'name' || name === 'contactInfo') {
      list[index][name] = value;
    } else {
      list[index][name] = value;
    }
    if (section === education) {
      setEducation(list);
    } else if (section === workExperience) {
      setWorkExperience(list);
    } else if (section === skills) {
      setSkills(list);
    } else {
      setReferences(list);
    }
  };

  const handleAddFields = (section) => {
    if (section === education) {
      setEducation([...education, { title: '', details: '' }]);
    } else if (section === workExperience) {
      setWorkExperience([...workExperience, { title: '', details: '' }]);
    } else {
      setSkills([...skills, '']);
    }
  };

  const handleRemoveFields = (index, section) => {
    const list = [...section];
    list.splice(index, 1);
    if (section === education) {
      setEducation(list);
    } else if (section === workExperience) {
      setWorkExperience(list);
    } else {
      setSkills(list);
    }
  };

  return (
    <div className="App">
      <h1>Resume Form</h1>
      <form>
        <h2>Personal Information</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
          />
        </label>

        <h2>Objective</h2>
        <textarea
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        ></textarea>

        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              name="title"
              value={edu.title}
              placeholder="Title"
              onChange={(e) => handleInputChange(index, e, education)}
            />
            <input
              type="text"
              name="details"
              value={edu.details}
              placeholder="Details"
              onChange={(e) => handleInputChange(index, e, education)}
            />
            <button type="button" onClick={() => handleRemoveFields(index, education)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(education)}>
          Add Education
        </button>

        <h2>Work Experience</h2>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              name="title"
              value={exp.title}
              placeholder="Title"
              onChange={(e) => handleInputChange(index, e, workExperience)}
            />
            <input
              type="text"
              name="details"
              value={exp.details}
              placeholder="Details"
              onChange={(e) => handleInputChange(index, e, workExperience)}
            />
            <button type="button" onClick={() => handleRemoveFields(index, workExperience)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(workExperience)}>
          Add Work Experience
        </button>

        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => {
                const list = [...skills];
                list[index] = e.target.value;
                setSkills(list);
              }}
            />
            <button type="button" onClick={() => handleRemoveFields(index, skills)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(skills)}>
          Add Skill
        </button>

        <h2>References</h2>
        {references.map((ref, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={ref.name}
              placeholder="Name"
              onChange={(e) => handleInputChange(index, e, references)}
            />
            <input
              type="text"
              name="contactInfo"
              value={ref.contactInfo}
              placeholder="Contact Information"
              onChange={(e) => handleInputChange(index, e, references)}
            />
            <button type="button" onClick={() => handleRemoveFields(index, references)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(references)}>
          Add Reference
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
