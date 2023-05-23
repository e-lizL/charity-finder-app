import styles from './cards.module.css';
import Image from 'next/image';

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
  image: {
    imagelink: IUrl[]
  }
}

interface ICards {
  projectsData: IProject[];
}

export default function Cards({ projectsData }: ICards) {

  console.log(projectsData[0].image)

  return (
    <div className={styles.wrapper}>
      {projectsData && projectsData.map(item => (
        <div className={styles.card} key={item.id} >
          <Image
            src={item.image.imagelink[2].url}
            alt={`${item.title} image`}
            width={500}
            height={500}
            className={styles.image}
          />
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.contactAddress}</div>
          {/* <div>{item.projectLink}</div> */}
        </div>
      ))}
    </div>
  )
}