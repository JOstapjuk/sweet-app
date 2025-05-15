pipeline {
    agent any

    stages {

        stage('Ehita Docker image') {
            steps {
                sh 'docker build -t sweet-app .'
		}
	}
        stage('Käivita konteiner') {
            steps {
                sh 'docker run -d -p 3000:3000 --name sweet-container sweet-app'
		}        
	}

        stage('Testi endpointi') {
            steps {
                sh '''
                  curl http://localhost:3000/sweet
                '''
            }
        }
    }
}
