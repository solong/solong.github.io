import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
  techs: Array<{name: string, img: string, desc: string}> = [
  {name: 'Spring', img: '/assets/img/logo/spring.svg', desc: 'The Spring Framework is an application framework and inversion of control container for the Java platform. Spring allows us to rapidly develop RESTful services'},
  {name: 'Java', img: '/assets/img/logo/java.svg', desc: 'Java is our primary development language. It is the #1 programming language for IoT, enterprise architecture and cloud computing'},
  {name: 'AWS', img: '/assets/img/logo/aws.svg', desc: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. We strongly recommend targeting deployments to this platform.'},
  {name: 'Kubernetes', img: '/assets/img/logo/kubernetes.svg', desc: 'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications'},
  {name: 'Angular', img: '/assets/img/logo/angular.svg', desc: 'Angular is a platform for building mobile and desktop web applications'},
  {name: 'Ansible', img: '/assets/img/logo/vg', desc: 'Ansible is the simplest way to automate apps and IT infrastructure'},
    {name: 'Terraform', img: '/assets/img/logo/terraform.svg', desc: 'Terraform is an open-source infrastructure as code software tool created by HashiCorp'},
    {name: 'Web Development', img: '/assets/img/logo/html5.svg', desc: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.'},
    {name: 'GitLab', img: '/assets/img/logo/gitlab.svg', desc: 'GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features'},
    {name: 'RESTful APIs', img: '/assets/img/logo/json.svg', desc: 'Representational state transfer is a de-facto standard for a software architecture for interactive applications that typically use multiple Web services'}

  ];

constructor() { }

  ngOnInit(): void {
  }

}
