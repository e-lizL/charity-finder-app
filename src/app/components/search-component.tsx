// "use client";
import React from 'react';
import styles from './search-component.module.scss';

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
  projectsData: IProject[],
  selectedName: string,
  setSelectedName: (value: string) => void,
  selectedContactCountry: string,
  setSelectedContactCountry: (value: string) => void,
  selectedProjectCountry: string,
  setSelectedProjectCountry: (value: string) => void,
  setShowCards: (value: boolean) => void,
}

export default function SelectComponent({
  projectsData,
  selectedName,
  setSelectedName,
  selectedContactCountry,
  setSelectedContactCountry,
  selectedProjectCountry,
  setSelectedProjectCountry,
  setShowCards,
}: ISelectComponent) {

  return (
    <>

      <div className={styles.choicesWrapper}>

        <div className={styles.selectWrapper}>
          <label htmlFor="title">Project Name:</label>
          <select
            value={selectedName}
            onChange={e => {setSelectedName(e.target.value), setShowCards(false)}}
            name="title"
            className={styles.select}
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
            className={styles.select}
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
            className={styles.select}
          >
            {projectsData && projectsData.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>

        <button onClick={() => setShowCards(true)} className={styles.button}>Show Projects</button>

      </div>

    </>
  )
}
