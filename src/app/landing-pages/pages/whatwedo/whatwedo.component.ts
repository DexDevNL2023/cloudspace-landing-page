import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {
  heroContent = {
    title: "Our Services",
    spanText: "of Quality",
    description: "Discover how our services can transform your business. We are committed to providing innovative solutions tailored to your specific needs.",
    buttonText: "Learn more",
    buttonLink: "/services",
    backgroundImage: ''
  };
  whatwedoContents = [
    {
      id: 1,
      title: "What Can Cloud Computing Do for You?",
      description: [
        {
          text: "Our cloud computing services help businesses transition smoothly to cloud platforms, ensuring scalability and efficiency."
        },
        {
          text: "From cloud strategy to deployment, we customize solutions that align with your business goals and security needs."
        }
      ],
      imageUrl: "assets/img/services/cloud_transformation.webp",
      sections: [
        {
          title: "Technology",
          description: "We leverage advanced cloud technologies to enhance the speed, security, and efficiency of your infrastructure.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_architecture.webp", title: "Cloud Architecture", description: "Designing robust and scalable cloud infrastructures.", color: "blue" },
            { imgSrc: "assets/img/services/cloud_automation.png", title: "DevOps", description: "Implementing DevOps practices to streamline development and operations, ensuring faster delivery and continuous improvement.", color: "dark-blue" }            
          ]
        },
        {
          title: "Services",
          description: "Our cloud services cover everything from initial strategy to ongoing management and optimization.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_migration.jpg", title: "Cloud Migration", description: "Seamless migration of data and applications to the cloud.", color: "blue" },
            { imgSrc: "assets/img/services/cloud_management.jpg", title: "Cloud Management", description: "Comprehensive management of cloud environments.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "We collaborate with leading cloud service providers to deliver the best solutions tailored to your needs.",
          subSections: [
            { imgSrc: "assets/img/services/cloud_partners.webp", title: "Cloud Partnerships", description: "Leveraging partnerships for enhanced cloud solutions.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "How Do We Protect Your Data with Cybersecurity?",
      description: [
        {
          text: "Our cybersecurity services safeguard your business with cutting-edge security solutions designed to defend against evolving threats."
        },
        {
          text: "We integrate security measures into every aspect of your business to ensure robust protection."
        }
      ],
      imageUrl: "assets/img/services/cyber_security.png",
      sections: [
        {
          title: "Technology",
          description: "Our security technologies protect your digital assets from a variety of threats.",
          subSections: [
            { imgSrc: "assets/img/services/security_architecture.png", title: "Security Architecture", description: "Designing secure systems and networks.", color: "blue" },
            { imgSrc: "assets/img/services/threat_detection.png", title: "Threat Detection", description: "Quickly identifying and neutralizing threats.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "We provide a range of cybersecurity services to protect your organization at every level.",
          subSections: [
            { imgSrc: "assets/img/services/incident_response.png", title: "Incident Response", description: "Rapid response to security breaches.", color: "blue" },
            { imgSrc: "assets/img/services/security_assessment.png", title: "Security Assessment", description: "Comprehensive evaluation of your security posture.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "Partnering with leading security providers to strengthen your defenses.",
          subSections: [
            { imgSrc: "assets/img/services/security_partners.png", title: "Security Partnerships", description: "Leveraging partnerships for enhanced security solutions.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Engineering the Future of Network Solutions",
      description: [
        {
          text: "Our network engineering services ensure your business has a reliable and secure infrastructure that supports growth and innovation."
        },
        {
          text: "We design and implement network solutions that maximize performance and availability."
        }
      ],
      imageUrl: "assets/img/services/network.png",
      sections: [
        {
          title: "Technology",
          description: "We utilize cutting-edge network technologies to deliver reliable and secure connectivity.",
          subSections: [
            { imgSrc: "assets/img/services/network_design.png", title: "Network Design", description: "Creating efficient network architectures.", color: "blue" },
            { imgSrc: "assets/img/services/network_security.png", title: "Network Security", description: "Protecting networks from unauthorized access.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Our network services encompass design, deployment, and management to ensure optimal performance.",
          subSections: [
            { imgSrc: "assets/img/services/network_management.png", title: "Network Management", description: "Managing and monitoring network performance.", color: "blue" },
            { imgSrc: "assets/img/services/network_optimization.png", title: "Network Optimization", description: "Improving network efficiency and speed.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "We collaborate with leading network technology providers to deliver the best solutions.",
          subSections: [
            { imgSrc: "assets/img/services/network_partners.png", title: "Network Partnerships", description: "Building strong partnerships for superior network solutions.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Transform Your Skills with Our Training Programs",
      description: [
        {
          text: "Our training services are designed to equip your team with the skills needed to excel in today's competitive environment."
        },
        {
          text: "We offer customized training programs that bridge the gap between current skills and future needs."
        }
      ],
      imageUrl: "assets/img/services/training.png",
      sections: [
        {
          title: "Technology",
          description: "Our training programs cover a wide range of technology topics to enhance your team's capabilities.",
          subSections: [
            { imgSrc: "assets/img/services/tech_training.png", title: "Tech Training", description: "Up-to-date training on the latest technologies.", color: "blue" },
            { imgSrc: "assets/img/services/soft_skills.png", title: "Soft Skills", description: "Developing essential interpersonal skills.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "We offer a comprehensive suite of training services to meet your organization's needs.",
          subSections: [
            { imgSrc: "assets/img/services/corporate_training.png", title: "Corporate Training", description: "Customized training for corporate teams.", color: "blue" },
            { imgSrc: "assets/img/services/individual_training.png", title: "Individual Training", description: "Personalized training programs for individuals.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "Collaborating with industry leaders to deliver cutting-edge training solutions.",
          subSections: [
            { imgSrc: "assets/img/services/training_partners.png", title: "Training Partnerships", description: "Partnering with experts to deliver top-notch training.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Web Development Tailored to Your Business",
      description: [
        {
          text: "Our web development services provide businesses with innovative and robust web solutions that enhance user experience and engagement."
        },
        {
          text: "We tailor each project to meet the unique needs of our clients, ensuring optimal functionality and aesthetics."
        }
      ],
      imageUrl: "assets/img/services/web-development.jpg",
      sections: [
        {
          title: "Technology",
          description: "Using the latest web technologies to build high-performance, secure web applications.",
          subSections: [
            { imgSrc: "assets/img/services/frontend_development.png", title: "Frontend Development", description: "Creating engaging user interfaces.", color: "blue" },
            { imgSrc: "assets/img/services/backend_development.png", title: "Backend Development", description: "Building robust backend systems.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Our web development services encompass design, development, and optimization for maximum performance.",
          subSections: [
            { imgSrc: "assets/img/services/web_design.png", title: "Web Design", description: "Creating modern and attractive web designs.", color: "blue" },
            { imgSrc: "assets/img/services/ecommerce.png", title: "E-commerce", description: "Developing high-performance e-commerce platforms.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "Collaborating with technology leaders to deliver advanced web solutions.",
          subSections: [
            { imgSrc: "assets/img/services/web_partners.png", title: "Web Partnerships", description: "Working with leading partners for quality web solutions.", color: "dark-blue" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Application Development",
      description: [
        {
          text: "Our application development services focus on creating innovative, user-friendly, and scalable applications tailored to your business needs."
        },
        {
          text: "From concept to deployment, we work closely with you to bring your vision to life."
        }
      ],
      imageUrl: "assets/img/services/app-development.jpg",
      sections: [
        {
          title: "Technology",
          description: "Utilizing the latest technologies to create powerful and efficient applications.",
          subSections: [
            { imgSrc: "assets/img/services/mobile_dev.png", title: "Mobile Development", description: "Building responsive and engaging mobile apps.", color: "blue" },
            { imgSrc: "assets/img/services/web_dev.png", title: "Web Development", description: "Developing feature-rich web applications.", color: "dark-blue" }
          ]
        },
        {
          title: "Services",
          description: "Our services include end-to-end application development, from strategy and design to testing and deployment.",
          subSections: [
            { imgSrc: "assets/img/services/ui_ux.png", title: "UI/UX Design", description: "Crafting intuitive and visually appealing interfaces.", color: "blue" },
            { imgSrc: "assets/img/services/qa_testing.png", title: "QA & Testing", description: "Ensuring the highest quality standards with rigorous testing.", color: "dark-blue" }
          ]
        },
        {
          title: "Partners",
          description: "Partnering with top technology providers to deliver cutting-edge applications.",
          subSections: [
            { imgSrc: "assets/img/services/app_partners.png", title: "App Development Partnerships", description: "Collaborating with industry leaders for top-notch application solutions.", color: "dark-blue" }
          ]
        }
      ]
    }
  ];  

  whatwedoContent: any; // This will hold the specific content to display
  whatwedoId: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    this.route.paramMap.subscribe(params => {
        this.whatwedoId = +params.get("id");
        switch (this.whatwedoId) {
          case 1:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-cloud.webp';
            break;
          case 2:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-secure.jpg';
            break;
          case 3:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-training.jpg';
            break;
          case 4:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-networks.jpg';
            break;
          case 5:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-web.jpg';
            break;
          case 6:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-mobile.jpg';
            break;
          case 7:
            this.heroContent.backgroundImage = 'assets/img/banners/banner-iai.jpg';
            break;
          default:
            this.heroContent.backgroundImage = '';
            break;
        }
        this.loadWhatwedos();
    });
  }
 
  loadWhatwedos() {
    // Trouver le contenu basé sur l'id
    this.whatwedoContent = this.whatwedoContents.find(content => content.id === this.whatwedoId);
    
    // Assurez-vous que whatwedoContent est défini
    if (!this.whatwedoContent) {
      console.error("Content not found for id:", this.whatwedoId);
    }
    console.log(this.whatwedoContent);
  }
}
