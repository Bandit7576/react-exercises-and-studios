import styles from './Description.module.css';
import React from 'react';

const  RecipeAuthor = () => {


   let authorLink = 'https://www.foodandwine.com/author/grant-achatz';
   let authorPhoto = 'https://www.foodandwine.com/thmb/aI9ephkTYeKaEynmggD3Yp9Thig=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Grant_Achatz-2000-6e7f9d7dbae7421385a179c40dfe0606.jpeg';
   let authorName = 'Grant Achatz';

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img
            src={authorPhoto}
            alt = {authorName}
            className={styles.imageUpdates}
            />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Author Bio</a> 
         </div>
      </div>
   );
    
}

class RecipeDescription extends React.Component {
   render() {
      return (
         <div> 
            <div>
               <h1>Beef Chili with Beans</h1>
               <p>"Chili means Halloween to me," Grant Achatz says.
                   When he was growing up, his mother would always serve it
                    to him and his cousins before they went trick or treating
                    as a way to counteract the sugar buzz to come. The smoky, 
                    spicy version here is a slightly modified version of his 
                    mother's chili, made with ancho, pasilla and chipotle powders, 
                    plus a homemade blend of seasonings and fresh herbs.</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;