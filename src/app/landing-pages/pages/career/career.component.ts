import { MainComponent } from '../../main/main.component';
import { CareerService } from './../../../utilities/services/career.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent {

  heroContent: { title: string, spanText?: string, description?: string, buttonText?: string, buttonLink?: string } = {
    title: 'Career',
  };
  careerContent: { id: number, title: string, description: string, location: string, responsibilities: string[], qualifications: string[] }[] = [
    {
      id: 1,
      title: `DevOps Engineer`,
      description: `This position, reporting to the Chief Technology Officer (CTO), will work with our CTO and development team leaders on DevOps projects and practices.`,
      location: `100% Remote`,
      responsibilities: [
        `Design, implement and test CloudSpace’s software build, deployment, and configuration management.`,
        `Build and test automation tools for infrastructure provisioning.`,
        `Handle code deployments in all environments.`,
        `Monitor metrics and develop ways to improve.`,
        `Build, maintain, and monitor configuration standards.`,
        `Maintain day-to-day management and administration of projects.`,
        `Build and maintain application monitoring and logging infrastructure.`,
        `Improve infrastructure development and application development.`,
        `Manage CI and CD tools with the team.`,
        `Document, design and update various development processes and practices.`
      ],
      qualifications: [
        `4-year technical degree or equivalent experience`,
        `2 years of prior experience as DevOps engineer`,
        `Hands-on experience with configuration management and application deployment tools like Ansible`,
        `Familiarity with Docker, Kubernetes, Prometheus, Grafana, and AWS`,
        `Strong communication skills and attention to detail`
      ]
    },
    {
      id: 2,
      title: `Cyber Security Engineer`,
      description: `CloudSpace is seeking a Cyber Security Engineer (Cyber Defense Infrastructure Support) for our customer site in Washington, DC.`,
      location: `Washington, DC`,
      responsibilities: [
        `Design, development, integration, implementation, operation and analysis of cyber security technologies.`,
        `Provide support to ensure products and services comply with all appropriate Information Assurance policies/procedures, network defense requirements and best practices.`,
        `Provide support protection activities and response actions for government Information Technology systems.`
      ],
      qualifications: [
        `BS/BA and 8+ years of experience in the CND discipline OR a MA/MS and 6+ years of relevant work experience. A candidate without a degree who has 12+ years of relevant experience can also be considered.`,
        `6+ years of design, development, integration, implementation, operation, and analysis of cyber security technologies.`,
        `Preferred Certifications: Active CISSP, GCIA, CEH, CNDA, GCIH or CSIH certification`,
        `Previous knowledge of Splunk, auditing and cloud technologies highly desired`
      ]
    },
    {
      id: 3,
      title: `Cloud Network Engineer`,
      description: `The role of Cloud/Infrastructure Engineer is to help client to maintain the current network and cloud infrastructure.`,
      location: `Remote job with up to 25% travel to client sites around the Washington DC metro.`,
      responsibilities: [
        `Interface with customers, vendors, and other technical staff to analyze business and technical requirements relating to the Network and cloud infrastructure.`,
        `Responsible to configure, test and produce low-level and high-level documentation of the deployment within the stipulated time frame.`,
        `Works closely with the Project Manager to establish and deliver consistent technical direction, collect and analyze performance metrics, establish and enforce service level agreement.`,
        `Document engineering standards and proposals, leads or assists in the development of security architecture/engineering designs, changes, and configuration management.`,
        `Strong interpersonal and customer service skills in addition to the ability to effectively manage and prioritize individual projects and tasks. Possess superior written and oral communication skills. Solid vendor management skills are required.`
      ],
      qualifications: [
        `5+ years of enterprise scale Network operations experience; Routers, Switches, and Load Balancers.`,
        `2+ years of hands-on operational experience with Amazon Web Services (AWS). AWS Certification a strong plus.`,
        `Bachelor’s degree in computer science or equivalent work experience, with a minimum of 8-10 years of hands-on experience in the implementation and administration of complex, multi-location, multi-vendor, converged voice/data networks in a geographically distributed environment.`,
        `AWS hands-on operational: 2 years (Required).`,
        `Desired Certifications: CCNP, ITIL, AWS Certified Cloud Practitioner, AWS Certified Solutions Architect Associate.`
      ]
    }
  ];

  constructor(public appMain: MainComponent, private careerService: CareerService) { }

  ngOnInit(): void {
    this.loadCareers();
  }

  loadCareers() {
    this.careerService.getCareerData().subscribe(
      (data) => {
        this.careerContent = data;
      },
      (error) => {
        console.error('Error fetching career data:', error);
      }
    );
  }
}
