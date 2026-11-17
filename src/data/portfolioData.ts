export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  status: 'Completed' | 'Simultaneous';
  description: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  letter: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  supportingOrg?: string;
  institution?: string;
  period: string;
  duration: string;
  status: string;
  certificateId: string;
  studentId?: string;
  description: string;
  certificateImage?: string;
  certificatePdf?: string;
  driveProofUrl?: string;
  highlights: string[];
  skills: string[];
}

export interface InternshipItem {
  id: string;
  title: string;
  organization: string;
  supportingOrg?: string;
  institution?: string;
  period: string;
  duration?: string;
  status: 'Completed' | 'Present';
  role: string;
  certificateId?: string;
  certificateImage?: string;
  certificatePdf?: string;
  description: string;
  responsibilities: string[];
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  isCybersecurity?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl: string;
  certificateImage?: string;
  certificatePdf?: string;
  category: 'Cloud' | 'Cybersecurity' | 'AI & Automation' | 'Data';
}

export const PERSONAL_INFO = {
  name: "Yarra Sai Vaibhav",
  firstName: "Yarra Sai",
  lastName: "Vaibhav",
  location: "Eluru, Andhra Pradesh, India",
  availability: "Open to Opportunities",
  profilePhoto: "https://i.postimg.cc/Gh47wFmX/superset.jpg",
  fallbackPhoto: "/passphoto.jpg",
  resumeUrl: "https://drive.google.com/file/d/1bGWOxSi97Ei3CE56fO1s624KLsskRYYG/view?usp=drive_link",
  githubUrl: "https://github.com/saivaibhav98",
  linkedinUrl: "https://linkedin.com/in/sai-vaibhav-338046267",
  email: "saivaibhav184@gmail.com",
  phone: "+91 98484 58706",
  whatsappUrl: "https://wa.me/919848458706",
  introText: "Building reliable backend systems, exploring cloud technologies, engineering data-driven solutions, and securing modern web applications through practical software development and cybersecurity.",
  aboutParagraphs: [
    "Computer Science graduate with a strong interest in backend engineering, cloud computing, data engineering, and cybersecurity. I enjoy developing reliable applications, designing database-driven systems, and exploring scalable cloud-based solutions.",
    "Alongside software development, I have practical exposure to web application security, vulnerability assessment, security tools, and automated security operations. I continuously explore new technologies and enjoy solving real-world technical problems."
  ],
  typewriterTitles: [
    "Backend Developer",
    "Cloud Enthusiast",
    "Data Engineer",
    "Cybersecurity Enthusiast",
    "Software Engineer",
    "Security Analyst"
  ]
};

