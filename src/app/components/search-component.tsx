"use client";
import React, { useState } from 'react';
import styles from './search-component.module.css';

interface IProject {
  title: string,
  contactCountry: string,
  country: string,
  id: number,
  contactAddress: string,
  projectLink: string,
  imageLink: string
}

interface ISelectComponent {
  projectsData: IProject[];
}

export default function SelectComponent({ projectsData }: ISelectComponent) {
  const [selectedName, setSelectedName] = useState("");
  const [selectedContactCountry, setSelectedContactCountry] = useState("");
  const [selectedProjectCountry, setSelectedProjectCountry] = useState("");

  console.log(selectedProjectCountry)

  return (
    <>

      <div className={styles.choicesWrapper}>

        <div className={styles.selectWrapper}>
          <label htmlFor="title">Project Name:</label>
          <select
            value={selectedName}
            onChange={e => setSelectedName(e.target.value)}
            name="title"
          >
            {projectsData && projectsData.map(item => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="contactCountry">Contact Country:</label>
          <select
            value={selectedContactCountry}
            onChange={e => setSelectedContactCountry(e.target.value)}
            name="contactCountry"
          >
            {projectsData && projectsData.map(item => (
              <option key={item.id} value={item.contactCountry}>
                {item.contactCountry}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="projectCountry">Project Target Country:</label>
          <select
            value={selectedProjectCountry}
            onChange={e => setSelectedProjectCountry(e.target.value)}
            name="projectCountry"
          >
            {projectsData && projectsData.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.button}>Search</button>

      </div>

    </>
  )
}
