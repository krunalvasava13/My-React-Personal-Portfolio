// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
 import newLogo from "./images/klogo.png"

// Hero Images (add your images to the /images directory with the same names)
//import HeroLight from "./images/hero-light.jpg";
//import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import todo from "./images/todo.png";
import counter from "./images/counter.png";
import portfolio from "./images/portfolio.png";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "krunalvasava13";

// Navbar Logo image
export const navLogo = newLogo;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
//export { HeroLight as Light };
//export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
 export const moreInfo = "";
//   "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-java" style={{ color: "red" }} className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:language-cpp" style={{ color: "red" }} className="display-4" />,
    name: "C/C++",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" style={{ color: "red" }} className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:springboot" style={{ color: "red" }} className="display-4" />,
    name: "Spring Boot",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" style={{ color: "red" }} className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="fa-solid:database" style={{ color: "red" }} className="display-4" />,
    name: "SQL",
  },
  {
    id: 7,
    skill: <Icon icon="mdi:language-html5" style={{ color: "red" }} className="display-4" />,
    name: "HTML5",
  },
  {
    id: 8,
    skill: <Icon icon="ion:logo-css3" style={{ color: "red" }} className="display-4" />,
    name: "CSS3",
  },
  {
    id: 9,
    skill: <Icon icon="cib:amazon-aws" style={{ color: "red" }} className="display-4" />,
    name: "AWS",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:microsoftazure" style={{ color: "red" }} className="display-4" />,
    name: "Azure Devops",
  },
  {
    id: 11,
    skill: <Icon icon="bi:git" style={{ color: "red" }} className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    skill: <Icon icon="fa6-brands:square-github" style={{ color: "red" }} className="display-4" />,
    name: "GitHub",
  },
];



// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/drive/folders/1JKr63RJck9j7tqgly56ZcrX6Typtk2l4?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["React-Counter-App", "FullStack-Todo-Application-Java-React", "My-React-Personal-Portfolio"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "React-Counter-App",
    image: counter,
    demo: "https://krunalvasava13.github.io/React-Counter-App/"
  },
  {
    name: "FullStack-Todo-Application-Java-React",
    image: todo,
  },
  {
    name: "My-React-Personal-Portfolio",
    image: portfolio
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
