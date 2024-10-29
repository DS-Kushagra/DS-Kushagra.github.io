import React from "react";

const skillsData = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
  },
  {
    src: "Power.png",
    alt: "Java",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    alt: "NumPy",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*RWkQ0Fziw792xa0S",
    alt: "Pandas",
  },
  {
    src: "https://matplotlib.org/_static/logo2_compressed.svg",
    alt: "Matplotlib",
  },
  {
    src: "https://seaborn.pydata.org/_images/logo-wide-lightbg.svg",
    alt: "Seaborn",
  },
  {
    src: "https://banner2.cleanpng.com/20180614/bgj/aa7ffc9id.webp",
    alt: "MySQL",
  },
  {
    src: "https://img.freepik.com/premium-vector/microsoft-excel-logo-spreadsheet-program-microsoft-office-365-logotype-microsoft-corporation-software-editorial_661108-17045.jpg?w=740",
    alt: "Microsoft Excel",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    alt: "GitHub",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5143/5143301.png",
    alt: "",
  },
  {
    src: "https://thumbs.dreamstime.com/z/statistics-linear-icon-modern-outline-logo-concept-o-white-background-business-analytics-collection-suitable-use-133515482.jpg?w=768",
    alt: "Statistics",
  },
  {
    src: "probability.jpg",
    alt: "Probability",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/8920/8920975.png",
    alt: "",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    alt: "Tensorflow",
  },
  {
    src: "scikit-learn.png",
    alt: "Scikitlearn",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-15 bg-black-gradient text-white">
      <h1 className="heading mb-10">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg transform transition duration-320 hover:scale-120"
          >
            <img src={skill.src} alt={skill.alt} className="w-2/3 h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
