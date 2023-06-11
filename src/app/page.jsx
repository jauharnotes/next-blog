import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Better design for your digital products.</h2>
        <p>Turing your Idea into Reality. We bring together the teams from the global tech insustry.</p>
        <button>See Our Works</button>
      </div>
      <Image src={Hero} alt='' className={styles.img}/>
    </div>
  )
}
