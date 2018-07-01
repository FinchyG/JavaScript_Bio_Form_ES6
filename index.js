var p = document.getElementById("bio_paragraph");

var bio_form = {
    first_name: "",
    first_name_valid: false,
    last_name: "",
    last_name_valid: false,
    gender_prefix: "",
    gender_prefix_valid: false
};

function process_data() {

    get_first_name();
    get_last_name();
    get_gender_prefix();

    p.innerHTML = "My name is " + bio_form.gender_prefix + " " + bio_form.first_name + " " + bio_form.last_name + ".";

    if((bio_form.first_name_valid === false) || (bio_form.last_name_valid === false) || (bio_form.gender_prefix_valid === false)) {

        p.style.visibility = "hidden";

    } else {

        p.style.visibility = "visible";

    }
    
}

function get_first_name() {

    var user_input_first_name = document.getElementById("FName").value.trim();
    
    if(user_input_first_name === ""){
        document.getElementById("FName_warn").style.visibility = "visible";
        bio_form.first_name_valid = false;
    } else {
        document.getElementById("FName_warn").style.visibility = "hidden";
        bio_form.first_name_valid = true;
        var caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
        var rest_of_name = user_input_first_name.substring(1).toLowerCase();
        
        bio_form.first_name = caps_first_letter + rest_of_name;
    }

}

function get_last_name() {

    var user_input_last_name = document.getElementById("LName").value.trim();
    
    if(user_input_last_name === ""){
        document.getElementById("LName_warn").style.visibility = "visible";
        bio_form.last_name_valid = false;
    } else {
        document.getElementById("LName_warn").style.visibility = "hidden";
        bio_form.last_name_valid = true;
        var caps_first_letter = user_input_last_name.substring(0,1).toUpperCase();
        var rest_of_name = user_input_last_name.substring(1).toLowerCase();
        
        bio_form.last_name = caps_first_letter + rest_of_name;;
    }

}

function get_gender_prefix() {

    if(!(document.getElementById("male").checked) && 
        !(document.getElementById("female").checked) && 
        !(document.getElementById("other").checked)) {

            document.getElementById("gender_warn").style.visibility = "visible";
            bio_form.gender_prefix_valid = false;
        
        } else if(document.getElementById("male").checked) {
            
            bio_form.gender_prefix = "Mr";
            document.getElementById("gender_warn").style.visibility = "hidden";
            bio_form.gender_prefix_valid = true;

        } else if(document.getElementById("female").checked){
        
            bio_form.gender_prefix = "Mrs";
            document.getElementById("gender_warn").style.visibility = "hidden";
            bio_form.gender_prefix_valid = true;

        } else if(document.getElementById("other").checked){

            bio_form.gender_prefix = "";
            document.getElementById("gender_warn").style.visibility = "hidden";
            bio_form.gender_prefix_valid = true;

    }

}