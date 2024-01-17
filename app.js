//------Need to declare the HTML buttons-------//
var kaizenButton = document.querySelector(".kaizen-btn");
var hintsButton = document.querySelector(".hints-btn");

//------Need to create a function that replaces the Html element that is shown when the Kaisen UX Button is pressed-------//
function changetoHintsPanel(){
    var panelKaizenTitle = document.querySelector(".panel-title");
    panelKaizenTitle.textContent = "Hints";
    var panelKaizenBody = document.querySelector(".panel-body");
    panelKaizenBody.innerHTML ='<p>In this coding challenge, you may not submit an HTML file, so you\'ll want to set up your HTML in a string and use a function of Element called insertAdjacentHTML(). <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML">Learn more here</a>.</p>';
    var panelKaizenImg = document.querySelector(".panel-img");
    if (panelKaizenImg.src == "https://vucommodores.com/wp-content/uploads/2024/01/Screenshot-2024-01-11-at-3.03.33-PM-1024x530.png"){
        panelKaizenImg.src = "https://vucommodores.com/wp-content/uploads/2024/01/DSC05578-1-1024x683.jpg";
        panelKaizenImg.alt = "A close-up photo of a tennis racquet.";
    };
};


hintsButton.addEventListener("click", changetoHintsPanel);

//------Need to create a function that replaces the Html element that is shown when the Hints Button is pressed-------//

function changetoKaizenPanel(){
    var panelHintsTitle = document.querySelector(".panel-title");
    panelHintsTitle.textContent = "Kaizen UX";
    var panelHintsBody = document.querySelector(".panel-body");
    panelHintsBody.textContent = "Kaizen UX is an A/B Testing and Optimization Development Agency. We execute large A/B testing, website optimization, and other digital marketing projects for high-traffic clients.";
    var panelHintsImg = document.querySelector(".panel-img");
    if (panelHintsImg.src == "https://vucommodores.com/wp-content/uploads/2024/01/DSC05578-1-1024x683.jpg"){
        panelHintsImg.src = "https://vucommodores.com/wp-content/uploads/2024/01/Screenshot-2024-01-11-at-3.03.33-PM-1024x530.png";
        panelHintsImg.alt = "A photo of a man smiling.";
    };
};


kaizenButton.addEventListener("click", changetoKaizenPanel);

//------Need to create functions for event listeners-------//

function hintsButtonClickEffect(){
    hintsButton.style.backgroundColor = "darkred";
    hintsButton.style.color = "whitesmoke";
    hintsButton.style.fontWeight = "bold";
    kaizenButton.style.backgroundColor = "whitesmoke";
    kaizenButton.style.color = "darkred";
    kaizenButton.style.fontWeight = "normal";

    kaizenButton.addEventListener("mouseover", kaizenButtonMouseoverEffect);
    kaizenButton.addEventListener("mouseout", kaizenButtonMouseoutEffect); 
    hintsButton.removeEventListener("mouseout", hintsButtonMouseoutEffect);
    hintsButton.removeEventListener("mouseover", hintsButtonMouseoverEffect);
}
function kaizenButtonMouseoverEffect(){
    kaizenButton.style.backgroundColor = "indianred";
    kaizenButton.style.color = "whitesmoke";
    kaizenButton.style.fontWeight = "bold"
}
function kaizenButtonMouseoutEffect(){
    kaizenButton.style.backgroundColor = "whitesmoke";
    kaizenButton.style.color = "darkred";
    kaizenButton.style.fontWeight = "normal";
}
    
function kaizenButtonClickEffect(){
    kaizenButton.style.backgroundColor = "darkred";
    kaizenButton.style.color = "whitesmoke";
    kaizenButton.style.fontWeight = "bold";
    hintsButton.style.backgroundColor = "whitesmoke";
    hintsButton.style.color = "darkred";
    hintsButton.style.fontWeight = "normal";

    hintsButton.addEventListener("mouseover", hintsButtonMouseoverEffect);
    hintsButton.addEventListener("mouseout", hintsButtonMouseoutEffect);
    kaizenButton.removeEventListener("mouseout", kaisenButtonMouseoutEffect);
    kaizenButton.removeEventListener("mouseover", kaisenButtonMouseoverEffect);
}
function hintsButtonMouseoverEffect(){
    hintsButton.style.backgroundColor = "indianred";
    hintsButton.style.color = "whitesmoke";
    hintsButton.style.fontWeight = "bold"
}
function hintsButtonMouseoutEffect(){
    hintsButton.style.backgroundColor = "whitesmoke";
    hintsButton.style.color = "darkred";
    hintsButton.style.fontWeight = "normal";
}


hintsButton.addEventListener("click", hintsButtonClickEffect);
kaizenButton.addEventListener("click", kaizenButtonClickEffect);

//------Need to create an <hr> element for mobile devices and insert it-------//

var buttonSection = document.querySelector(".challenge-btn-section");
var newDivider = '<hr class="rounded" />'
var newDividerObject = document.createElement('div');
newDividerObject.innerHTML = newDivider;
buttonSection.insertAdjacentElement('afterend', newDividerObject);