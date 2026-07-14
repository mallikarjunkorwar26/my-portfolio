// Central content source for the portfolio.
// Keeping copy here (instead of scattered in components) makes it easy
// to update resume details without touching layout code.

export const profile = {
  name: "Mallikarjun Korwar",
  initials: "MK",
  role: "IT Coordinator | IT Infrastructure Engineer | Network & Server Administrator",
  currentPosition: "IT Coordinator at Atlant Global India",
  currentTitle: "IT Coordinator",
  currentCompany: "Atlant Global India (Inc.)",
  badge: "IT Infrastructure Engineer",
  location: "India",
  email: "mallikarjunkorwar26@gmail.com",
  phone: "+91 8861330306",
  linkedin: "https://www.linkedin.com/in/mallikarjun-korwar-/",
  github: "https://github.com/mallikarjunkorwar26",
  resumeUrl: `${import.meta.env.BASE_URL}resume-mallikarjun-korwar.pdf`,
  profileImage: `${import.meta.env.BASE_URL}images/mk.jpeg`,
  heroDescription:
    "I plan, deploy, and maintain the infrastructure that keeps enterprise operations running — from server rooms to branch networks. Seven years in, I still get the same satisfaction from a clean cable run and a firewall rule that just works.",
  aboutParagraphs: [
    "I work at the intersection of infrastructure and dependability. My job is to make sure the systems nobody thinks about — servers, domain controllers, firewalls, backups — keep running quietly in the background, day after day, across dozens of locations at once.",
    "Over the past seven years I've moved from hands-on fieldwork — running structured cabling, racking servers, configuring access control — into coordinating IT operations for a 64-branch enterprise network. That range means I understand infrastructure from the patch panel up to the policy that governs it.",
    "I care about problems that have a right answer: a network that's segmented correctly, a domain that's structured cleanly, a firewall rule that closes exactly the gap it should. Vendor coordination, documentation, and knowing when to escalate versus resolve on the spot are as much a part of the job as the technical work itself.",
  ],
  aboutHighlights: [
    "Enterprise Infrastructure",
    "Windows Server",
    "Microsoft SQL Server",
    "Networking (LAN/WAN)",
    "Sophos Firewall",
    "VPN Deployment",
    "Server Rack Deployment",
    "Structured Cabling",
    "NAS & RAID",
    "Active Directory",
    "Vendor Coordination",
    "Desktop Support",
    "Multi-site IT Operations",
  ],
};

export const heroStats = [
  { label: "Years Experience", value: "7+" },
  { label: "Branch IT Operations", value: "64+" },
];

export const heroTech = [
  "Windows Server",
  "Active Directory",
  "Microsoft SQL Server",
  "Sophos Firewall",
  "Networking",
  "Infrastructure Management",
];

