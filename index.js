var p = document.getElementById("bio_paragraph");

var bio_form = {
    first_name: "",
    first_name_valid: false,
    last_name: "",
    last_name_valid: false,
    gender_prefix: "",
    gender_prefix_valid: false,
    age: "",
    age_valid: false,
    fav_color: "",
    fav_color_valid: false,
    interests: "",
    interests_valid: false
};

const process_data = () => {

    get_first_name();
    get_last_name();
    get_gender_prefix();
    get_age();
    get_fav_color();
    get_interests();

    p.innerHTML = "My name is " + bio_form.gender_prefix + " " + bio_form.first_name + " " + bio_form.last_name + ", " +
                  "and I am " + bio_form.age + " years old. My favourite color is " + bio_form.fav_color + " and I am interested in "
                  + bio_form.interests + ".";

    if((bio_form.first_name_valid === false) || (bio_form.last_name_valid === false) || (bio_form.gender_prefix_valid === false)
        || (bio_form.age_valid === false) || (bio_form.fav_color_valid === false) || (bio_form.interests_valid === false)) {

        p.style.visibility = "hidden";

    } else {

        p.style.visibility = "visible";

    }
    
}

const get_first_name = () => {

    const user_input_first_name = document.getElementById("FName").value.trim();
    
    if(user_input_first_name === ""){
        document.getElementById("FName_warn").style.visibility = "visible";
        bio_form.first_name_valid = false;
    } else {
        document.getElementById("FName_warn").style.visibility = "hidden";
        bio_form.first_name_valid = true;
        const caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
        const rest_of_name = user_input_first_name.substring(1).toLowerCase();
        
        bio_form.first_name = caps_first_letter + rest_of_name;
    }

}

const get_last_name = () => {

    const user_input_last_name = document.getElementById("LName").value.trim();
    
    if(user_input_last_name === ""){
        document.getElementById("LName_warn").style.visibility = "visible";
        bio_form.last_name_valid = false;
    } else {
        document.getElementById("LName_warn").style.visibility = "hidden";
        bio_form.last_name_valid = true;
        const caps_first_letter = user_input_last_name.substring(0,1).toUpperCase();
        const rest_of_name = user_input_last_name.substring(1).toLowerCase();
        
        bio_form.last_name = caps_first_letter + rest_of_name;;
    }

}

const get_gender_prefix = () => {

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

const get_age = () => {

    const age = document.getElementById("age").value;

    if((age === "") || (age <= 0) || (age >= 120)) {

        document.getElementById("age_warn").style.visibility = "visible";
        bio_form.age_valid = false;
    
    } else {

        document.getElementById("age_warn").style.visibility = "hidden";
        bio_form.age_valid = true;
        bio_form.age = age;

    }

}

const get_fav_color = () => {

    const fav_color = document.getElementById("fav_col").value;

    if(fav_color === "") {

        document.getElementById("fav_color_warn").style.visibility = "visible";
        bio_form.fav_color_valid = false;

    } else {

        document.getElementById("fav_color_warn").style.visibility = "hidden";
        bio_form.fav_color_valid = true;
        bio_form.fav_color = fav_color;

    }

}

const get_interests = () => {

    const interests_arr = [
        document.getElementById("sports"),
        document.getElementById("music"),
        document.getElementById("reading"),
        document.getElementById("gardening"),
        document.getElementById("cookery"),
        document.getElementById("D.I.Y")        
    ];

    let sel_interests_arr = [];

    for(let i=0; i < interests_arr.length; i++) {

        if(interests_arr[i].checked) {
            sel_interests_arr.push(interests_arr[i].value);
        }

    }



    if(sel_interests_arr.length === 0) {

        document.getElementById("interests_warn").style.visibility = "visible";
        bio_form.interests_valid = false;

    }

    let loop_interests_str = "";
    let interests_str = "";

    if(sel_interests_arr.length >= 3) {

        for(let i=0; i < sel_interests_arr.length - 2; i++) {

            loop_interests_str += sel_interests_arr[i] + ", ";
        
        }

        interests_str += loop_interests_str + sel_interests_arr[sel_interests_arr.length -2] + " and " + 
                         sel_interests_arr[sel_interests_arr.length -1];
        
        bio_form.interests_valid = true;
    
    }

    if(sel_interests_arr.length === 2) {

        interests_str += sel_interests_arr[sel_interests_arr.length -2] + " and " + 
                         sel_interests_arr[sel_interests_arr.length -1];

        bio_form.interests_valid = true;

    }

    if(sel_interests_arr.length === 1) {

        interests_str += sel_interests_arr;

        bio_form.interests_valid = true;

    }

    bio_form.interests = interests_str;
    
}