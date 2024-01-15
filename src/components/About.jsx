import { useState } from "react";
import bannerImage from "../assets/sp1.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Full Stack Developer",
    desc1: ` Full Stack Developer with a passion for building dynamic and user-friendly web applications. My journey in the world of software development began with a fascination for creating solutions that blend creativity with functionality.`,
    desc2: ` In my career, I've delved into the intricacies of web development, focusing on technologies such as React.js and Node.js. I've had the privilege of working on diverse projects, each presenting unique challenges that I've enthusiastically tackled. My commitment to delivering high-quality code and exceptional user experiences has been a driving force in my professional journey.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
