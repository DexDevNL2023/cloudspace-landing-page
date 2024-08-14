import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent {
  heroContent = {
    title: "Join",
    spanText: "our team",
    description: "Explore career opportunities at InfoSys Consulting. We are looking for passionate talents to help us shape the future of technology. Browse our job openings and apply to join our innovative team.",
    buttonText: "View Jobs",
    buttonLink: "careers",
    backgroundImage: 'assets/img/banners/banner-carrer.jpg'
  };
  careerContent = [
    {
      title: "DevOps Engineer",
      description: "This position, reporting to the CTO, will work with our CTO and development team leads on DevOps projects and practices.",
      location: "100% Remote",
      responsibilities: [
        "Design, implement, and test CloudSpace's build, deployment, and configuration management processes.",
        "Build and test automation tools for infrastructure provisioning.",
        "Manage code deployments across all environments.",
        "Monitor metrics and develop ways to improve.",
        "Build, maintain, and monitor configuration standards.",
        "Provide daily management and administration of projects.",
        "Build and maintain application monitoring and logging infrastructure.",
        "Improve infrastructure and application development.",
        "Manage CI and CD tools with the team.",
        "Document, design, and update various development processes and practices."
      ],
      qualifications: [
        "4-year technical degree or equivalent experience.",
        "2+ years of previous experience as a DevOps Engineer.",
        "Hands-on experience with configuration management and application deployment tools such as Ansible.",
        "Familiarity with Docker, Kubernetes, Prometheus, Grafana, and AWS.",
        "Strong communication skills and attention to detail."
      ]
    },
    {
      title: "Cybersecurity Engineer",
      description: "InfoSys Consulting is seeking a Cybersecurity Engineer (Cyber Defense Infrastructure Support) for our client site in Washington, DC.",
      location: "Washington, DC",
      responsibilities: [
        "Design, develop, integrate, implement, operate, and analyze cybersecurity technologies.",
        "Provide support to ensure that products and services meet all Information Assurance policies/procedures, network defense requirements, and best practices.",
        "Support protection activities and response actions for government IT systems."
      ],
      qualifications: [
        "BS/BA and 8+ years of experience in the CND discipline, or an MA/MS with 6+ years of relevant experience. A candidate without a degree but with 12+ years of relevant experience may also be considered.",
        "6+ years of experience in designing, developing, integrating, implementing, operating, and analyzing cybersecurity technologies.",
        "Preferred certifications: CISSP, GCIA, CEH, CNDA, GCIH, or CSIH.",
        "Prior experience with Splunk, auditing, and cloud technologies is highly desired."
      ]
    },
    {
      title: "Cloud Network Engineer",
      description: "The role of Cloud/Infrastructure Engineer is to assist the client in maintaining the current network and cloud infrastructure.",
      location: "Remote with up to 25% travel to client sites around the Washington DC area.",
      responsibilities: [
        "Interact with clients, vendors, and technical staff to analyze business and technical needs related to network and cloud infrastructure.",
        "Configure, test, and produce detailed deployment documentation within specified deadlines.",
        "Work closely with the Project Manager to establish and deliver consistent technical direction, collect and analyze performance metrics, and establish and enforce service level agreements.",
        "Document engineering standards and proposals, lead or assist in the development of security architecture/engineering designs, changes, and configuration management.",
        "Strong interpersonal and customer service skills, in addition to the ability to effectively manage and prioritize individual projects and tasks. Superior written and oral communication skills. Vendor management skills required."
      ],
      qualifications: [
        "5+ years of experience in large-scale network operations; Routers, Switches, and Load Balancers.",
        "2+ years of hands-on operational experience with Amazon Web Services (AWS). AWS certification is strongly recommended.",
        "Degree in Computer Science or equivalent professional experience, with a minimum of 8-10 years of hands-on experience in implementing and administering complex, multi-site, multi-vendor networks in a geographically distributed environment.",
        "AWS Operational Experience: 2 years (Required).",
        "Desired certifications: CCNP, ITIL, AWS Certified Cloud Practitioner, AWS Certified Solutions Architect Associate."
      ]
    },
    {
      title: "Frontend Developer",
      description: "We are looking for a talented Frontend Developer to join our development team. You will work on exciting projects, using modern web technologies to create attractive and functional user interfaces.",
      location: "Remote with possible on-site presence as needed.",
      responsibilities: [
        "Develop interactive and responsive web applications using HTML, CSS, and JavaScript.",
        "Collaborate with UX/UI designers to translate designs into functional interfaces.",
        "Ensure application compatibility across different browsers and devices.",
        "Participate in code reviews and continuous improvement of development processes.",
        "Debug and optimize web application performance."
      ],
      qualifications: [
        "Degree in Computer Science or equivalent experience.",
        "2+ years of experience in frontend development.",
        "Proficiency in web technologies such as HTML, CSS, JavaScript, and modern frameworks like React or Angular.",
        "Experience with version control tools like Git.",
        "Problem-solving and communication skills."
      ]
    },
    {
      title: "IT Project Manager",
      description: "We are seeking an IT Project Manager to oversee the management and execution of complex technology projects. You will be responsible for coordinating teams, tracking timelines and budgets, and communicating with stakeholders.",
      location: "Washington, DC",
      responsibilities: [
        "Manage and coordinate all aspects of IT projects from start to finish.",
        "Develop detailed project plans and timelines.",
        "Track budgets and resources.",
        "Communicate regularly with stakeholders to ensure alignment with project objectives.",
        "Assess risks and develop mitigation plans."
      ],
      qualifications: [
        "Degree in Project Management or related field.",
        "5+ years of experience in IT project management.",
        "PMP certification or similar is a plus.",
        "Experience with Agile and Scrum methodologies.",
        "Exceptional organizational and communication skills."
      ]
    },
    {
      title: "Artificial Intelligence Analyst",
      description: "We are looking for an Artificial Intelligence Analyst to develop AI models and provide data-driven insights. You will work with our teams to design and implement innovative AI solutions.",
      location: "100% Remote",
      responsibilities: [
        "Develop and test AI and machine learning models.",
        "Analyze large amounts of data to extract relevant insights.",
        "Collaborate with development teams to integrate AI solutions into existing products.",
        "Ensure the quality and efficiency of AI models.",
        "Stay up-to-date with the latest advancements in AI and machine learning."
      ],
      qualifications: [
        "Degree in Computer Science, Mathematics, or a related field.",
        "3+ years of experience in developing AI and machine learning models.",
        "Experience with AI tools and frameworks such as TensorFlow, PyTorch, or scikit-learn.",
        "Skills in data analysis and programming in Python.",
        "Excellent problem-solving and communication skills."
      ]
    }
  ];  
  avatars = [
    'assets/img/blocks/avatars/avatar-f-1.png',
    'assets/img/blocks/avatars/avatar-f-2.png',
    'assets/img/blocks/avatars/avatar-m-1.png',
    'assets/img/blocks/avatars/avatar-m-2.png',
    'assets/img/blocks/avatars/avatar-f-3.png'
  ];

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }
}
