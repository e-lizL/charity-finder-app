import styles from './cards.module.scss';
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
  },
}

interface ICards {
  projectsData: IProject[],
  selectedName: string,
  setSelectedName: (value: string) => void,
  selectedContactCountry: string,
  setSelectedContactCountry: (value: string) => void,
  selectedProjectCountry: string,
  setSelectedProjectCountry: (value: string) => void,
  showCards: boolean,
}

export default function Cards({
  projectsData,
  selectedName,
  showCards,
}: ICards) {

  console.log(showCards)

  return (
    <>
      <div className={styles.wrapper}>
        {projectsData && showCards && projectsData.map(item => {
          if (item.title === selectedName) {
            return (
              <div className={styles.card} key={item.id} >
                <h1>Chosen Project</h1>
                <Image
                  src={item.image.imagelink[2].url}
                  alt={`${item.title} image`}
                  width={500}
                  height={500}
                  className={styles.image}
                />
                <div className={styles.textWrapper}>
                  <a href={item.projectLink} className={styles.title}>{item.title}</a>
                  <div>{item.contactAddress}</div>
                  <div>id: {item.id}</div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <h1>All Projects:</h1>
      <div className={styles.wrapper}>
        {projectsData && projectsData.map(item => {
          return (
            <div className={styles.card} key={item.id} >
              <Image
                src={item.image.imagelink[2].url}
                alt={`${item.title} image`}
                width={500}
                height={500}
                className={styles.image}
              />
              <div className={styles.textWrapper}>
                <a href={item.projectLink} className={styles.title}>{item.title}</a>
                <div>{item.contactAddress}</div>
                <div>id: {item.id}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
const array = [1, 2, 3, 4, 5];

const newArray = array.map(num => num % 2 === 0 ? num * 2 : num * 3);

console.log(newArray); // [3, 4, 9, 8, 15]

