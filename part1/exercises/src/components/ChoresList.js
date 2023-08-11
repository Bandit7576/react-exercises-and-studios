import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Mow Lawn", "Dishes", "Laundry"];
   return   (   
      <div>
         <h3 className = {classes.choresHeading}>Movies I Watched This Month</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>


         </ol>
      </div>
      );

}