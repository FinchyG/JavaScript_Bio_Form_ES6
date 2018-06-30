var p = document.getElementById("bio_paragraph");
var person = {
    first_name: "",
    last_name: "",
    gender_prefix: "",
    age: "",
    fav_col: "",
    interests: ""
}

function process_data() {

    fullName();
    genderPrefix();
    get_age();
    get_fav_col();
    get_interests();

    p.innerHTML = "My name is " + person.gender_prefix + " " + person.first_name + " " + person.last_name + ", and I am " + person.age + 
                  " years old. My favourite colour is " + person.fav_col + " and I'm interested in " + person.interests + ".";

}

//code for capturing user-entered name data

function fullName() {
    
    person.first_name = document.getElementById("FName").value;
    person.last_name = document.getElementById("LName").value;

}

function genderPrefix() {

    if(document.getElementById("male").checked) {
        person.gender_prefix = "Mr";
    } else if(document.getElementById("female").checked){
        person.gender_prefix = "Mrs";
    } else {
        person.gender_prefix = "";
    }

}

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