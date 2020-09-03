pipeline{
  agent{
     docker{
      image 'node:latest'
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