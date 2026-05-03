export const personalInfo = {
    name: "Raj Shankar Kadam",
    role: "Software Developer | Full-Stack Engineer",
    tagline: "Building scalable web applications with React, Angular, Java & WordPress",
    email: "kadamraj623@gmail.com",
    phone: "(+91) 9321587317",
    location: "Mumbai, India",
    resumeUrl: "https://drive.google.com/file/d/1Kktj73P7YiXf9454lpJxUjAH-sTIH9I8/view",
};

export const socialLinks = {
    github: "https://github.com/rajkadam16",
    linkedin: "https://linkedin.com/in/raj-kadam03",
    leetcode: "https://leetcode.com/u/rajkadam16",
    instagram: "https://www.instagram.com/rajkadamm16/",
    twitter: "https://x.com/raj_kadam_03",
};

export const about = {
    shortBio: "Software Developer with expertise in building responsive web applications and WordPress solutions. Currently pursuing Master's in Computer Science while working full-time at ALFA KOP. I specialize in PHP, JavaScript, TypeScript, and modern web technologies, with a strong focus on performance optimization, SEO implementation, and creating scalable solutions.",
    journey: [
        "Currently working as Software Developer at ALFA KOP, developing WordPress themes and plugins for 5+ web properties",
        "Architected responsive mobile-first layouts and enhanced website performance by 25% through optimization techniques",
        "Deployed ML-powered resume screener with 85%+ accuracy on Render with MongoDB Atlas",
        "Published 20+ SEO-optimized technical blogs with keyword targeting and schema markup implementation",
        "Achieved GPA 9.20/10 and secured 1st Rank (Semester Topper) in Third Year at Mumbai University",
        "Solved 130+ DSA problems on LeetCode covering Arrays, Linked Lists, Stacks, Queues, and Trees",
    ],
};

export const skills = {
    frontend: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "React JS", level: 85 },
        { name: "Angular", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap", level: 88 },
        { name: "Tailwind CSS", level: 87 },
    ],
    backend: [
        { name: "PHP", level: 88 },
        { name: "Python", level: 82 },
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "JWT Authentication", level: 85 },
    ],
    tools: [
        { name: "WordPress", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL/SQL", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 88 },
        { name: "Docker", level: 75 },
    ],
};