export const floatingIcons = ["server", "network", "shield", "database", "cloud"] as const;

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  status: "current" | "previous";
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "atlant-it-coordinator",
    role: "IT Coordinator",
    org: "Atlant Global India (Inc.) – Master Franchisee, The Professional Couriers",
    period: "July 2026 – Present",
    status: "current",
    location: "India",
    summary:
      "As an IT Coordinator, I plan, develop, and manage enterprise IT infrastructure while ensuring reliable and uninterrupted operations across the organization.",
    highlights: [
      "Coordinate and oversee daily IT operations to ensure business continuity.",
      "Plan, develop, and continuously improve the company’s IT infrastructure.",
      "Administer Windows Server, Active Directory, Microsoft SQL Server, and enterprise networking.",
      "Manage LAN/WAN, VPN connectivity, firewall policies, and network security.",
      "Lead server deployments, infrastructure upgrades, and technology implementation projects.",
      "Monitor system performance, availability, and preventive maintenance.",
      "Coordinate with vendors, ISPs, and internal departments for seamless IT operations.",
      "Maintain IT documentation, asset management, backup strategies, and security best practices.",
    ],
    tags: ["Windows Server", "Active Directory", "SQL Server", "Networking", "Firewall", "Infrastructure"],
  },
  {
    id: "atlant-it-support-executive",
    role: "IT Support Executive",
    org: "Atlant Global India (Inc.) – Master Franchisee, The Professional Couriers",
    period: "February 2026 – June 2026",
    status: "previous",
    location: "India",
    summary:
      "Provided technical support and infrastructure assistance by maintaining enterprise systems, troubleshooting issues, and supporting network and server operations.",
    highlights: [
      "Provided technical support for desktops, laptops, printers, and business applications.",
      "Assisted in Windows Server, Active Directory, and Microsoft SQL Server administration.",
      "Installed, configured, and troubleshot networking devices including routers, switches, wireless access points, and VPN connectivity.",
      "Supported deployment and maintenance of CCTV systems, biometric devices, and other IT infrastructure.",
      "Diagnosed and resolved hardware, software, and network issues efficiently.",
      "Coordinated with vendors and Internet Service Providers (ISPs).",
      "Performed software installation, system maintenance, and IT asset management.",
      "Delivered end-user support while ensuring stable IT operations.",
    ],
    tags: ["Desktop Support", "Networking", "Servers", "CCTV", "VPN", "IT Support"],
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  icon: "server" | "network" | "shield" | "database" | "code" | "cpu" | "wrench";
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: "server",
    skills: [
      { name: "Windows Server", level: 95 },
      { name: "Active Directory", level: 92 },
      { name: "Infrastructure Monitoring", level: 88 },
      { name: "Backup & Recovery", level: 85 },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "network",
    skills: [
      { name: "LAN / WAN", level: 93 },
      { name: "TCP/IP & DNS/DHCP", level: 90 },
      { name: "VLAN Configuration", level: 87 },
      { name: "Cisco & D-Link", level: 82 },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: "shield",
    skills: [
      { name: "Sophos Firewall", level: 92 },
      { name: "VPN Deployment", level: 88 },
      { name: "Network Security", level: 90 },
      { name: "Access Control Systems", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "database",
    skills: [
      { name: "Microsoft SQL Server", level: 88 },
      { name: "MongoDB", level: 65 },
      { name: "Database Maintenance", level: 82 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: 70 },
      { name: "JavaScript / React", level: 62 },
      { name: "HTML / CSS", level: 75 },
      { name: "Git & GitHub", level: 78 },
    ],
  },
  {
    id: "hardware",
    label: "Hardware & Tools",
    icon: "wrench",
    skills: [
      { name: "Server Rack Deployment", level: 90 },
      { name: "NAS & RAID", level: 85 },
      { name: "Structured Cabling", level: 92 },
      { name: "Linux Administration", level: 68 },
    ],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon:
    | "server"
    | "shield-check"
    | "network"
    | "database"
    | "cable"
    | "camera"
    | "fingerprint"
    | "life-buoy"
    | "wifi"
    | "hard-drive";
};

export const services: Service[] = [
  {
    id: "windows-server",
    title: "Windows Server Deployment",
    description:
      "End-to-end setup and configuration of Windows Server environments, from role installation to hardening.",
    icon: "server",
  },
  {
    id: "active-directory",
    title: "Active Directory Setup",
    description: "Domain design, OU structure, group policy, and user/permission management at scale.",
    icon: "shield-check",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "LAN/WAN design, VLAN segmentation, and structured network architecture for multi-site operations.",
    icon: "network",
  },
  {
    id: "firewall",
    title: "Firewall Configuration",
    description: "Sophos Firewall deployment, policy tuning, and traffic control for enterprise-grade security.",
    icon: "wifi",
  },
  {
    id: "vpn",
    title: "VPN Deployment",
    description: "Secure site-to-site and remote-access VPN tunnels connecting distributed branch networks.",
    icon: "shield-check",
  },
  {
    id: "sql-server",
    title: "Microsoft SQL Server",
    description: "Installation, maintenance, and performance tuning of SQL Server instances for branch applications.",
    icon: "database",
  },
  {
    id: "server-rack",
    title: "Server Rack Installation",
    description: "Physical infrastructure builds — racking, power planning, and cable management done right.",
    icon: "hard-drive",
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    description: "Certified cabling layouts for data and voice networks, built for reliability and future scale.",
    icon: "cable",
  },
  {
    id: "troubleshooting",
    title: "Network Troubleshooting",
    description: "Root-cause diagnosis for connectivity, latency, and hardware issues across live networks.",
    icon: "life-buoy",
  },
  {
    id: "monitoring",
    title: "Infrastructure Monitoring",
    description: "Proactive uptime and performance monitoring to catch issues before they become outages.",
    icon: "server",
  },
  {
    id: "cctv",
    title: "CCTV Installation",
    description: "Surveillance system design and installation, from camera placement to remote viewing setup.",
    icon: "camera",
  },
  {
    id: "access-control",
    title: "Access Control & Biometric",
    description: "Biometric attendance and access control systems for secure, auditable site entry.",
    icon: "fingerprint",
  },
  {
    id: "amc",
    title: "IT AMC & Support",
    description: "Annual maintenance contracts covering proactive support, patching, and on-call response.",
    icon: "life-buoy",
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: "primary" | "secondary" | "accent";
};

export const projects: Project[] = [
  {
    id: "enterprise-it",
    title: "Enterprise IT Infrastructure Management",
    subtitle: "64-branch network & systems administration",
    description:
      "Centralized administration of IT infrastructure across 64+ branch locations — covering Windows Server, Active Directory, SQL Server, and network security under one coordinated operations model.",
    tech: ["Windows Server", "Active Directory", "SQL Server", "Sophos Firewall", "VPN"],
    achievements: [
      "Standardized infrastructure across 64+ branches",
      "Maintained 99% system availability",
      "Reduced vendor response time via structured escalation process",
    ],
    accent: "primary",
  },
  {
    id: "neurosense",
    title: "NeuroSense",
    subtitle: "AI-based epileptic seizure detection",
    description:
      "A supporting project exploring applied machine learning — building a detection pipeline that flags epileptic seizure patterns from signal data to assist early clinical response.",
    tech: ["Python", "Machine Learning", "Data Processing"],
    achievements: [
      "Built a working detection pipeline from raw signal data",
      "Explored model accuracy trade-offs for real-time use",
    ],
    githubUrl: "https://github.com/mallikarjunkorwar",
    accent: "secondary",
  },
  {
    id: "automatic-bell",
    title: "Automatic Bell System",
    subtitle: "Scheduled hardware automation",
    description:
      "A hardware-integrated scheduling system that automates institutional bell timing, removing manual dependency and ensuring consistent, accurate scheduling.",
    tech: ["Embedded Systems", "Automation", "Scheduling Logic"],
    achievements: [
      "Eliminated manual bell operation entirely",
      "Delivered consistent, drift-free scheduling",
    ],
    githubUrl: "https://github.com/mallikarjunkorwar",
    accent: "accent",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  category: "AI & Security" | "Networking" | "Server Administration" | "Upcoming";
  status: "completed" | "upcoming";
};

export const certifications: Certification[] = [
  {
    id: "ai-cybersecurity",
    title: "AI in Cybersecurity",
    issuer: "Professional Certification",
    category: "AI & Security",
    status: "completed",
  },
  {
    id: "networking-cert",
    title: "Networking Fundamentals & Administration",
    issuer: "Professional Certification",
    category: "Networking",
    status: "completed",
  },
  {
    id: "server-admin",
    title: "Server Administration",
    issuer: "Professional Certification",
    category: "Server Administration",
    status: "completed",
  },
  {
    id: "upcoming",
    title: "Next Certification — In Progress",
    issuer: "To be announced",
    category: "Upcoming",
    status: "upcoming",
  },
];

export const achievements = [
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "Branches Managed", value: 64, suffix: "+" },
  { label: "Users Supported", value: 500, suffix: "+" },
  { label: "Infrastructure Deployments", value: 100, suffix: "+" },
  { label: "System Availability", value: 99, suffix: "%" },
];

export const techStack = [
  "Windows Server",
  "Active Directory",
  "Microsoft SQL Server",
  "Sophos Firewall",
  "Networking",
  "Linux",
  "Git",
  "GitHub",
  "React",
  "Node.js",
];

export const gallery = [
  { id: "server-rack", title: "Server Rack Deployment", category: "Infrastructure" },
  { id: "network-switches", title: "Network Switches", category: "Networking" },
  { id: "firewall-unit", title: "Firewall Configuration", category: "Security" },
  { id: "structured-cabling", title: "Structured Cabling", category: "Infrastructure" },
  { id: "data-center", title: "Data Center Operations", category: "Infrastructure" },
  { id: "cctv-system", title: "CCTV Surveillance", category: "Security" },
  { id: "router-config", title: "Router Configuration", category: "Networking" },
  { id: "switch-panel", title: "Switch Panel", category: "Networking" },
  { id: "server-room", title: "Server Room", category: "Infrastructure" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
