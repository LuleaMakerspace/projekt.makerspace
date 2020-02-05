const firebase = require('firebase')
const prompt = require('prompt')
const program = require('commander')

require("firebase/firestore");


let firebaseConfig = {
    apiKey: "AIzaSyA548KWiSE_ixSYamZqhhMWWHQhmZm_130",
    authDomain: "makerspace-projekt.firebaseapp.com",
    databaseURL: "https://makerspace-projekt.firebaseio.com",
    projectId: "makerspace-projekt",
    storageBucket: "makerspace-projekt.appspot.com",
    messagingSenderId: "114081140462",
    appId: "1:114081140462:web:69387adf89df65c6162dff",
    measurementId: "G-6GJ4VF6YZ3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    console.log("DB connection initialized")
}

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
const DB = firebase.database()
const StoreDB = firebase.firestore()
const projectCollection = StoreDB.collection("projects")

const projectSchema = {
    properties: {
        title: {
            description: 'Project title',
            required: true,
            type: "string"
        },
        description: {
            description: "Project description",
            type: "string",
            required: true
        },
        embed: {
            required: false,
            type: "string",
            pattern: /(https?:\/\/[^\s]+)/g
        },
    }
};

program
    .command('new')
    .description('Create new project entry')
    .action(() => {
        prompt.start();
        prompt.get(projectSchema, function (err, result) {
            console.log(result)
        });
    });
    program.parse(process.argv);