import "./style.scss";
import * as pkg from "../package.json";

const nextStreamDate = new Date(pkg.nextStream).getTime();

const setTime = () => {
  const now = new Date().getTime();

  const countdown = nextStreamDate - now;
  const timeRemaining = {
    days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
    hours: Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  };
  Object.keys(timeRemaining).forEach(key => {
    document.querySelector(`.countdown__${key}`).innerHTML = timeRemaining[key];
  });
};
setTime();
setInterval(setTime, 60 * 1000);
