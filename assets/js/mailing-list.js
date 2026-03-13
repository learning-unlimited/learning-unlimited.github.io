function set_div_class(className) {
    document.getElementById("mailing_list").className = "mailing-list-form " + className;
}

function submit_email(contactId) {
    var xhr = new XMLHttpRequest();
    var email = document.getElementById("email_input").value;
    var data = "ca=" + contactId + "&list=1&source=EFD&required=list,email&email=" + encodeURIComponent(email);
    
    xhr.addEventListener("load", handle_load);
    xhr.addEventListener("error", function() { set_div_class("error"); });
    xhr.open("POST", "https://visitor2.constantcontact.com/api/signup");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
    set_div_class("submitted");
}

function handle_load() {
    try {
        if (this.responseText && JSON.parse(this.responseText).success) {
            set_div_class("success");
        } else {
            set_div_class("error");
        }
    } catch(e) {
        set_div_class("error");
    }
}