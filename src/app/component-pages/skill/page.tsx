import Image from "next/image";
import html from "../../../../public/html-icon-3d-rendering-illustration-vector (1).jpg"
import css from "../../../../public/css.png"
import typescript from "../../../../public/typescript.png"
import next_js from "../../../../public/nextjs.png"

const Data = [
  {
    title: "HTML",
    description: "HTML (HyperText Markup Language)",
    image: html,
  },
  {
    title: "CSS",
    description: "CSS is used to define styles for your web pages.",
    image: css,
  },
  {
    title: "Typescript",
    description: "TypeScript allows specifying the types of data being passed around within the code.",
    image: typescript,
  },
  {
    title: "Next.js",
    description: "Next.js is a React framework that helps developers build web applications.",
    image: next_js,
  },
];

export default function Skills() {
  return (
    <main className='main'>
      <div className="container">
        {Data.map((data, index) => (
          <div key={index} className="card">
            <Image
              src={data.image}
              alt={data.title}
              className="image"
              width={300}
              height={300}
            />
            <div className="cardHeader">{data.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
