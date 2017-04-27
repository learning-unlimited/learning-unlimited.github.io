---
layout: default
title: About LU Programs
seq: 10
---

# Current Programs

Learning Unlimited incubates and provides a national support structure for independent, college-student-led educational programs aimed at middle and high school students.

**Splash** is by far the most common Learning Unlimited program; it's a weekend-long extravaganza of classes at a local college or university, where pre-college students are invited to **learn about everything and anything** from passionate university students. Splash currently runs at [MIT](https://esp.mit.edu/learn/Splash/index.html), at [Stanford University](https://stanfordesp.org/), at the [University of Chicago](https://splashchicago.learningu.org/), at [Duke University](https://dukesplash.learningu.org/), at [Yale University](https://yale.learningu.org/), at [Boston College](https://bcsplash.learningu.org), and many more! 

**Take a look at our [map and calendar](/current-programs/when-and-where) for a complete list and to find a Splash near you!**

<img src="/media/images/photos/mit-splash.jpg" width="700" height="226" alt="MIT Splash">
<div class="imagecaption">MIT Splash 2008</div>

Several groups also run a multi-week program, called [**Cascade** at Chicago](https://splashchicago.learningu.org/learn/cascade.html), [**Sprout** at Yale](https://yale.learningu.org/learn/sprout.html), and [**HSSP** at MIT](https://esp.mit.edu/learn/HSSP/index.html). This program has been going strong at MIT since 1957! HSSP classes are taught over several weeks, and cover material in greater depth than the typical Splash class.

The MIT group, MIT ESP, also runs several other programs, including a summer intensive course program called **Junction**.

Find out about [where and when our programs run](/current-programs/when-and-where), or [read about some of the classes we offer](/current-programs/classes).

<script>
  function set_div_class(className) {
    document.getElementById("mailing_list").className = className;
  }

  function submit_email() {
    var xhr = new XMLHttpRequest();
    var email = document.getElementById("email_input").value;
    var data = "ca=b750bc08-f0d3-44d1-be8f-94d3f02c19b9list=1&source=EFD&required=list,email&email=" + encodeURIComponent(email);
    xhr.addEventListener("load", handle_load);
    xhr.addEventListener("error", function() {set_div_class("error");});
    xhr.open("POST", "https://visitor2.constantcontact.com/api/signup")
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Content-Length', data.length);
    xhr.send(data);
    set_div_class("submitted");
  }

  function handle_load() {
    if (this.responseText && JSON.parse(this.responseText).success) {
      set_div_class("success");
    } else {
      set_div_class("error");
    }
  }
</script>
<div id="mailing_list">
  <label for="email">Sign up to receive monthly announcements and events:</label>
  <input id="email_input" name="email" value="" maxlength="80" type="text" placeholder="your email">
  <button class="go-button" type="submit" data-enabled="enabled" onclick="javascript:submit_email()">GO</button>
</div>
