"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './search-component.module.css';
import Cards from './cards';
import SearchComponent from './search-component';

interface IUrl {
  url: string
}

interface IProject {
  title: string,
  contactCountry: string,
  country: string,
  id: number,
  contactAddress: string,
  projectLink: string,
  imageLink: string,
  image: {
    imagelink: IUrl[]
  },
}

export default function MainContent() {
  const API_KEY = process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [projectsData, setProjectsData] = useState<IProject[]>([]);

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
  }, [API_KEY]);

  return (
    <>
      {isLoading && (<div>loading...</div>)}
      <div className={styles.container}>

        <SearchComponent projectsData={projectsData} />

        <Cards projectsData={projectsData}/>

      </div>
    </>
  )
}
