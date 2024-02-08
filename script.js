
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
            tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add ("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    }


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
        sidemenu.style.right = "0";
}

function closemenu(){
        sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxLdfjb0S8yHYJiseCSOh5u0a4nJETvdEnN9lvRdhm8DZ4SpbhcGGuud2G1OPwI3BszAg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
    })
    .catch(error => console.error('Error!', error.message))
    })

window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
        var backToTopButton = document.querySelector('.back-to-top');
    
        if (scrollPosition > 300) { // Adjust this value as needed
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    document.querySelector('.back-to-top').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
