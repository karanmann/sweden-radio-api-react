import { Link } from "react-router-dom";
import clickSound from '../../assets/click.wav'

let audio = new Audio(clickSound)
audio.volume = 0.3;
const playSound = () => {
  audio.play()
}

export const CustomButton = () => {
  return (
    <Link to="/">
      <div className="btn btn7" onClick={() => playSound()}>
        <h4>BACK</h4>
      </div>
    </Link>
  );
};
