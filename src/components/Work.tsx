import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "ML Student Performance Analysis",
    category: "Machine Learning / Data Science",
    tools: "Python, Pandas, NumPy, Matplotlib, Scikit-learn, SQL",
    description: "Developed a predictive ML system analyzing student academic performance factors, performing data preprocessing and visualization.",
    image: "/images/student_performance.png",
  },
  {
    num: "02",
    title: "Pharmacy Supply Management",
    category: "Software & Inventory Platform",
    tools: "Python, Java, SQL, MySQL, HTML, CSS, JavaScript",
    description: "Built a real-time stock monitoring and supplier coordination system with automated inventory management.",
    image: "/images/pharmacy_supply.png",
  },
  {
    num: "03",
    title: "Multistock Logistics Platform",
    category: "Unified Storage & Stock Management",
    tools: "Python, Java, SQL, HTML, CSS, JavaScript",
    description: "Unified rental and inventory platform featuring item tracking, warehouse allocation, alerts, and transaction logs.",
    image: "/images/multistock_logistics.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools & Technologies</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.4" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
