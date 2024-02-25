const thesisProposals = [
  {
    title: "Instrumenting Kubernetes 5G services with eBPF probes",
    coSupervisors: ["david@example.com", "d567890@polito.it"],
    description: "Description for Thesis Proposal 1",
    programmes: "Design in Graphic Design",
    keywords: ["keyword1", "tag1"],
    level: "master",
    id: 0,
    archiveDate: "2025-09-24T14:15:06.473Z",
    teacherId: "d123456",
    notes: "Additional notes for Thesis Proposal 1",
    expirationDate: "2025-09-24T14:15:06.473Z",
    groups: ["SOFTENG", "FM"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 1",
    type: "academic research",
  },
  {
    coSupervisors: ["d345678@polito.it", "alice@company.com"],
    level: "master",
    type: "academic research",
    archiveDate: "2022-06-28T14:15:06.474Z",
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    notes: "Additional notes for Thesis Proposal 2",
    keywords: ["keyword2", "tag2"],
    expirationDate: "2022-06-28T14:15:06.474Z",
    teacherId: "d123456",
    description: "Description for Thesis Proposal 2",
    programmes: "Engineering in Civil Engineering",
    title:
      "Sviluppo e containerizzazione di microservizi di monitoraggio e analisi dei consumi energetici su cluster Kubernetes",
    id: 1,
    groups: ["SOFTENG", "METENG"],
  },
  {
    keywords: ["keyword1", "tag1"],
    description: "Description for Thesis Proposal 1",
    coSupervisors: ["laura@polito.it", "d123456@polito.it"],
    level: "bachelor",
    groups: ["FM", "SOFTENG"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 1",
    teacherId: "d234567",
    title:
      "Endless scalability of CPU-hungry applications across multiple federated clusters (Liqo/Aruba)",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 1",
    expirationDate: "2024-08-04T14:15:06.474Z",
    archiveDate: "2024-08-04T14:15:06.474Z",
    id: 2,
  },
  {
    type: "stage",
    keywords: ["keyword2", "tag2"],
    id: 3,
    coSupervisors: ["marco@company.com", "alice@example.com"],
    level: "bachelor",
    description: "Description for Thesis Proposal 2",
    groups: ["FM"],
    expirationDate: "2024-01-28T15:15:06.474Z",
    notes: "Additional notes for Thesis Proposal 2",
    teacherId: "d234567",
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    title:
      "Formal Verification of Safety-Critical Software Systems Using Model Checking Techniques",
    programmes: "Architecture",
    archiveDate: "2024-01-28T15:15:06.474Z",
  },
  {
    level: "master",
    groups: ["METENG", "FM"],
    id: 4,
    description: "Description for Thesis Proposal 1",
    requiredKnowledge: "Required knowledge for Thesis Proposal 1",
    coSupervisors: ["d567890@polito.it", "laura@example.com"],
    keywords: ["keyword1", "tag1"],
    teacherId: "d345678",
    type: "stage",
    notes: "Additional notes for Thesis Proposal 1",
    title:
      "Automatic and Optimal Configuration of Secure Communications in Virtualized Networks",
    archiveDate: "2019-12-05T15:15:06.474Z",
    programmes: "Design in Graphic Design",
    expirationDate: "2019-12-05T15:15:06.474Z",
  },
  {
    description: "Description for Thesis Proposal 2",
    programmes: "Engineering in Civil Engineering",
    expirationDate: "2025-09-28T14:15:06.474Z",
    coSupervisors: ["d234567@polito.it", "david@company.com"],
    notes: "Additional notes for Thesis Proposal 2",
    keywords: ["keyword2", "tag2"],
    title:
      "Utilizing Machine Learning Techniques for Predictive Maintenance of Metallurgical Equipment",
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    level: "master",
    archiveDate: "2025-09-28T14:15:06.474Z",
    id: 5,
    teacherId: "d345678",
    groups: ["METENG", "FM"],
    type: "academic research",
  },
  {
    teacherId: "d000000",
    requiredKnowledge: "Required knowledge for Thesis Proposal 1",
    description: "Description for Thesis Proposal 1",
    groups: ["SOFTENG"],
    archiveDate: "2025-07-19T14:15:06.474Z",
    expirationDate: "2025-07-19T14:15:06.474Z",
    keywords: ["keyword1", "tag1"],
    level: "bachelor",
    coSupervisors: ["d123456@polito.it", "marco@polito.it"],
    id: 6,
    title:
      "Enhancing Software Quality Through Automated Testing and Continuous Integration",
    notes: "Additional notes for Thesis Proposal 1",
    programmes: "Engineering in Electrical Engineering",
    type: "academic research",
  },
  {
    description: "Description for Thesis Proposal 2",
    programmes: "Architecture",
    teacherId: "d456789",
    title:
      "Definizione dell’infrastruttura di comunicazione e computing per l’operatività di droni/rover su Marte (POLITO/PIC4SER)",
    archiveDate: "2022-10-29T14:15:06.474Z",
    groups: ["SOFTENG", "METENG"],
    id: 7,
    type: "academic research",
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    keywords: ["keyword2", "tag2"],
    notes: "Additional notes for Thesis Proposal 2",
    level: "bachelor",
    expirationDate: "2022-10-29T14:15:06.474Z",
    coSupervisors: ["d345678@polito.it", "laura@polito.it"],
  },
  {
    type: "academic research",
    title:
      "Evaluation of Sustainable Construction Materials for Eco-Friendly Building Design",
    expirationDate: "2022-11-26T15:15:06.474Z",
    id: 8,
    teacherId: "d567890",
    archiveDate: "2022-11-26T15:15:06.474Z",
    coSupervisors: ["d234567@polito.it", "d345678@polito.it"],
    level: "bachelor",
    keywords: ["keyword1", "tag1"],
    description: "Description for Thesis Proposal 1",
    programmes: "Engineering in Electrical Engineering",
    groups: ["FM", "METENG"],
    notes: "Additional notes for Thesis Proposal 1",
    requiredKnowledge: "Required knowledge for Thesis Proposal 1",
  },
  {
    expirationDate: "2025-09-08T14:15:06.475Z",
    keywords: ["keyword2", "tag2"],
    level: "bachelor",
    description: "Description for Thesis Proposal 2",
    archiveDate: "2025-09-08T14:15:06.475Z",
    id: 9,
    groups: ["FM", "SOFTENG"],
    type: "stage",
    notes: "Additional notes for Thesis Proposal 2",
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    programmes: "Engineering in Electrical Engineering",
    title:
      "Formal Methods for Software Specification and Verification: Ensuring System Correctness and Reliability",
    teacherId: "d567890",
    coSupervisors: ["d123456@polito.it", "d123456@polito.it"],
  },
  {
    title:
      "Reply: Investigation of AI-Powered Robotics for Automated Manufacturing Processes",
    groups: ["METENG"],
    requiredKnowledge: "Web App1",
    id: 25,
    keywords: ["Reply"],
    expirationDate: "2024-05-20T07:17:35.131Z",
    coSupervisors: ["s123456@polito.it"],
    notes: "",
    description: "Tesi in azienda",
    type: "Stage",
    archiveDate: "2024-05-20T07:17:35.131Z",
    programmes: "Architecture",
    teacherId: "d345678",
    level: "bachelor",
  },
  {
    keywords: ["keyword2", "tag2"],
    description: "Description for Thesis Proposal 2",
    coSupervisors: ["marco@company.com", "alice@example.com"],
    level: "bachelor",
    groups: ["FM"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 2",
    teacherId: "d567890",
    title: "Optimizing Deep Learning Models for Edge Devices",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 2",
    expirationDate: "2024-09-15T12:30:00.000Z",
    archiveDate: "2024-09-15T12:30:00.000Z",
    id: 26,
  },
  {
    keywords: ["keyword3", "tag3"],
    description: "Description for Thesis Proposal 3",
    coSupervisors: ["alice@example.com", "d567890@polito.it"],
    level: "bachelor",
    groups: ["FM", "METENG"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 3",
    teacherId: "d345678",
    title: "Autonomous Robot Navigation using Machine Learning",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 3",
    expirationDate: "2024-10-20T10:45:00.000Z",
    archiveDate: "2024-10-20T10:45:00.000Z",
    id: 27,
  },
  {
    keywords: ["keyword4", "tag4"],
    description: "Description for Thesis Proposal 4",
    coSupervisors: ["marco@company.com", "d567890@polito.it"],
    level: "bachelor",
    groups: ["FM"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 4",
    teacherId: "d234567",
    title: "Enhancing Network Security with Blockchain",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 4",
    expirationDate: "2024-11-25T15:30:00.000Z",
    archiveDate: "2024-11-25T15:30:00.000Z",
    id: 28,
  },
  {
    keywords: ["keyword5", "tag5"],
    description: "Description for Thesis Proposal 5",
    coSupervisors: ["d234567@polito.it", "laura@polito.it"],
    level: "bachelor",
    groups: ["FM", "SOFTENG"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 5",
    teacherId: "d456789",
    title: "Scalable Cloud Solutions for Web Applications",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 5",
    expirationDate: "2024-12-10T09:00:00.000Z",
    archiveDate: "2024-12-10T09:00:00.000Z",
    id: 29,
  },
  {
    keywords: ["keyword30", "tag30"],
    description: "Description for Thesis Proposal 30",
    coSupervisors: ["alice@example.com", "d567890@polito.it"],
    level: "bachelor",
    groups: ["FM", "METENG"],
    requiredKnowledge: "Required knowledge for Thesis Proposal 30",
    teacherId: "d345678",
    title: "THESIS DEMO 3",
    type: "academic research",
    programmes: "Engineering in Electrical Engineering",
    notes: "Additional notes for Thesis Proposal 30",
    expirationDate: "2024-12-10T09:00:00.000Z",
    archiveDate: "2024-12-10T09:00:00.000Z",
    id: 30,
  },
  // ------ VIDEO: ACTIVE THESIS
  {
    title: "Blockchain Technologies in Supply Chain Management",
    coSupervisors: [],
    description: "Study on the application of blockchain technology to improve transparency and efficiency in supply chain management",
    programmes: "Computer Enginnering",
    keywords: ["Blockchain", "Logistics"],
    level: "master",
    id: 31,
    archiveDate: "2025-09-24T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2025-09-24T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "blockchain, logistics, supply chain management",
    type: "Stage",
  },
  {
    title: "Exploring Machine-Learning Algorithms for Sentiment Analysis",
    coSupervisors: ["d456789@polito.it", "d123456@polito.it"],
    description: "Analysis and comparison of different machine learning algorithms for sentiment analysis in social media",
    programmes: "Computer Enginnering",
    keywords: ["Analysis", "Machine-Learning"],
    level: "master",
    id: 32,
    archiveDate: "2025-01-22T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2025-01-22T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "machine learning, computational linguistics, data analysis",
    type: "Stage",
  },
  {
    title: "The Impact of Augmented Reality in Education!",
    coSupervisors: ["d123456@polito.it"],
    description: "Study on the use of augmented reality to improve learning processes and interaction in the educational sector",
    programmes: "Computer Enginnering",
    keywords: ["Augmented-Reality", "Psychology"],
    level: "master",
    id: 33,
    archiveDate: "2021-09-08T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2021-09-08T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "augmented reality, educational technologies, psychology of learning",
    type: "Academic research",
  },
  {
    title: "Cyber-security Measures in Smart Cities",
    coSupervisors: ["d345678@polito.it"],
    description: "Evaluation of the cyber security measures necessary to protect infrastructures and services in smart cities",
    programmes: "Computer Enginnering",
    keywords: ["Cybersecurity"],
    level: "master",
    id: 34,
    archiveDate: "2025-07-27T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2025-07-27T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "cybersecurity, smart networks, IoT",
    type: "Academic research",
  },
  {
    title: "Optimizing Renewable Energy Systems with the IoT",
    coSupervisors: ["d345678@polito.it"],
    description: "Study on optimizing renewable energy systems using the Internet of Things to monitor and manage energy resources",
    programmes: "Computer Enginnering",
    keywords: ["IoT", "Energy"],
    level: "master",
    id: 35,
    archiveDate: "2025-10-17T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2025-10-17T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "renewable energy, IoT, energy systems",
    type: "Stage",
  },
  {
    title: "Biometric Authentication in Enhanced Cybersecurity",
    coSupervisors: ["d123456@polito.it"],
    description: "Exploring biometric authentication technologies to improve cybersecurity and prevent unauthorized access",
    programmes: "Computer Enginnering",
    keywords: ["Networks", "Biometrics"],
    level: "master",
    id: 36,
    archiveDate: "2025-04-19T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2025-04-19T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "biometrics, computer security, networks",
    type: "Stage",
  },
  {
    title: "Data Privacy Compliance in the Era of GDPR",
    coSupervisors: [],
    description: "Analysis of challenges and solutions to ensure compliance with data privacy legislation, in particular the GDPR",
    programmes: "Computer Enginnering",
    keywords: ["GDPR", "Privacy", "Security"],
    level: "master",
    id: 37,
    archiveDate: "2022-01-01T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2022-01-01T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "data privacy, GDPR, information security",
    type: "Academic research",
  },
  {
    title: "Urban Mobility Trends: A Data-Driven Approach",
    coSupervisors: ["d345678@polito.it", "d123456@polito.it"],
    description: "Using data to analyze trends in urban mobility and develop evidence-based strategies to improve transportation in cities",
    programmes: "Computer Enginnering",
    keywords: ["Analysis", "Urbanistic"],
    level: "master",
    id: 38,
    archiveDate: "2025-04-09T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2025-04-09T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "data analysis, urban transport, urban planning",
    type: "Academic research",
  },
  {
    title: "Human-Robot Collaboration in Manufacturing",
    coSupervisors: ["d123456@polito.it"],
    description: "Study on the integration of collaborative robots in production lines to improve efficiency and safety",
    programmes: "Computer Enginnering",
    keywords: ["Robotics", "Automation"],
    level: "master",
    id: 39,
    archiveDate: "2025-11-27T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2025-11-27T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "industrial robotics, automation, workplace safety",
    type: "Stage",
  },
  {
    title: "E-Health Platforms: Challenges and Opportunities",
    coSupervisors: ["d345678@polito.it"],
    description: "Analysis of challenges and opportunities in implementing e-health platforms to improve the management and delivery of medical care",
    programmes: "Computer Enginnering",
    keywords: ["Security", "e-Health"],
    level: "master",
    id: 40,
    archiveDate: "2022-01-01T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2022-01-01T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "e-health, medical IT, health data security",
    type: "Stage",
  },
  // ------ VIDEO: ARCHIVED THESIS
  {
    title: "Cognitive Computing for Financial Forecasting",
    coSupervisors: ["d123456@polito.it"],
    description: "Exploring cognitive processing applications in financial forecasting and market analysis models",
    programmes: "Computer Enginnering",
    keywords: ["Finance", "Analysis"],
    level: "master",
    id: 41,
    archiveDate: "2020-01-01T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2020-01-01T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "finance, cognitive processing, financial data analysis",
    type: "Academic research",
  },
  {
    title: "3D-Printing in Aerospace: Innovations and Challenges",
    coSupervisors: [],
    description: "Study on using 3D printing to innovate aerospace component manufacturing and associated challenges",
    programmes: "Computer Enginnering",
    keywords: ["3D", "Materials"],
    level: "master",
    id: 42,
    archiveDate: "2020-12-31T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2020-12-31T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "3D printing, aerospace engineering, advanced materials",
    type: "Academic research",
  },
  {
    title: "Smart Agriculture: Precision Farming with IoT",
    coSupervisors: [],
    description: "Application of IoT technologies to improve precision in agriculture, optimizing the use of resources and increasing yield",
    programmes: "Computer Enginnering",
    keywords: ["Agricolture", "IoT"],
    level: "master",
    id: 43,
    archiveDate: "2020-09-28T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2020-09-28T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "agriculture, IoT, agricultural sensors",
    type: "Stage",
  },
  {
    title: "Artificial Intelligence Development: Ethical Considerations",
    coSupervisors: ["d123456@polito.it"],
    description: "Examination of ethical issues related to the development and implementation of artificial intelligence in various industries",
    programmes: "Computer Enginnering",
    keywords: ["AI"],
    level: "master",
    id: 44,
    archiveDate: "2020-12-25T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "More info on my webSite",
    expirationDate: "2020-12-25T14:15:06.473Z",
    groups: ["METENG", "SOFTENG"],
    requiredKnowledge: "computer ethics, artificial intelligence, data protection laws",
    type: "Stage",
  },
  {
    title: "Virtual Reality for Therapeutic Interventions",
    coSupervisors: ["d345678@polito.it"],
    description: "Evaluation of the effectiveness of using virtual reality in medical therapies and treatments",
    programmes: "Computer Enginnering",
    keywords: ["VR", "Medicine", "Psychology"],
    level: "master",
    id: 45,
    archiveDate: "2020-08-15T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2020-08-15T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "virtual reality, medicine, clinical psychology",
    type: "Academic research",
  },
  {
    title: "Cryptography: The impact of Quantum Computing",
    coSupervisors: [],
    description: "Analysis of the implications of quantum computing on current cryptographic practices and data security",
    programmes: "Computer Enginnering",
    keywords: ["Cryptography", "Cybersecurity"],
    level: "master",
    id: 46,
    archiveDate: "2020-11-02T14:15:06.473Z",
    teacherId: "p0000001",
    notes: "",
    expirationDate: "2020-11-02T14:15:06.473Z",
    groups: ["METENG"],
    requiredKnowledge: "quantum computing, cryptography, cybersecurity",
    type: "Academic research",
  }
];

export default thesisProposals;