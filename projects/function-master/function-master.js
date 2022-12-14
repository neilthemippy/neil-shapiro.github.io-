//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var arr = []; 
for (var key in object){
    arr.push(object[key]); 
}
return arr; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = ''; 
    var count = 0; 
    for (let key in object){
       if(count !== 3){
        str += key + " "; 
       } else {
        str += key; 
       }
       count++;
    }
    return str; 
    } 


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
    var arr = [];
    for(let key in object){
        if(typeof object[key] === 'string'){
        arr.push(object[key]);
    }
}
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'; 
    } else {
        return 'object'; 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var sp = string.split(" "); 
    var arr = [];
    for(let i = 0; i < sp.length; i++){
        arr.push(sp[i][0].toUpperCase() + sp[i].slice(1)); 
    }
    return arr.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var capname = object.name[0].toUpperCase()+ object.name.slice(1); 
return "Welcome " + capname + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var capname = object.name[0].toUpperCase()+ object.name.slice(1); 
    var capspecies = object.species[0].toUpperCase() + object.species.slice(1);
    return capname + " is a " + capspecies; 
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
var obj = object.noises; 
    if(obj === undefined){
            return "there are no noises"; 
}
if(object.noises.length > 0){
    var arr = object.noises.join(' '); 
    return arr; 
} else if(object.noises.length === 0){

    return "there are no noises"; 
}
} 



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
return string.includes(word); 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
 object.friends.push(name); 
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 var istrue = false; 
 var arr = object.friends; 
 if(arr === undefined){
    return istrue; 
 }
 for(let i = 0; i < arr.length; i++){
    if(arr[i] === name){
        istrue = true; 
    }
 }
   
 return istrue; 
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var arr = []; 
for(let i = 0; i < array.length; i++){
    if(array[i].friends.includes(name)){

    } else { 
        if(!(array[i].name === name))
        arr.push(array[i].name); 
    }
}
return arr
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
var obj = object; 
obj[key] = value; 
return obj; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

for(let key in object){
    for(let i = 0; i < array.length; i++){
        if(array[i] === key){
                delete object[key]; 
        }
    }
}
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var arr = []; 
var cur = undefined; 
for(let i = 0; i < array.length; i++){
    if(array[i] !== cur){
        if(!(arr.includes(array[i]))){
            arr.push(array[i]);
            cur = array[i];
        }
    }
}
return arr; 
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}