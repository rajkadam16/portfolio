// ============================================================================
// RESUME DATA — Edit this file to update all content across the site.
// No need to touch any component files.
// ============================================================================

export const personalInfo = {
  name: "Raj Kadam",
  fullName: "Raj Shankar Kadam",
  role: "Software Developer",
  tagline: "Full-Stack Engineer",
  headline: "Building scalable web applications with React, Angular, Java & WordPress",
  email: "kadamraj623@gmail.com",
  phone: "(+91) 9321587317",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  resumeUrl: "https://drive.google.com/file/d/1H46aOJcTM-j8o-uTJCpboUIOoTlNlmNa/view?usp=sharing",
  availability: "Open to work",
  // Drop your portrait image in /public/portrait.webp and set "/portrait.webp" here
  portraitUrl: "",
  portraitCaption: "FIG. 01 — MUMBAI, IN",
};

export const socialLinks = {
  github: "https://github.com/rajkadam16",
  linkedin: "https://linkedin.com/in/raj-kadam03",
  leetcode: "https://leetcode.com/u/rajkadam16",
  instagram: "https://www.instagram.com/rajkadamm16/",
  twitter: "https://x.com/raj_kadam_03",
};

export const about = {
  statement:
    "Software Developer with expertise in building responsive web applications and WordPress solutions. Currently pursuing Master's in Computer Science while working full-time at ALFA KOP. I specialize in PHP, JavaScript, TypeScript, and modern web technologies, with a strong focus on performance optimization, SEO implementation, and creating scalable solutions.",
  quickFacts: [
    { label: "Location", value: "Mumbai, India" },
    { label: "Education", value: "M.Sc. Computer Science" },
    { label: "Focus", value: "Full-Stack Development" },
    { label: "Languages", value: "English, Hindi, Marathi" },
  ],
};

export const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Technologies", value: 19, suffix: "+" },
  { label: "DSA Problems", value: 130, suffix: "+" },
];

