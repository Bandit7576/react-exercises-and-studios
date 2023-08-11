import styles from './Description.module.css';
 
const RecipePhoto = () => {
    return (
        <img src="https://www.foodandwine.com/thmb/_ks_i7WKa-aXnRfvdPB3sWSu8w4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200612-r-xl-beef-chili-with-beans-2000-328aae47a75944d2a214d0d9a4db8a45.jpg" 
        alt="Bowl of chilli" 
        className={styles.imageUpdates}
        />
    );
}
export default RecipePhoto;