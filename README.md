# End-to-End Frontend Deployment with CI/CD Pipeline

This project demonstrates a complete end-to-end deployment of a frontend application using a robust CI/CD pipeline. The pipeline automates the process from code commit to deployment, ensuring a streamlined and efficient workflow.

---

## 📜 Description

The primary goal of this project is to showcase a practical implementation of DevOps principles by setting up a CI/CD pipeline. This pipeline automatically builds a Docker image of a frontend application, and deploys it as a container on an AWS EC2 instance. This project is ideal for anyone looking to understand the fundamentals of continuous integration and continuous deployment.

---

## ✨ Features

* **Automated Builds:** Automatically builds the application upon code changes.
* **Containerization:** Uses Docker to package the application and its dependencies into a container for consistent deployments.
* **Continuous Deployment:** Automatically deploys the new version of the application without manual intervention.
* **Cloud-Based:** Leverages AWS for scalable and reliable infrastructure.

---

## 🛠️ Technologies Used

* **GitHub:** For version control and code repository management.
* **Docker:** For containerizing the frontend application.
* **Jenkins:** As the automation server to create and manage the CI/CD pipeline.
* **AWS EC2:** For hosting the Jenkins server and the deployed application.

---

## 📋 Prerequisites

Before you begin, ensure you have the following:

* An AWS account.
* Basic knowledge of Git, Docker, and Jenkins.
* A frontend application ready to be deployed.

---

## 🚀 Installation and Setup

1.  **Launch an AWS EC2 Instance:**
    * Create an EC2 instance with an Amazon Linux 2 AMI (or a similar Red Hat-based distribution).
    * Choose an instance type that can handle Jenkins and Docker (e.g., `t2.medium`).
    * Configure the security group to allow inbound traffic on the following ports:
        * **SSH (port 22):** For accessing the instance.
        * **HTTP (port 80):** For accessing the deployed application.
        * **Custom TCP (port 8080):** For accessing the Jenkins dashboard.

2.  **Install Docker:**
    * Connect to your EC2 instance via SSH.
    * Update the package manager: `sudo yum update -y`
    * Install Docker: `sudo yum install docker -y`
    * Start the Docker service: `sudo service docker start`
    * Add the `ec2-user` to the `docker` group to run Docker commands without `sudo`: `sudo usermod -aG docker ec2-user`

3.  **Install Jenkins:**
    * Add the Jenkins repository to your system.
    * Install Java (a prerequisite for Jenkins): `sudo yum install java-17-amazon-corretto -y`
    * Install Jenkins: `sudo yum install jenkins -y`
    * Enable the Jenkins service to start on boot: `sudo systemctl enable jenkins`
    * Start the Jenkins service: `sudo systemctl start jenkins`
    * Add the `jenkins` user to the `docker` group: `sudo usermod -aG docker jenkins`
    * Restart the Jenkins service: `sudo systemctl restart jenkins`

4.  **Configure Jenkins:**
    * Access the Jenkins dashboard by navigating to `http://<your-ec2-instance-public-ip>:8080`.
    * Retrieve the initial administrator password from `/var/lib/jenkins/secrets/initialAdminPassword`.
    * Install the suggested plugins.
    * Create a new admin user.
    * Install the **Docker** and **Docker Commons** plugins.

---

## ⚙️ CI/CD Pipeline Configuration

1.  **Create a New Pipeline in Jenkins:**
    * From the Jenkins dashboard, create a new item and select "Pipeline".
    * Give your pipeline a name (e.g., "frontend-deployment").

2.  **Define the Pipeline Stages:**
    * Use the following stages in your Jenkinsfile or in the pipeline configuration script box:
        * **Clone Code:** Clone the source code from your GitHub repository.
        * **Build Docker Image:** Build a Docker image of your application using the Dockerfile in your repository.
        * **Deploy Container:** Run a Docker container from the newly built image, mapping the container's port to port 80 on the EC2 instance.

3.  **Run the Pipeline:**
    * Save the pipeline configuration and manually trigger the first build.
    * Once the pipeline runs successfully, your application will be accessible via your EC2 instance's public IP address.

---

## ▶️ Usage

After the pipeline has been successfully executed, you can access your deployed frontend application by navigating to the public IP address of your EC2 instance in a web browser.

---
