import { FaCloud ,FaCode, FaDatabase, FaLightbulb, FaPaintBrush, FaReact, FaServer, FaStripe } from "react-icons/fa";
import profile from "./profile.png";
import about from "./about.jpeg";

export const assets = {
  profile,
  about
};

export const aboutInfo =[
    {
        icon: FaLightbulb,
        title: "Innovative",
        description: "I am a creative problem solver who is always looking for new and innovative ways to solve problems.",
        color: 'text-yellow-500'
    },
    {
        icon: FaPaintBrush, 
        title: "Design Oriented",
        description: "I have a keen eye for design and I am always looking for ways to improve the user experience.",
        color: 'text-pink-500'
    },
    {
        icon:FaCode,
        title: "Clean Code",
        description: "I write clean, maintainable code that is easy to read and understand.",
        color: 'text-blue-500'
    }
]

export const skills = [
    {
        title: "Frontend Development",
        icon:FaReact,
        description: "I have experience with React and Redux Toolkit for building dynamic and responsive user interfaces.",
        tags: ["React","Redux Toolkit","RTK Query"]
    },
    {
        title: "Backend Development",
        icon: FaServer,
        description: "I have experience with SpringBoot for building robust and scalable backend applications.",
        tags: ["SpringBoot", "Spring Security", "Spring Cloud gateway", "JWT Authentication", "Role-Based Access Control (RBAC)", "OAuth 2.1 Authorization"]
    },
    {
        title:"Database Management",
        icon: FaDatabase,
        description: "I have experience with MySQL and MongoDB for designing and managing databases for web applications.",
        tags: ["MySQL", "MongoDB"]
    },
    {
        title: "Cloud & DevOps",
        icon: FaCloud, 
        description: "Experience with cloud deployment and managing scalable applications.",
        tags: ["AWS EC2"]
    },
    {
        title: "Tools & Technologies",
        icon: FaCode,
        description: "I am proficient in various tools and technologies that enhance my development workflow.",
        tags: ["STS eclipse", "vite","VS Code", "Git", "GitHub", "Postman"]
    }
    
]

export const projects = [
    {
        title:"Staff Portal Course Managment System",
        // description: "A web application that allows staff members to manage courses and students. The application is built using React, springBoot, and MySQL.",
        description:" I have hands-on experience developing real-world projects such as a Tiffin Delivery and Management System and a Staff Portal Course Management System. Through these, I gained practical expertise in Spring Security, OAuth 2.1, JWT authentication, API Gateway, and Backend-for-Frontend (BFF) architecture.I enjoy solving complex problems, designing efficient systems, and writing clean, maintainable code while continuously improving my technical skills.",
        tech: ["React", "SpringBoot", "MySQL"],
        image: "src/assets/StaffPortalProjectImage.png",
        icons:[FaReact, FaServer, FaDatabase],
        demo:"#",
        code:"#"
    },
    {
        title: "Tiffin Delivary Management System",
        // description: "A web application that allows users to order tiffins online. The application is built using React, springBoot, and MySQL.",
        description:" I am a Full-Stack Developer with a strong foundation in Java, Spring Boot, and ReactJS, along with a Post Graduate Diploma in Advanced Computing (CDAC). I specialize in building scalable and secure applications using microservices architecture, RESTful APIs, and modern frontend technologies.",
        tech: ["React", "SpringBoot", "MySQL"],
        image: "src/assets/TiffinDeliveryProjectImage.jpg",
        icons:[FaReact, FaServer, FaDatabase,FaStripe],
        demo:"#",
        code:"#"
    }
]

export const internshipData = [
    {
        role: "Full Stack Developer",
        company: "Sunbeam Infotech pvt ltd, Hinjewadi, Pune",
        duration: "Jul 2025 - Aug 2025",
        description: "Worked on a project that involved developing a web application using React, springBoot and MySQL. I Gained valuable experience in backend development, frontend development and database management, collaborating with a team, and delivering a functional product.",
        color: 'text-purple-500'
    }
]
