// projectData.js
import Photos from "./Photos";

const projects = [
  {
    title: "AI Cookmate",
    images: [
      { src: Photos.Aicookmate1, caption: "Login Page" },
      { src: Photos.Aicookmate2, caption: "Sign Up Page" },
      { src: Photos.Aicookmate3, caption: "Generated recipe and instructions" },
      { src: Photos.Aicookmate4, caption: "List of saved recipes" },
      { src: Photos.Aicookmate5, caption: "View Recipe" },
    ],
    description:
      "A smart recipe generator that allows users to input available ingredients and uses Gemini AI to suggest complete recipes with step-by-step cooking instructions. It supports both desktop and mobile interfaces.",
    tech: [
      { name: "React.js", icon: Photos.reactIcon },
      { name: "Gemini AI", icon: Photos.geminiIcon },
      { name: "Node.js", icon: Photos.nodejsIcon },
      { name: "Typescript", icon: Photos.typescriptIcon },
    ],
  },
  {
    title: "WeatherWear",
    images: [
      {
        src: Photos.Weatherwear,
        caption: "Current weather and outfit suggestion",
      },
    ],
    description:
      "A weather app that integrates weather data and Gemini AI to recommend appropriate clothing. It uses two APIs—WeatherAPI for accurate forecasts and Gemini AI to provide tailored outfit suggestions based on conditions like rain, sun, or wind.",
    tech: [
      { name: "React.js", icon: Photos.reactIcon },
      { name: "Typescript", icon: Photos.typescriptIcon },
      { name: "Node.js", icon: Photos.nodejsIcon },
      { name: "Gemini AI", icon: Photos.geminiIcon },
      { name: "WeatherAPI", icon: Photos.apiIcon },
    ],
  },
  {
    title: "School Management Information System",
    images: [{ src: Photos.School1, caption: "School dashboard" }],
    description:
      "A comprehensive platform for managing both administrative and academic school operations. Features include user management, enrollment, grading, learning modules, login security, test creation, email notifications, report generation, and support for seven user roles: admin, registrar, finance, principal, teacher, student, and parent.",
    tech: [
      { name: "React.js", icon: Photos.reactIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.HostingerIcon },
    ],
  },
  {
    title: "RFID Monitoring System",
    images: [{ src: Photos.GateMonitory1, caption: "RFID tracking interface" }],
    description:
      "A monitoring system for village security with mobile and web access. Features include RFID-based photo capture, gate entry tracking, notifications, report generation, and user account management.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
      { name: "Hostinger", icon: Photos.HostingerIcon },
    ],
  },
  {
    title: "Folder Locker & Encryptor",
    images: [
      { src: Photos.Folder2, caption: "View menu" },
      { src: Photos.Folder1, caption: "Login" },
      {
        src: Photos.Folder3,
        caption: "Encrpt and Compress the files on folder",
      },
      { src: Photos.Folder4, caption: "Lock the folder using access control" },
      { src: Photos.Folder5, caption: "Unlock The folder" },
      { src: Photos.Folder6, caption: "Recover the folder" },
      { src: Photos.Folder8, caption: "Change login info" },
    ],
    description:
      "A secure Windows app that compresses, encrypts, and locks folders with password protection, NTFS-based access control, and a recovery mechanism.",
    tech: [
      { name: "C#", icon: Photos.csharpIcon },
      { name: "WindowsForm", icon: Photos.csharpIcon },
    ],
  },
  {
    title: "PDF Sorter for Scanned Documents",
    images: [
      { src: Photos.PDF1, caption: "PDF interleaving UI" },
      { src: Photos.PDF2, caption: "Reordering tool preview" },
    ],
    description:
      "A tool that helps users fix and reorder scanned PDF files using interleaving logic, real-time preview, and export of corrected documents.",
    tech: [
      { name: "C#", icon: Photos.csharpIcon },
      { name: "WindowsForm", icon: Photos.csharpIcon },
    ],
  },
  {
    title: "Bakery Inventory System",
    images: [{ src: Photos.Bakery1, caption: "Stock and sales tracker" }],
    description:
      "A system designed to manage bakery operations including stock tracking, product management, and employee monitoring. Includes features for sales tracking, report generation, and overall inventory control.",
    tech: [
      { name: "Laravel", icon: Photos.laravelIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
  {
    title: "AI-powered Study App",
    images: [
      { src: Photos.AiStudy1, caption: "AI chatbot integration" },
      { src: Photos.AiStudy2, caption: "Flashcard creation" },
      { src: Photos.AiStudy3, caption: "AI-generated quizzes" },
      { src: Photos.AiStudy4, caption: "Mobile learning UI" },
    ],
    description:
      "A mobile learning app with AI-powered features built using Flutter. Integrated with Gemini AI to enable chatbot-based learning, automated flashcard creation, and AI-generated quizzes.",
    tech: [
      { name: "Flutter", icon: Photos.flutterIcon },
      { name: "API", icon: Photos.apiIcon },
    ],
  },
  {
    title: "Shoe E-commerce",
    images: [{ src: Photos.Shoe1, caption: "Product display page" }],
    description:
      "An e-commerce platform for selling shoes with features like guest checkout, order management, and sales tracking. Includes product catalog management, stock monitoring, and basic admin controls.",
    tech: [
      { name: "PHP", icon: Photos.phpIcon },
      { name: "MySQL", icon: Photos.mysqlIcon },
    ],
  },
];

export default projects;
