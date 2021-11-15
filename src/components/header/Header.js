import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.info}>
        <span className={classes.text}>
          Still Bored? Click Here for <br /> Random Games
        </span>
        <a
          href="https://github.com/skhulbe75/games"
          target="_blank"
          rel="noreferrer"
          className={classes.links}
        >
          Code
        </a>
      </div>
      <button className={classes.btn} onClick={props.onGetGames}>
        Play
      </button>
    </header>
  );
};

export default Header;