export const skills = {
  categories: [
    {
      title: "Frontend Development",
      tags: ["JavaScript", "TypeScript", "React JS", "Angular", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      tags: ["PHP", "Python", "Java", "Spring Boot", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Tools & Databases",
      tags: ["WordPress", "MongoDB", "MySQL/SQL", "Git & GitHub", "Postman", "Docker"],
    },
  ],
  // Flat list for the marquee
  all: [
    "JavaScript", "TypeScript", "React", "Angular", "PHP", "Python", "Java",
    "Spring Boot", "WordPress", "MongoDB", "MySQL", "Tailwind CSS", "HTML/CSS",
    "Bootstrap", "REST APIs", "Docker", "Git", "Postman", "JWT",
  ],
};

export const experience = [
  {
    id: 1,
    company: "ALFA KOP Pvt Ltd",
    position: "Software Developer",
    duration: "April 2026 — Present",
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
    duration: "January 2026 — March 2026",
    location: "Mumbai, India — Remote",
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
    duration: "November 2025 — Present",
    location: "Mumbai, India — Remote",
    description: [
      "Developed and managed a 10+ page WordPress educational platform, executing 30+ layout and content updates",
      "Published 20+ SEO-optimized technical blogs with keyword targeting, meta descriptions, and internal linking",
      "Compressed 25+ media assets, implemented Schema.org structured data markup",
      "Enhanced page architecture, improving Core Web Vitals scores and search engine crawlability",
    ],
    technologies: ["WordPress", "SEO", "Content Management", "Schema Markup", "Image Optimization"],
  },
];

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
  featured: boolean;
  // Optional path under /public/projects/*.webp
  image?: string;
  caption?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Property Rental System",
    description:
      "Full-featured property rental management platform enabling users to list, search, and manage properties with secure JWT authentication and role-based access control.",
    impact: "Managing 200+ properties and 500+ user accounts with 30% faster query response times",
    techStack: ["Angular", "Spring Boot", "MongoDB", "REST API", "JWT", "Git"],
    liveUrl: "https://property-rental-demo.vercel.app",
    githubUrl: "https://github.com/rajkadam16/property-rental",
    year: "2024",
    featured: true,
    caption: "CASE 01 — FULL-STACK PLATFORM",
  },
  {
    id: 2,
    title: "AI Resume Screening System",
    description:
      "ML-powered resume screening platform that automatically evaluates and ranks candidates against job descriptions using XGBoost, NLP, and TF-IDF vectorization.",
    impact: "Reduced screening time by 60% with 85%+ accuracy in candidate matching",
    techStack: ["Python", "Flask", "XGBoost", "NLP", "TF-IDF", "MongoDB", "Machine Learning"],
    liveUrl: "https://resume-screening-ai-ekqc.onrender.com",
    githubUrl: "https://github.com/rajkadam16/Resume_Screening_AI",
    year: "2025",
    featured: true,
    caption: "CASE 02 — ML & NLP PIPELINE",
  },
  {
    id: 3,
    title: "Code Snippet Manager",
    description:
      "Real-time collaborative platform for managing and sharing code snippets with Firebase authentication and Firestore for scalable operations.",
    impact: "Supporting 600+ registered users with 99.9% uptime",
    techStack: ["Angular", "Firebase", "TypeScript", "Angular Material", "Firestore"],
    liveUrl: "https://code-snippet-manager.web.app",
    githubUrl: "https://github.com/rajkadam16/works/tree/main/CodeSnippit/my-app",
    year: "2024",
    featured: true,
    caption: "CASE 03 — REAL-TIME COLLABORATION",
  },
  {
    id: 4,
    title: "Expense Tracker & Analytics",
    description:
      "Full-stack expense management application with real-time analytics, interactive visualizations, and category-based filtering.",
    impact: "Tracking 500+ entries/month with 40% improvement in categorization accuracy",
    techStack: ["Angular v16", "Spring Boot", "MongoDB", "Chart.js", "REST API", "TypeScript"],
    liveUrl: "https://expense-tracker-demo.vercel.app",
    githubUrl: "https://github.com/rajkadam16/expense-tracker",
    year: "2024",
    featured: true,
    caption: "CASE 04 — FINANCIAL ANALYTICS",
  },
  {
    id: 5,
    title: "CS Corners Website",
    description:
      "WordPress-based educational website management with 50+ pages, comprehensive content administration, and SEO optimization.",
    impact: "Managed 30+ content updates across 10+ courses, improving structure and readability",
    techStack: ["WordPress", "CMS", "SEO", "Content Management", "Image Optimization"],
    liveUrl: "https://cscornersunitarai.com/",
    githubUrl: "",
    year: "2025",
    featured: true,
    caption: "CASE 05 — CMS & SEO ARCHITECTURE",
  },
];

export const education = [
  {
    id: 1,
    institution: "Guru Nanak Khalsa College, Mumbai",
    degree: "Master of Computer Science",
    duration: "June 2025 — March 2027",
    grade: "Ongoing",
  },
  {
    id: 2,
    institution: "Mumbai University",
    degree: "B.Sc. Information Technology",
    duration: "June 2023 — March 2025",
    grade: "7.80/10 CGPA",
  },
];

export const certifications = [
  {
    id: 1,
    name: "Namaste JavaScript — Advanced JavaScript Program",
    issuer: "Namaste JavaScript",
    date: "2024",
    url: "https://drive.google.com/file/d/1hOnNzeTrWLcblApkEAKBDGqXiPCNjRQ1/view?usp=sharing",
  },
  {
    id: 2,
    name: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "2025",
    url: "https://drive.google.com/file/d/1n-9PVqdtScTQ4_eOCkiUhthkv0I9bwQq/view?usp=sharing",
  },
  {
    id: 3,
    name: "Namaste DSA — Data Structures & Algorithms",
    issuer: "Namaste DSA",
    date: "2026",
    url: "https://drive.google.com/file/d/1Eowp2lvWcgjwlSq7GqxXLxDxpoOOhuVU/view?usp=sharing",
  },
  {
    id: 4,
    name: "LeetCode Problem Solving — 130+ Problems",
    issuer: "LeetCode",
    date: "Ongoing",
    url: "https://leetcode.com/u/rajkadam16",
  },
];

export const achievements = [
  "GPA 9.20/10 — Semester Topper, 3rd Year 5th Semester, Mumbai University",
  "1st Place — College-level Web Development Competition (February 2023)",
  "130+ DSA problems solved on LeetCode",
];

// Navigation items for header
export const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
