pipeline {
    agent any

    environment {
        APP_DIR = "/opt/chatbot"
        PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/lvijaypandi/chatbot.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh """
                cd $APP_DIR
                npm install
                """
            }
        }

        stage('Stop Existing App') {
            steps {
                sh """
                if pgrep -f "node server.js"; then
                    pkill -f "node server.js"
                fi
                """
            }
        }

        stage('Start App') {
            steps {
                sh """
                cd $APP_DIR
                nohup node server.js > app.log 2>&1 &
                """
            }
        }
    }

    post {
        success {
            echo "Chatbot deployed successfully!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}

