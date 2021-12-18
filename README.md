# Lusha Live App

## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Seed DB

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

## Tasks list
- run client and server and fix issues until they both works
### client 
- when selecting a house from houses page, create house page that will
    - create house page that will display house data
    - house data will contain a list of swornMembers for that house. 
    - use an open api anapioficeandfire https://anapioficeandfire.com/Documentation to fetch all sworn members
    - fetch all sworn members from the anapioficeandfire character api (example : https://anapioficeandfire.com/api/characters/583)
    - fetch should be asynchronous, and by order - the order will be set by their index in the swornMembers array. so if you have 3 swornMembers in index 0, 1, 2 with id's  200, 100, 300 than fetch them all but once 200 return render it to the screen, then 100 and lastly 300)
    - data for sworn member should look like this : { name, url, gender, culture, born, died, titles, aliases}
    - implement a save members to DB functionality
- create a Characters page
    - implement a search box that will search member by name (bonus - add debounce)
    - create a component to display the following data: { name, url, gender, culture, born, died, titles, aliases}
- refactor API calls 
