//creating footer element
const theFooter = document.createElement("footer");
theFooter.className = "footer";
theFooter.setAttribute("id", "footer");
document.body.appendChild(theFooter);
console.log(theFooter);

//creating date
const today = new Date();
const thisYear = today.getFullYear();
console.log(today);
console.log(thisYear);

//assigning footer element
const fullFooter = document.querySelector("footer");

//creating copyright element
const copyright = document.createElement("p");
const copyrightSymbol = "&#169";
const fullCopyright = copyrightSymbol + " Sam Gee " + thisYear;
copyright.innerHTML = fullCopyright;

//appending copyright element to footer element
fullFooter.appendChild(copyright);
console.log(fullFooter);

//creating skills list
const skills = ["Javascript", "VSCode", "GitHub", "HTML", "CSS"];
console.log(skills);

//finding skills section
const skillsSection = document.querySelector("#Skills");

//finding skills unordered list
const skillsList = skillsSection.getElementsByTagName("ul")[0];
console.log(skillsList);

//creating skills for loop
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);
}

//remove button callback function
function clickRemove(event) {
    const entry = event.target.parentNode;
    entry.remove();
}

//form submit callback function
function formSubmit(event) {
    event.preventDefault();

    //retrieving message section data
    const formData = new FormData(event.target);
    const name = formData.get("usersName");
    const email = formData.get("usersEmail");
    const message = formData.get("usersMessage");
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    //find message section
    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.getElementsByTagName("ul")[0];
    console.log(messageList);

    //display message section
    const newMessage = document.createElement("li");
    const messageDisplay = `<a href="mailto:${email}">${name}</a>\n
    <span>${message}</span>`;
    newMessage.innerHTML = messageDisplay;

    //adding remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    //remove button event listener function
    removeButton.addEventListener("click", clickRemove);

    //appending remove button to new message
    newMessage.appendChild(removeButton);

    //appending new message to message list
    messageList[0].appendChild(newMessage);

    event.target.reset();
}

//finding leave message form
const messageForm = document.getElementsByName("leave_message");
console.log(messageForm);
//message form event listener function
messageForm[0].addEventListener("submit", formSubmit);