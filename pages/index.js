import dynamic from 'next/dynamic'
import Link from 'next/Link'
import styles from './index.module.scss'


const HelloBundle = (props) => {
  return (<div>
      <div className={styles.div}>
        name
        <div className='testclass'>first name</div>
        <Link href="/a">{props.stars}</Link>
      </div>
    </div>)
}

HelloBundle.getInitialProps = async ({ req }) => {
  const res = await new Promise((res, rej) => {res({json: 'malinshu'})})
  const json = await res.json()
  console.log('json', json);
  return { stars: json }
}

export default () => <HelloBundle>name</HelloBundle>
