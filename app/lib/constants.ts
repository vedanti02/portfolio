import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiCode,
    FiLayers,
    FiSmartphone,
    FiDatabase,
    FiCpu
} from 'react-icons/fi'
import { FaReact, FaNodeJs, FaJava, FaWindows, FaSchool } from 'react-icons/fa'
import * as i from 'react-icons/si'

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Education', href: 'education' },
    { name: 'Testimonial', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vedanti02', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vedanti-kshirsagar/', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:vedantikshirsagar.work@gmail.com', icon: FiMail },
]

export const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'C++', icon:  i.SiCplusplusbuilder},
    { name: 'Python', icon: i.SiPython },
    { name: 'Angular', icon: i.SiAngular },
    { name: 'React', icon: FaReact },
    { name: 'TypeScript', icon: i.SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'SQL', icon: i.SiSqlite },
    { name: 'Powershell', icon: FaWindows },
    { name: 'Linux', icon: i.SiLinux },
    { name: 'Kibana', icon: i.SiKibana },
    { name: 'Langchain', icon: i.SiLangchain },
    { name: 'AWS', icon: i.SiAwslambda },
    { name: 'Git', icon: i.SiGit }
]

export const projects = [
    {
        name: 'AI Marketing Assistant', 
        image: '/images/panda.png',
        description: 'Automatically generates, manages, and publishes blog content based on data from in-house sources',
        technologies: ['Langchain', 'LLMs', 'Slack', 'Python'],
        githubUrl: 'https://github.com/vedanti02/ai-blog-generator',
    },
    {
        name: 'Diagnostica',
        image: '/images/diagnostica.png',
        description: 'Medical assistant here to help in case of emergencies, provide symptoms based diagnostic suggestions',
        technologies: ['Python', 'Flutter', 'Machine learning'],
        githubUrl: 'https://github.com/vedanti02/diagnostica',
    },
    {
        name: 'Carbon Footprint Tracker',
        image: '/images/cft.png',
        description: 'Track your carbon footprint with a clear breakdown of monthly footprint, calculations, and real-time tracking.',
        technologies: ['React.js', 'Redux', 'React Hooks', 'Firebase'],
        githubUrl: 'https://github.com/vedanti02/cftracker',
    }
]

export const testimonials = [
    {
        name: 'Anshuli Misar',
        role: 'Vice President at Goldman Sachs',
        quote: 'Vedanti possesses a rare combination of technical expertise, innovative thinking, and leadership qualities that made her a valuable asset of the team in the past 2 years. Her contributions have left an indelible mark on our organization, and I am confident that she will bring the same level of excellence and innovation'
    },
    {
        name: 'Chandan',
        role: 'Vice President at Goldman Sachs',
        quote: 'Working with Vedanti was a pleasure. His attention to detail and problem-solving skills are top-notch.'
    },
    {
        name: 'Bhavya Sheth',
        role: 'Associate Developer at Goldman Sachs',
        quote: 'Working with Vedanti has been an absolute pleasure. She brings strong technical skills, approaches problems with clarity, and always follows through. What stands out most is her teamwork—she listens, collaborates openly, and lifts the whole group. Vedanti is reliable and supportive.'
    }
]
export const education = [
    {
        col: 'Carnegie Mellon University',
        course: 'Masters in Information Systems Management',
        time: 'August 2025 - December 2026',
        description: [
            'Relevant CourseWork: Database Management Systems, Object Oriented Programming in Java, Statistics',
        ],
        icon: FaSchool
    },
    {
        col: 'Veermata Jijabai Technological Institute, Bombay',
        course: 'Bachelor of Technology in Computer Engineering',
        time: 'August 2019 - June 2023',
        description: [
            'Relevant Courses:  Data Structures and Algorithms, Cloud Computing, Machine Learning, Artificial Intelligence, Data Mining'
        ],
        icon: FaSchool
    },
]