export const projects = [
    {
        id: 1,
        title: "Property Rental System",
        description: "Full-featured property rental management platform enabling users to list, search, and manage properties",
        problem: "Property rental management was fragmented with no centralized system for managing listings, tenants, and applications efficiently",
        solution: "Developed a full-stack platform using Angular and Spring Boot with MongoDB, featuring secure JWT authentication, role-based access control, and optimized database queries",
        impact: "Successfully managing 200+ properties and 500+ user accounts with 30% faster query response times and 25% improved user engagement",
        techStack: ["Angular", "Spring Boot", "MongoDB", "REST API", "JWT", "Git"],
        image: "/projects/property-rental.jpg",
        liveUrl: "https://property-rental-demo.vercel.app",
        githubUrl: "https://github.com/rajkadam16/property-rental",
        featured: true,
    },
    {
        id: 4,
        title: "AI Resume Screening System",
        description: "ML-powered resume screening platform that automatically evaluates and ranks candidates against job descriptions",
        problem: "HR teams spent countless hours manually reviewing resumes, leading to inconsistent evaluations and missed qualified candidates",
        solution: "Built an AI-powered screening system using Python, Flask, XGBoost, and NLP to automatically analyze resumes, extract 20+ features, and rank candidates with fuzzy skill matching and TF-IDF vectorization",
        impact: "Reduced resume screening time by 60%, achieved 85%+ accuracy in candidate matching, deployed on Render with MongoDB Atlas and optimized with pre-compiled regex and Gunicorn multi-worker configuration",
        techStack: ["Python", "Flask", "XGBoost", "NLP", "TF-IDF", "MongoDB", "Machine Learning", "Render"],
        image: "/projects/ai-resume-screening.jpg",
        liveUrl: "https://resume-screening-ai-ekqc.onrender.com",
        githubUrl: "https://github.com/rajkadam16/Resume_Screening_AI",
        featured: true,
    },
    {
        id: 2,
        title: "Code Snippet Manager",
        description: "Real-time collaborative platform for managing and sharing code snippets with 600+ registered users",
        problem: "Developers needed a centralized platform to store, organize, and share code snippets efficiently with real-time collaboration features",
        solution: "Built a real-time collaborative platform using Angular and Firebase with authentication, Firestore for scalable operations, and Angular Material for responsive UI",
        impact: "Supporting 600+ registered users with 1000+ daily active users, 99.9% uptime, and 90% reduction in unauthorized access attempts",
        techStack: ["Angular", "Firebase", "TypeScript", "Angular Material", "Firestore", "Firebase Hosting"],
        image: "/projects/code-snippet.jpg",
        liveUrl: "https://code-snippet-manager.web.app",
        githubUrl: "https://github.com/rajkadam16/works/tree/main/CodeSnippit/my-app",
        featured: true,
    },
    {
        id: 3,
        title: "Expense Tracker & Analytics",
        description: "Full-stack expense management application with real-time analytics and interactive visualizations",
        problem: "Users needed an intuitive way to track daily expenses, categorize spending, and gain insights through visual analytics to improve financial management",
        solution: "Developed a comprehensive expense tracking system using Angular v16, Spring Boot, and MongoDB with interactive charts, category-based filtering, and monthly/yearly analytics dashboards",
        impact: "Enabled users to track 500+ expense entries per month with real-time chart updates, 40% improvement in expense categorization accuracy, and detailed spending insights",
        techStack: ["Angular v16", "Spring Boot", "MongoDB", "Chart.js", "REST API", "TypeScript"],
        image: "/projects/expense-tracker.jpg",
        liveUrl: "https://expense-tracker-demo.vercel.app",
        githubUrl: "https://github.com/rajkadam16/expense-tracker",
        featured: true,
    },

    {
        id: 5,
        title: "CS Corners Website Management",
        description: "WordPress-based educational website management with 50+ pages and comprehensive content administration",
        problem: "Educational website needed consistent content updates, media optimization, and SEO improvements while maintaining live production environment",
        solution: "Implemented systematic content management workflow using WordPress CMS, optimized 25+ media assets, and applied SEO-friendly practices",
        impact: "Managed 30+ content updates across 10+ courses, improving website structure, readability, and overall user experience",
        techStack: ["WordPress", "CMS", "SEO", "Content Management", "Image Optimization"],
        image: "/projects/cs-corners.jpg",
        liveUrl: "https://cscornersunitarai.com/",
        featured: true,
    },
    {
        id: 6,
        title: "Web Development Competition Winner",
        description: "Award-winning innovative and user-friendly web solution",
        problem: "Create an innovative web solution that demonstrates modern web development practices and exceptional user experience",
        solution: "Built a comprehensive web application showcasing responsive design, clean code practices, and intuitive user interface",
        impact: "Won 1st place in college-level web development competition, recognized for innovation and user-friendly design",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "/projects/competition.jpg",
        featured: false,
    },
];

export const experience = [
    {
        id: 1,
        company: "ALFA KOP Pvt Ltd",
        position: "Software Developer",
        duration: "April 2026 - Present",
        location: "Mumbai, India",
        description: [
            "Developed and customized WordPress themes and plugins using PHP, HTML, and CSS to meet specific business requirements",
            "Architected responsive, mobile-first layouts for 5+ web properties and enhanced website performance by 25% through media compression and lazy loading",
            "Applied on-page SEO best practices including structured data markup and metadata configuration",
            "Collaborated with cross-functional teams to deliver scalable, maintainable web solutions",
        ],
        technologies: ["WordPress", "PHP", "HTML/CSS", "SEO", "Plugin Development", "Performance Optimization"],
    },
    {
        id: 2,
        company: "VrikshaMitra Foundation",
        position: "WordPress Developer",
        duration: "January 2026 - March 2026",
        location: "Mumbai, India - Remote",
        description: [
            "Customized 10+ WordPress pages using Elementor with custom CSS overrides, strengthening UI consistency",
            "Reduced average navigation depth by 2 clicks for improved user flow",
            "Refactored media assets and page structure, reducing average page load time by 30%",
            "Improved Lighthouse performance scores significantly",
        ],
        technologies: ["WordPress", "Elementor", "CSS", "Performance Optimization", "UI Design"],
    },
    {
        id: 3,
        company: "CS Corners",
        position: "Web Developer",
        duration: "November 2025 - Present",
        location: "Mumbai, India - Remote",
        description: [
            "Developed and managed a 10+ page WordPress educational platform, executing 30+ layout and content updates",
            "Published 20+ SEO-optimized technical blogs with keyword targeting, meta descriptions, and internal linking",
            "Compressed 25+ media assets, implemented Schema.org structured data markup",
            "Enhanced page architecture, improving Core Web Vitals scores and search engine crawlability",
        ],
        technologies: ["WordPress", "SEO", "Content Management", "Schema Markup", "Image Optimization"],
    },
];

