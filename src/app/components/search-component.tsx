"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  return (
    <>

      <div className={styles.choicesWrapper}>

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

      </div>

    </>
  )
}
