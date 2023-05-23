"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './search-component'
const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;

export default function SelectComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.globalgiving.org/api/public/projectservice/featured/projects.json?api_key=${API_KEY}`;
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setProjectData(response.data.projects.project);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false)
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>

      <label htmlFor="title">Project Name:</label>
      <select name="title" id="title">
        {projectData.map(item => (
          <option
            value={item.title}
            key={item.id}
          >
            {item.title}
          </option>
        ))}
      </select>

      <label htmlFor="contactCountry">Contact Country:</label>
      <select name="contactCountry" id="contactCountry">
        {projectData.map(item => (
          <option
            value={item.contactCountry}
            key={item.id}
          >
            {item.contactCountry}
          </option>
        ))}
      </select>

      <label htmlFor="country">Project Target Country:</label>
      <select name="country" id="country">
        {projectData.map(item => (
          <option
            value={item.country}
            key={item.id}
          >
            {item.country}
          </option>
        ))}
      </select>

    </div>
  )
}