export const education = [
    {
        id: 1,
        institution: "Guru Nanak Khalsa College, Mumbai",
        degree: "Master of Computer Science",
        duration: "June 2025 - March 2027",
        grade: "Ongoing",
        achievements: [
            "Pursuing advanced studies in Computer Science",
            "Focus on advanced algorithms, system design, and software engineering",
        ],
    },
    {
        id: 2,
        institution: "Mumbai University",
        degree: "Bachelor of Science in Information Technology",
        duration: "June 2023 - March 2025",
        grade: "7.80/10 CGPA",
        achievements: [
            "Achieved GPA of 9.20/10 in the third year, fifth semester (Semester Topper)",
            "Secured 1st position in 3rd year, 5th semester among all peers",
            "Won 1st place in college-level web development competition (February 2023)",
        ],
    },
];

export const certifications = [
    {
        id: 1,
        name: "Namaste JavaScript | Advanced JavaScript Program",
        issuer: "Namaste JavaScript",
        date: "2024",
        credentialUrl: "https://drive.google.com/file/d/1hOnNzeTrWLcblApkEAKBDGqXiPCNjRQ1/view?usp=sharing",
        description: "In-depth study of JavaScript fundamentals including closures, hoisting, asynchronous behavior, event loop, and execution context",
    },
    {
        id: 2,
        name: "Solutions Architecture Job Simulation",
        issuer: "Forage",
        date: "August 4, 2025",
        credentialUrl: "https://drive.google.com/file/d/1n-9PVqdtScTQ4_eOCkiUhthkv0I9bwQq/view?usp=sharing",
        description: "Completed hands-on simulations focused on system design principles, architectural decision-making, and real-world business scenarios",
    },
    {
        id: 3,
        name: "Namaste DSA | Data Structures & Algorithms",
        issuer: "Namaste DSA",
        date: "2026",
        credentialUrl: "https://drive.google.com/file/d/1Eowp2lvWcgjwlSq7GqxXLxDxpoOOhuVU/view?usp=sharing",
        description: "Comprehensive coverage of Arrays, Linked Lists, Stacks, Queues, Trees, Recursion, Sorting, and Searching with problem-solving practice",
    },

    {
        id: 4,
        name: "LeetCode Problem Solving",
        issuer: "LeetCode",
        date: "Ongoing",
        credentialUrl: "https://leetcode.com/u/rajkadam16",
        description: "Solved 130+ DSA problems covering Arrays, Linked Lists, Stacks, Queues, Trees, Sorting, and Searching",
    },
];

export const coreCompetencies = [
    "API Fundamentals & Integration",
    "Responsive Web Design",
    "Web Architecture Basics",
    "Secure Coding Practices",
    "Authentication Basics (JWT)",
    "Database Fundamentals",
    "Version Control (Git Basics & Workflows)",
    "Agile & Scrum Fundamentals",
    "Microservices Basics",
    "Debugging & Troubleshooting",
    "Problem Solving",
    "Clean Code Practices",
    "Code Review & Collaboration",
    "Teamwork & Communication",
    "Time Management",
    "Adaptability",
];

export const achievements = [
    {
        id: 1,
        title: "Academic Excellence | GPA Achievement",
        date: "June 2024 - March 2025",
        description: "Achieved a GPA of 9.20/10 in the Bachelor of Science in Information Technology program, demonstrating consistent academic performance",
    },
    {
        id: 2,
        title: "Semester Topper | Mumbai University",
        date: "June 2024 - March 2025",
        description: "Secured 1st position in the 3rd year, 5th semester, recognized for outstanding academic results among peers",
    },
    {
        id: 3,
        title: "Web Development Competition | 1st Place Winner",
        date: "February 2023",
        description: "Won first place in a college-level web development competition for creating an innovative and user-friendly web solution",
    },
    {
        id: 4,
        title: "Data Structures & Algorithms Practice | LeetCode",
        date: "Ongoing",
        description: "Solved 130+ DSA problems on LeetCode, covering Arrays, Linked Lists, Stacks, Queues, Trees, Sorting, and Searching, strengthening problem-solving and algorithmic thinking skills",
    },
];

export const currentlyLearning = [
    {
        id: 1,
        title: "Advanced System Design",
        description: "Learning scalable architecture patterns and distributed systems",
        progress: 65,
        icon: "target" as const,
    },
    {
        id: 2,
        title: "Cloud Technologies (AWS)",
        description: "Expanding cloud infrastructure and deployment skills",
        progress: 50,
        icon: "star" as const,
    },
    {
        id: 3,
        title: "React & Next.js Advanced Patterns",
        description: "Mastering modern React patterns and Next.js features",
        progress: 75,
        icon: "trophy" as const,
    },
];

