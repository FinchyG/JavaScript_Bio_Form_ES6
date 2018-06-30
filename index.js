var p = document.getElementById("bio_paragraph");
var person = {
    first_name: "",
    last_name: "",
    gender_prefix: "",
    age: "",
    fav_col: "",
    interests: "",
    bio: "My name is " + this.gender_prefix + " " + this.first_name + " " + this.last_name + ", and I am " + this.age + 
    " years old. My favourite colour is " + this.fav_col + " and I'm interested in " + this.interests + "."
}

function process_data() {

    get_full_name();
    genderPrefix();
    get_age();
    get_fav_col();
    get_interests();

    document.getElementById("bio_paragraph").innerHTML = person.bio;

}

// code for capturing user-entered name data

function get_full_name() {

    get_first_name();
    get_last_name();

}

function get_first_name() {

    var first_name = "";    
    var user_input_first_name = document.getElementById("FName").value;
    if(user_input_first_name === ""){
        first_name_warning();
        person.bio = "Please correct errors.";
    }

    user_input_first_name = user_input_first_name.trim();
    var caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
    var rest_of_name = user_input_first_name.substring(1).toLowerCase();
    first_name = caps_first_letter + rest_of_name;

    person.first_name = first_name;

}

function get_last_name() {

    var last_name = "";    
    var user_input_last_name = document.getElementById("LName").value;
    if(user_input_last_name === ""){
        last_name_warning();
        person.bio = "Please correct errors.";
    }

    user_input_last_name = user_input_last_name.trim();
    var caps_first_letter = user_input_last_name.substring(0,1).toUpperCase();
    var rest_of_name = user_input_last_name.substring(1).toLowerCase();
    last_name = caps_first_letter + rest_of_name;

    person.last_name = last_name;

}

// code for capturing user-entered gender data

function genderPrefix() {

    if(document.getElementById("male").checked) {
        person.gender_prefix = "Mr";
    } else if(document.getElementById("female").checked){
        person.gender_prefix = "Mrs";
    } else {
        person.gender_prefix = "";
    }

}


// code for capturing user-entered age data

function get_age() {

    person.age = document.getElementById("age").value;

}

function get_fav_col() {

    person.fav_col = document.getElementById("fav_col").value;

}

function get_interests() {

    interests_arr = [
        document.getElementById("sports"),
        document.getElementById("music"),
        document.getElementById("reading"),
        document.getElementById("gardening"),
        document.getElementById("cookery"),
        document.getElementById("D.I.Y")        
    ];

    var sel_interests_arr = [];

    for(i=0; i < interests_arr.length; i++) {
        if(interests_arr[i].checked) {
            sel_interests_arr.push(interests_arr[i].value);
        }
    }

    var interests_str = "";

    for(i=0; i < sel_interests_arr.length - 1; i++) {
        interests_str += sel_interests_arr[i] + ", ";
    }

    interests_str += "and " + sel_interests_arr[sel_interests_arr.length - 1];

    
    
    person.interests = interests_str;
    
}

// code to show data input warnings

function first_name_warning() {

    document.getElementById("FName_warn").style.visibility = "visible";

}

function last_name_warning() {

    document.getElementById("LName_warn").style.visibility = "visible";

}