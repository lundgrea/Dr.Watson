## Dr Watson 

### Overview - Mod 3 Final Exam

This application uses the [Watson API](https://cloud.ibm.com/docs/services/assistant?topic=assistant-api-overview) to allow Turing students to give feedback throughout the week to the school staff. The original code base was intentionally built out with a couple of bugs and it was my goal to fix the bugs and iterate on the application as laid out below.

### Set Up

 - Clone down this repo.
 - Install the dependencies
 - Start up the application using `npm start`.

### Testing

You can run the full program test suite with `npm test`.

### Iteration

#### Iteration 1

 - [ ] Currently there is no verification to make sure that a user has filled out all of the inputs on the *WelcomeModal*.  If a user *checks in* with Dr. Watson without selecting a `feeling`, an error message comes up saying "Dr Watson is currently down. Please try again later."  Add in a check that the user has included a `firstName`, `lastName`, and `feeling` before the **handleSubmit** creates a newUser.  If one of the inputs is missing, utilize the `error` in state.  An error tag has been provided for you in the render.

#### Iteration 2

 - [ ] Currently messages are being stored in local state in the `App` component.  Updates to that local state are handled by the **addMessage** and **clearMessages** methods.  We would like you to convert this over to the Redux global store.  Convert the methods to actions and add a new reducer called `messages` and connect them to the components that need access to that data/functionality.  

#### Iteration 3

 - [ ] After successfully implementing your messages into Redux, write the tests for your new actions and `messages` reducer.  We have not created test files for actions and reducers yet, so please add them in.  Any changes you have made to containers, specifically with `mapStateToProps` and `mapDispatchToProps`, should also have updated tests. (some tests might already exist but need an update, others you might need to create)

#### Iteration 4

 - [ ] Currently if you try to respond back to Dr Watson after his initial response, an error shows up saying "Cannot read property 'message' of undefined".  This is because the *postMessage* function in your `apiCalls` hasn't been completed.  Using the docs below, implement the fetch.  You should get a response back with a message object if the fetch is successful.  Return the message object in order to fix the error.

#### Iteration 5

 - [ ] Let's continue to stick with our BDD process (Behavioral Driven Development) and now write our tests for our *postMessage* apiCall.  Add in a test that tests what url the fetch calls and incorporate happy and sad path tests.  You should be writing a total of 4 tests for the *postMessage* in order to test it fully. 


#### Dr Watson Login Screenshot (with error)
![dr-watson-login-screenshot](./assets/dr-watson-login-screenshot.png)

#### Dr Watson Chat Screenshot
![dr-watson-chat-screenshot](./assets/dr-watson-chat-screenshot.png)

#### Dr Watson Wire Frame

### Endpoints

Note that all of the endpoints require a header of "Content-Type" with a value of "application/json".

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Start a conversation with Dr. Watson | `https://drwatson-api.herokuapp.com/api/v1/start_session` | POST | `{ "feeling": <String> }` | `{ "message": "Hello, I am Dr. Watson..." }` |
| Send a message to Dr. Watson and get a reply message back | `https://drwatson-api.herokuapp.com/api/message` | POST | `{ "message": <String> }` | `{ "message": "I appreciate the feedback..." }` |
| End the session with Dr. Watson | `https://drwatson-api.herokuapp.com/api/v1/end_session` | GET | none | 200 status code, no response body content |


Note: All of these endpoints will return semantic errors if something is wrong with the request.
