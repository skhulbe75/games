import classes from './GamesLoading.module.css';

const GamesLoadng = props =>{

    return(
        <div className={classes["frame-container"]}>
            <iframe className={classes.frame}
                src={props.games}
                allow="accelerometer; gyroscope;"
                scrolling="no">
             </iframe>
        </div>
    )
}

export default GamesLoadng;