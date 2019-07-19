import * as firebase from 'firebase';

// Note: Set up your own firebase account for the app to work and store the data to the database. set up the account create a web project in that with your project_name and then paste you appId i.e. this whole section to run the backend. Also setup the database also in the firebas console. Replace every thing in the script with yours.
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')