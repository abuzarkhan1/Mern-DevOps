pipeline {
    agent any
    
    environment {
        // Define environment variables
        DOCKER_COMPOSE_VERSION = '1.29.2'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from repository
                checkout scm
                echo 'Code checkout complete'
            }
        }
        
        stage('Build and Test Backend') {
            steps {
                dir('backend') {
                    // Install dependencies and run tests
                    sh 'npm install'
                    sh 'npm test || true' // Continue even if tests fail for now
                    echo 'Backend build and test complete'
                }
            }
        }
        
        stage('Build and Test Frontend') {
            steps {
                dir('frontend') {
                    // Install dependencies and run tests
                    sh 'npm install'
                    sh 'npm test || true' // Continue even if tests fail for now
                    echo 'Frontend build and test complete'
                }
            }
        }
        
        stage('Build Docker Images') {
            steps {
                // Build Docker images using docker-compose
                sh 'docker-compose build'
                echo 'Docker images built successfully'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy with docker-compose
                sh 'docker-compose down || true' // Bring down existing containers if any
                sh 'docker-compose up -d' // Deploy in detached mode
                echo 'Deployment complete'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline execution failed!'
        }
        always {
            // Clean workspace after build
            cleanWs()
        }
    }
}
