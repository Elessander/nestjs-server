pipeline {
    agent any
    environment {
        PATH = "C:\\Program Files\\nodejs\\node.exe;${env.PATH}"
    }
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('build image') {
            steps {
                sh 'docker build -t nestjs-server:1.0 .'
            }
        }
        stage('docker push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'docker login -u $elessanderunc -p $lc57910p'
                    sh 'docker tag elessanderunc/nestjs-server:1.0'
                    sh 'docker push elessanderunc/nestjs-server:1.0'
                    sh 'docker logout'
                }
            }
        }
    }
}