export const experiences = [
    {
        organisation: 'Panda Money',
        title: 'AI Engineering Intern',
        time: 'July 2025 - August 2025',
        description: [
            'Engineered an AI-powered blog generation bot using RAG-based LLMs and vector databases, automating blog creation and publishing saving 6 hours of manual effort daily.',
            'Integrated data pipelines with Slack and Confluence, enabling automatic database updates and content publishing without manual intervention.',
            'Built a context-aware Slack chatbot with in-chat admin commands, streamlining knowledge retrieval for 20+ users and boosting content creation velocity 3x.'
        ],
        image: '/images/panda-logo.png'
    },
    {
        organisation: 'Goldman Sachs',
        title: 'Software Engineer I (Analyst)',
        time: 'July 2023 - July 2025',
        description: [
            'Led end-to-end enhancement of a notification delivery system (toast/email) by adopting monitoring and evaluation methods, scaling the application to 40K+ users with 100K+ daily API calls, while improving reliability and performance.',
            'Integrated a secure authentication framework and a people search microservice for an enterprise productivity tool, improving accessibility and usability for 55K+ users with 2.3M daily hits, while ensuring compliance with security standards.',
            'Designed, developed, and scaled a desktop environment bootstrapping application that automated application initialization and task scheduling, streamlining setup processes and driving adoption by 15K+ active users firm-wide.',
            'Implemented a business tool for interactive user guides, enabling 12+ teams across the firm to build application-specific walkthroughs; collaborated directly with end users to refine features and enhance product adoption.'
        ],
        image: '/images/goldman.png'
    },
    {
        organisation: 'Veermata Jijabai Technological Institute, Bombay',
        title: 'Undergraduate Research Intern',
        time: 'July 2022 - July 2023',
        description: [
            'Designed and implemented a novel Hybrid Sampling Method for Intrusion Detection (HSMID) to address the class imbalance problem in network security datasets.',
            'Engineered a data sampling approach that converts tabular network data into image data to leverage the efficiency of Auxiliary Classifier Generative Adversarial Networks (ACGANs) for oversampling the minority (attack) class.',
            'Enhanced the GANs model by incorporating a custom loss function to provide a more comprehensive evaluation metric and improve the generator’s ability to capture the underlying statistical properties of the data.',
            'Achieved a significant improvement in accuracy by training a custom Convolutional Neural Network (CNN) model on the re-balanced dataset. The proposed method outperformed alternative baselines, resulting in a 3.41% increase in accuracy over the original data and higher accuracy than other known methods like SMOTE and GANs-based approaches',
        ],
        image: '/images/vjti.png'
    },
    {
        organisation: 'Goldman Sachs',
        title: 'Software Engineering Intern',
        time: 'May 2022 - July 2022',
        description: [
            'Engineered an end-to-end proof-of-concept application within M365 Teams, a project designed to enhance on-site collaboration and data collection for over 50,000 users.',
            'Conducted comprehensive technical research into M365 Graph APIs and Teams Toolkit to enable secure in-app audio, video, and image capture with location services.',
            'Authored detailed design and architecture documentation for the application\'s implementation and eventual rollout, showcasing a scalable and secure solution for the organization.'
        ],
        image: '/images/goldman.png'
    },
    {
        organisation: 'Indian Institute of Technology, Bombay',
        title: 'IT Research Intern',
        time: 'October 2021 - January 2022',
        description: [
            'Researched, designed, and engineered an adaptive assessment platform that generated personalized Cognitive and Aptitude Quotient Reports from 50+ standardized quizzes, enabling tailored learning paths for 1,000+ students and providing actionable insights for educators and parents.',
            'Developed data-driven evaluation and visualization tools that automated grading, progress tracking, and reporting workflows, reducing 3 hours manual effort, cutting evaluation time from hours to minutes, and improving student engagement and measurable learning outcomes.'
        ],
        image: '/images/iitb.png'
    },
]