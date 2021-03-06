// Provided by Firebase, please enter ONLY the config here
const firebaseConfig = {
    /* Paste here */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

// This will read the data and print each parent key's data
database.ref('/').once('value').then((snap) => {
    // This is just a complicated iterative process
    //     to read all the data from the database and 
    //     print it to the console. Your data reads
    //     will use a similar loop, but probably 
    //     not two of them
    for(let key in snap.val()) {
        console.log(key, ':');
        for(let sub_key in snap.val()[key]) {
            console.log('   ',sub_key, ':', snap.val()[key][sub_key]);
        }
        console.log('-----------------')
    }
});

// This will add data to the parent key
function using_set() {
    // Notice that this path does not exist yet, 
    //     we are going to create it and add
    //     the data listed as a parameter
    database.ref('/added').set({
        key:'value',
        otherkey:'other value',
    });
}

// This will update a value at a key
function using_update() {
    // By using update, we preserve the other data
    //     stored at this path. If we use set,
    //     all other data will be deleted
    database.ref('/added').update({otherkey:'new value'});
}

// This will delete data at a key and the key itself
function using_delete() {
    database.ref('/added').remove();
}
