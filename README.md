## Objective 
Create a basic web application using React/Next.js and GraphQL that mimics a contacts list and contact card like the ones found in your phone. 

## Expectations
- Users should be able to view/scroll their contact list
- Users should be able to add new contacts 
- If a user clicks on a contact, they should be routed to the specific contact’s page 
-	Users should be able to view said contacts details and perform edits to the information
-	Users should be able to remove contacts from their list

## Evaluation Criteria
-	Proper use of React / Next.js and GraphQL
-	Proper implantation of CRUD functionality 
-	Code readability and organization

### Bonus Points
-	Add “search by name” functionality 

### Installation
- Clone the repo and run `npm install` to install dependencies
- Update the `aws-exports.js` file with the information provided in the email
- Run `npm run dev` to start the application
- Navigate to `http://localhost:3000/` to view the application

## Backend
The backend is using AWS AppSync and DynamoDB and has already been setup. The API provides 2 queries and 3 mutation. You can find the schema in the `schema.graphql` file found in the **graphql** folder for reference. 

### Apollo Client
We are using Apollo Client to connect to our API and the `apolloConfig.tsx` has already been setup for you and will be ready to use once you update the `aws-exports.js` file with the information provided in the email.

### Styling 
SASS is already setup for you. You can find the styles in the **styles** folder and ready for your customization.

### Deliverables
-	Source code
-	Deployed application URL
-	Brief documentation on how to run and test your application

