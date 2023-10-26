import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.center}>
      <Link href="pokemon">
        <Image 
          src="/pokeapi_logo.png"
          width={257}
          height={103} 
          alt="pokeapi access"
        />
      </Link>
    </div>
  )
}
