pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                sh 'git clone https://github.com/SindhujaShaga/DevOps_React_App.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '''
                cd DevOps_React_App
                docker build -t devops_sindhuja:v1 .
                '''
            }
        }
        stage('Deploy Container') {
            steps {
                sh '''
                docker run -d -p 80:3000 devops_sindhuja:v1
                '''
            }
        }
    }
}