import Image from "next/image";
import calculator from "../../../../public/calculator.jpg";
import todolist from "../../../../public/todolist.png";
import quiz from "../../../../public/bvt06d5d.png";
import adventure from "../../../../public/pngtree-adventure-game-in-3d-iconic-style-picture-image_4047388.jpg";
import countdown from "../../../../public/countdowntimer.png";
import numberGuessing from "../../../../public/images (1).jpeg";


const data1 = [
  { title: "Calculator", contact: "npm i qs-calculator", image: calculator },
  { title: "TODO List", contact: "npm i todo-list-qs", image: todolist },
  { title: "Quiz APP", contact: "npm i ts-quiz-qs", image: quiz },
];

const data2 = [
  { title: "Countdown Timer", contact: "npm i count-down-qs", image: countdown },
  { title: "Adventure Game", contact: "npm i adventure_game-qs", image: adventure },
  { title: "Number Guessing", contact: "npm i cli-number-guessing-game-by-qs", image: numberGuessing },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="cardRow">
        {data1.map((data, index) => (
          <div key={index} className="card">
            <Image src={data.image} alt={data.title} className="image" />
            <h3 className="title">{data.title}</h3>
            <p className="contact">{data.contact}</p>
          </div>
        ))}
      </div>
      <div className="cardRow">
        {data2.map((data, index) => (
          <div key={index} className="card">
            <Image src={data.image} alt={data.title} className="image" />
            <h3 className="title">{data.title}</h3>
            <p className="contact">{data.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
