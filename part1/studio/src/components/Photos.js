import styles from './Description.module.css';
 
 export default const RecipePhoto = () => {
    return (
        <img 
            src="valid URL to recipe photo"
            alt="recipe photo" 
            className = {styles.imageUpdates}
         />
    );
}