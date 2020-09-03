pipeline{
  agent{
     docker{
      image 'docker:latest'
    }
  }
  
  stages{
    stage('Build'){
      steps{
        sh '''
          npm install
        ''' 
      }
    }
    stage('Test'){
      steps{
        echo "Testing...."
      }
    }
    stage('Deploy'){
      steps{
        echo "Deploy..."
      }
    }
  }
}