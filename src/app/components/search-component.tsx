"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './search-component.module.css'

interface IProject {
  title: string,
  contactCountry: string,
  country: string,
  id: number,
  contactAddress: string,
  projectLink: string,
  imageLink: string
}

export default function SelectComponent() {

  const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [projectsData, setProjectsData] = useState<IProject[]>([]);

  console.log(projectsData[0].imageLink);

  useEffect(() => {
    const apiUrl = `https://api.globalgiving.org/api/public/projectservice/featured/projects.json?api_key=${API_KEY}`;
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setProjectsData(response.data.projects.project);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false)
    };
    getData();
  }, []);

  return (
    <>
      {isLoading && (<div>loading...</div>)}
      <div className={styles.container}>
        <div className={styles.selectWrapper}>
          <label htmlFor="title">Project Name:</label>
          <select name="title" id="title">
            {projectsData && projectsData.map(item => (
              <option
                value={item.title}
                key={item.id}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="contactCountry">Contact Country:</label>
          <select name="contactCountry" id="contactCountry">
            {projectsData && projectsData.map(item => (
              <option
                value={item.contactCountry}
                key={item.id}
              >
                {item.contactCountry}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="country">Project Target Country:</label>
          <select name="country" id="country">
            {projectsData && projectsData.map(item => (
              <option
                value={item.country}
                key={item.id}
              >
                {item.country}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.button}>Search</button>

        {projectsData && projectsData.map(item => (
          <div key={item.id} >
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.contactAddress}</div>
            <div>{item.projectLink}</div>
            <div>{item.imageLink}</div>
          </div>
        ))}

      </div>
    </>
  )
}
