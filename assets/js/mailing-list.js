function set_div_class(className) {
    document.getElementById("mailing_list").className = "mailing-list-form " + className;
}

function is_valid_email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submit_email(source) {
    var emailInput = document.getElementById("email_input");
    var email = emailInput ? emailInput.value.trim() : "";

    if (!is_valid_email(email)) {
        set_div_class("error");
        return;
    }

    set_div_class("submitted");

    var subscribeUrl = new URL("https://learningu.substack.com/subscribe");
    subscribeUrl.searchParams.set("email", email);
    subscribeUrl.searchParams.set("utm_source", "learningu.org");
    subscribeUrl.searchParams.set("utm_medium", "website");
    if (source) {
        subscribeUrl.searchParams.set("utm_content", source);
    }

    window.location.assign(subscribeUrl.toString());
}
