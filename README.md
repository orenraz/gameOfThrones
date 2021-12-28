# Lusha Live App  

The repo composed of:
- react app client. 
- express backend.
- mongoDB
- Docker container to run the DB + app
- mongoose orm

## Requirements  
  
 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)  
 - [Yarn](https://yarnpkg.com/en/docs/install)  
  
## Getting Started  
  
#### Running Docker  
from the root folder (LushaLive) run the compose.sh script  
it will create 2 dockers with mongoDB and the backend app  
  
#### Seed DB  
this will seed the DB with predefined 9 houses data   
  
```bash  
cd backend  
node seed.js  
```  
  
#### Running Client  
  
```bash  
cd client  
yarn  
yarn start  
```  
  
#### Running Backend  
  
```bash  
cd backend  
npm i  
npm start  
```  
  
#### connecting to mongo docker with Robo 3T  
create a new connection:  
 - Connection  
     - address: localhost  
     - port: 27018  
 - Authentication  
     - Perform authentication: checked  
     - user: root  
     - password: 123456  
     - Auth Mechanism: SCRAM-SHA-1  
  
 
