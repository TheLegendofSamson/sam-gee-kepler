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
