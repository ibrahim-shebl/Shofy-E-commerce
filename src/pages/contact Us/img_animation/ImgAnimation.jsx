import styles from '../contact.module.css'
import landing from '../../../assets/contact.webp'
const ImgAnimation = () => {
  return (
      <div className={`${styles.image} `}>
        <img className='md:mr-5 lg:mr-24 xl:mr-0 mr-0 ' src={landing} alt="" />
      </div>
  )
}

export default ImgAnimation