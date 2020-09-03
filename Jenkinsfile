pipeline{
  agent{
     kubernetes{
       defaultContainer 'jnlp'
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