export const TECH_TICKER_ITEMS = [
  "Java", "Python", "C", "SQL", "React", "Node.js", "REST APIs",
  "PostgreSQL", "MySQL", "Docker", "AWS", "Cloud", "Linux",
  "Git", "Backend", "Data Engineering", "Machine Learning",
  "Cybersecurity", "Burp Suite", "Kali Linux", "Splunk", "Suricata", "Shuffle SOAR"
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech – Computer Science Engineering",
    institution: "KL University",
    location: "Vijayawada, India",
    period: "Completed – May 5, 2026",
    score: "7.99",
    scoreType: "CGPA",
    status: "Completed",
    description: "Core specialization in Computer Science, software architecture, distributed systems, database management, and hands-on laboratory tracks.",
    tag: "Graduated"
  },
  {
    id: "online-bba",
    degree: "Online Bachelor of Business Administration (BBA)",
    institution: "KL University",
    location: "Online / Vijayawada",
    period: "Completed Simultaneously",
    score: "Completed",
    scoreType: "Degree",
    status: "Simultaneous",
    description: "Earned concurrently alongside B.Tech CSE, gaining foundations in business operations, strategic leadership, and technology management.",
    tag: "Concurrent"
  },
  {
    id: "intermediate",
    degree: "Intermediate / Higher Secondary (MPC)",
    institution: "Tirumala Institutions",
    location: "Rajahmundry, India",
    period: "Higher Secondary",
    score: "7.71",
    scoreType: "GPA",
    status: "Completed",
    description: "Mathematics, Physics, and Chemistry foundation with rigorous analytical and problem-solving focus."
  },
  {
    id: "secondary",
    degree: "Secondary School Certificate (SSC)",
    institution: "Sri Chaitanya Techno School",
    location: "Eluru, India",
    period: "Secondary",
    score: "10.0",
    scoreType: "GPA",
    status: "Completed",
    description: "Perfect GPA 10.0 score reflecting sustained academic excellence and disciplinary foundation."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "prog-lang",
    letter: "A",
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["C", "Java", "Python", "SQL"]
  },
  {
    id: "web-dev",
    letter: "B",
    title: "Web Development",
    iconName: "Globe",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Flask", "REST APIs"]
  },
  {
    id: "backend-dev",
    letter: "C",
    title: "Backend Development",
    iconName: "Server",
    skills: ["Java Backend Development", "Spring Boot", "REST API Development", "Database Integration", "Authentication", "Full-Stack Development"]
  },
  {
    id: "databases",
    letter: "D",
    title: "Databases",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "SQL Queries", "Relational Database Concepts"]
  },
  {
    id: "cloud-comp",
    letter: "E",
    title: "Cloud Computing",
    iconName: "Cloud",
    skills: ["AWS", "AWS Core Services", "Cloud Architecture", "Cloud Computing", "AWS IAM", "Cloud Storage", "Data Engineering"]
  },
  {
    id: "data-eng",
    letter: "F",
    title: "Data Engineering",
    iconName: "Cpu",
    skills: ["Data Pipelines", "ETL", "Data Processing", "Data Integration", "Database Management", "AWS Data Engineering"]
  },
  {
    id: "cybersecurity",
    letter: "G",
    title: "Cybersecurity",
    iconName: "ShieldAlert",
    skills: ["Web Application Penetration Testing", "Vulnerability Assessment", "SQL Injection", "Cross-Site Scripting (XSS)", "IDOR", "Broken Access Control", "Path Traversal", "Command Injection", "Authentication Testing", "Brute-Force Testing"]
  },
  {
    id: "sec-ops",
    letter: "H",
    title: "Security Operations",
    iconName: "Eye",
    skills: ["SIEM", "SOAR", "IDS", "Log Analysis", "IOC Analysis", "Threat Intelligence", "Incident Response", "Security Event Investigation"]
  },
  {
    id: "sec-tools",
    letter: "I",
    title: "Security Tools",
    iconName: "Terminal",
    skills: ["Burp Suite", "Kali Linux", "Splunk", "Suricata", "Shuffle SOAR", "VirusTotal", "curl", "John the Ripper", "Docker", "Linux"]
  },
  {
    id: "dev-tools",
    letter: "J",
    title: "Development Tools",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Figma", "Ubuntu"]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "aicte-data-engineering",
    role: "AWS Data Engineering Virtual Intern",
    organization: "AICTE – EduSkills",
    supportingOrg: "AWS Academy",
    institution: "KL University",
    duration: "10 weeks",
    period: "January – March 2024",
    status: "Completed",
    certificateId: "c8ad98e49e96dc3ce285271c2254aecd",
    studentId: "STU6592552b59ab51704088875",
    description: "Successfully completed a 10-week Data Engineering Virtual Internship focused on data engineering concepts and AWS-supported learning.",
    certificateImage: "/certificates/aicte__data_virtual_internship.png",
    certificatePdf: "/certificates/AICTE  data virtual INTERNSHIP.pdf",
    driveProofUrl: "https://drive.google.com/file/d/18kkEMob3KpurPnGfCBSIDG54DyDCt56V/view",
    highlights: [
      "Completed structured coursework and hands-on lab modules supported by AWS Academy curriculum.",
      "Engineered cloud-based data ingestion and transformation pipelines using AWS storage and database services.",
      "Earned official EduSkills & AICTE Government validation with verifiable credential verification."
    ],
    skills: ["AWS Academy", "Data Engineering", "Data Pipelines", "ETL", "Cloud Storage", "SQL"]
  }
];

