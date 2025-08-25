pipeline {
    agent any

    environment {
        APP_DIR = "/opt/chatbot"
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
                sudo chown -R jenkins:jenkins $APP_DIR
                npm install
                """
            }
        }

        stage('Restart App with PM2') {
            steps {
                sh """
                cd $APP_DIR
                if pm2 list | grep -q chatbot; then
                    pm2 restart chatbot
                else
                    pm2 start server.js --name chatbot
                fi
                pm2 save
                """
            }
        }
    }

    post {
        success {
            echo "Chatbot deployed successfully with PM2!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}