export const INTERNSHIP_LIST: InternshipItem[] = [
  {
    id: "infoz-cybersecurity",
    title: "Current Cybersecurity Internship",
    role: "Cybersecurity / Penetration Testing Intern",
    organization: "INFOZ IT SOLUTIONS",
    period: "Present / Currently Working",
    status: "Present",
    description: "Conducting hands-on authorized security assessments, web application penetration tests, and vulnerability reporting in controlled corporate training environments.",
    responsibilities: [
      "Perform authorized security assessments on web applications and identify security flaws in controlled training labs.",
      "Work extensively with the VulnBank Flask banking training lab to analyze and validate 12 distinct vulnerability categories.",
      "Validate vulnerabilities using industry-standard tools: Burp Suite, Kali Linux, curl, Docker, and John the Ripper.",
      "Document structured reproduction steps, evidence artifacts, security impact analysis, and actionable remediation recommendations."
    ],
    tools: ["Burp Suite", "Kali Linux", "Docker", "curl", "John the Ripper", "Flask", "VAPT", "Vulnerability Assessment"]
  },
  {
    id: "aicte-internship-record",
    title: "AICTE Data Engineering Virtual Internship",
    role: "Data Engineering Virtual Intern",
    organization: "AICTE – EduSkills",
    supportingOrg: "AWS Academy",
    institution: "KL University",
    period: "January – March 2024",
    duration: "10 weeks",
    status: "Completed",
    certificateId: "c8ad98e49e96dc3ce285271c2254aecd",
    certificateImage: "/certificates/aicte__data_virtual_internship.png",
    certificatePdf: "/certificates/AICTE  data virtual INTERNSHIP.pdf",
    description: "Successfully completed a 10-week comprehensive virtual internship in AWS-backed Data Engineering under the national technical education initiative.",
    responsibilities: [
      "Explored scalable data pipelines and architectural patterns using AWS data ecosystem components.",
      "Studied real-world ETL implementations, database schemas, and data ingestion architectures.",
      "Completed project assessments and earned government-recognized certification."
    ],
    tools: ["AWS Academy", "Data Engineering", "ETL", "Data Pipelines", "Cloud Architecture"]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "vulnbank-pentest",
    title: "VulnBank Web Application Penetration Testing",
    category: "Cybersecurity",
    badge: "VAPT & Security Lab",
    isCybersecurity: true,
    description: "Performed structured security testing on a Flask-based banking training application, identifying and documenting vulnerabilities in a controlled environment.",
    highlights: [
      "Tested and verified 12 critical vulnerability categories including SQLi, XSS, IDOR, Broken Access Control, Path Traversal, and Command Injection.",
      "Engineered automated and manual test scripts to demonstrate vulnerability reproduction and impact.",
      "Authored remediation guidelines following OWASP Top 10 recommendations to harden application logic."
    ],
    tools: ["Burp Suite", "Kali Linux", "curl", "Docker", "Flask", "OWASP", "VAPT"]
  },
  {
    id: "automated-soc",
    title: "Automated SOC: SIEM, IDS & SOAR Integration",
    category: "Cybersecurity / Security Operations",
    badge: "SOC Automation",
    isCybersecurity: true,
    description: "Developed an automated security monitoring and response workflow integrating intrusion detection, log analysis, threat intelligence, and automated response.",
    highlights: [
      "Configured Suricata IDS to generate security alerts and centralized event logs into Splunk SIEM for real-time monitoring.",
      "Engineered an automated alert pipeline: Splunk → Webhook → Shuffle SOAR → VirusTotal for IOC enrichment.",
      "Implemented containment and response actions using custom Flask endpoints and HTTP APIs containerized via Docker on Ubuntu."
    ],
    tools: ["Suricata", "Splunk SIEM", "Shuffle SOAR", "VirusTotal", "Flask", "HTTP APIs", "Docker", "Ubuntu"]
  },
  {
    id: "kc7-investigation",
    title: "KC7 Security Investigation",
    category: "Cybersecurity",
    badge: "Incident Investigation",
    isCybersecurity: true,
    description: "Completed practical security investigation exercises focused on identifying indicators of compromise, analyzing security events, and performing structured security investigations.",
    highlights: [
      "Analyzed threat actor activity across enterprise telemetry and investigated security incident timelines.",
      "Constructed structured KQL and SQL queries to track IOCs, command-and-control beacons, and lateral movement.",
      "Formulated evidence-based hypotheses and delivered comprehensive incident response findings."
    ],
    tools: ["KC7 Cyber", "KQL Queries", "IOC Analysis", "Threat Intelligence", "Incident Response"]
  },
  {
    id: "car-rental",
    title: "Online Car Rental Management System",
    category: "Full-Stack Development",
    badge: "Production Web App",
    description: "Developed an online vehicle rental management application with vehicle information, booking workflows, backend functionality, and database integration.",
    highlights: [
      "Built interactive customer reservation workflows and administrative vehicle fleet management dashboards.",
      "Implemented database schema constraints and transactional booking logic for inventory accuracy.",
      "Successfully deployed on Netlify with automated continuous delivery."
    ],
    tools: ["React", "JavaScript", "SQL", "Database Design", "Netlify", "Full-Stack"],
    liveUrl: "https://685faf3e3484786f5a607b59--shadow-drive-online.netlify.app",
    githubUrl: "https://github.com/saivaibhav98/shadow-drive-online.git"
  },
  {
    id: "food-ordering",
    title: "Food Ordering System",
    category: "Web Development",
    badge: "Interactive Frontend",
    description: "Developed a responsive food ordering application with an interactive user interface and ordering functionality.",
    highlights: [
      "Created dynamic menu catalog with real-time filtering, cart state management, and item customizations.",
      "Engineered responsive UI using React components and SQL backend data models.",
      "Deployed live on Netlify with instant interactive access."
    ],
    tools: ["React", "SQL", "CSS3", "JavaScript", "Netlify", "State Management"],
    liveUrl: "https://spice-haven-eats-refined.netlify.app/",
    githubUrl: "https://github.com/saivaibhav98/spice-haven-eats-refined.git"
  },
  {
    id: "database-creation",
    title: "Database Creation & Relational Schema Modeling",
    category: "Database Development",
    badge: "Relational Architecture",
    description: "Database-focused project emphasizing schema creation, relational modeling, SQL queries, normalization, and database operations.",
    highlights: [
      "Designed normalized 3NF schemas with primary/foreign key constraints, views, and stored routines.",
      "Constructed advanced SQL queries including multi-table joins, aggregations, and subqueries.",
      "Benchmarked index strategies and transaction consistency under concurrent operations."
    ],
    tools: ["MySQL", "PostgreSQL", "Relational Modeling", "3NF Normalization", "SQL Optimization"]
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: "aws-cloud-prac",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "May 15, 2024",
    expirationDate: "May 15, 2027",
    credentialId: "7cf4e31d-bbe4-424d-8a42-0d0c6ea5b719",
    verificationUrl: "https://www.credly.com/badges/7cf4e31d-bbe4-424d-8a42-0d0c6ea5b719/linked_in_profile",
    certificateImage: "/certificates/amazon.png",
    certificatePdf: "/certificates/AMAZON.pdf",
    category: "Cloud"
  },
  {
    id: "salesforce-ai",
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    issueDate: "October 21, 2024",
    credentialId: "5095832",
    verificationUrl: "https://www.salesforce.com/trailblazer/u0e8nja9ewz4e4jh2r",
    certificateImage: "/certificates/sales.png",
    certificatePdf: "/certificates/SALES.pdf",
    category: "AI & Automation"
  },
  {
    id: "automation-anywhere",
    title: "Certified Essentials Automation Professional",
    issuer: "Automation Anywhere",
    issueDate: "January 9, 2025",
    expirationDate: "January 9, 2027",
    credentialId: "AAESSE2024A360 - 129221579",
    verificationUrl: "https://certificates.automationanywhere.com/175cf414-9beb-48cd-b238-7fecc984f15b",
    certificateImage: "/certificates/auto.png",
    certificatePdf: "/certificates/AUTO.pdf",
    category: "AI & Automation"
  },
  {
    id: "aviatrix-ace",
    title: "Aviatrix Certified Engineer: Multicloud Network Associate",
    issuer: "Aviatrix",
    issueDate: "December 18, 2025",
    expirationDate: "December 18, 2028",
    credentialId: "c0493305-5427-48f3-a16c-84523c3b85c2",
    verificationUrl: "https://www.credly.com/badges/c0493305-5427-48f3-a16c-84523c3b85c2/linked_in_profile",
    certificateImage: "/certificates/avia.png",
    certificatePdf: "/certificates/AVIA.pdf",
    category: "Cloud"
  },
  {
    id: "kc7-analyst",
    title: "KC7 Security Analyst I",
    issuer: "KC7 Foundation",
    issueDate: "August 18, 2026",
    credentialId: "84895",
    verificationUrl: "https://kc7cyber.com/profile/Y_SAI_VAIBHAV",
    certificateImage: "/certificates/kc7-certificate.png",
    certificatePdf: "/certificates/kc7-certificate.pdf",
    category: "Cybersecurity"
  },
  {
    id: "aws-academy-cf",
    title: "AWS Academy Graduate: Cloud Foundations",
    issuer: "Amazon Web Services Training & Certification",
    issueDate: "January 31, 2024",
    credentialId: "e62bb035-efef-47b0-bc65-57571888644f",
    verificationUrl: "https://www.credly.com/earner/earned/badge/e62bb035-efef-47b0-bc65-57571888644f",
    category: "Cloud"
  },
  {
    id: "aws-academy-de",
    title: "AWS Academy Graduate: Data Engineering",
    issuer: "Amazon Web Services Training & Certification",
    issueDate: "February 27, 2024",
    credentialId: "f4419bfe-9838-4180-8fcd-d49abe5d278d",
    verificationUrl: "https://www.credly.com/earner/earned/badge/f4419bfe-9838-4180-8fcd-d49abe5d278d",
    category: "Data"
  },
  {
    id: "deeplearning-ml",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    issueDate: "January 2026",
    credentialId: "NL44A81I8L1J",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/NL44A81I8L1J",
    category: "AI & Automation"
  }
];

export const COURSERA_PENDING_CREDENTIALS = [
  { id: "c1", code: "GL667JLBFGB8", url: "https://www.coursera.org/account/accomplishments/verify/GL667JLBFGB8" },
  { id: "c2", code: "0312APCVLNZU", url: "https://www.coursera.org/account/accomplishments/verify/0312APCVLNZU" },
  { id: "c3", code: "9KYA30CJCMWX", url: "https://www.coursera.org/account/accomplishments/verify/9KYA30CJCMWX" },
  { id: "c4", code: "LK855STHUGHP", url: "https://www.coursera.org/account/accomplishments/verify/LK855STHUGHP" }
];
