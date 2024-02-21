function addNewedField() {
  let newNode = document.createElement("div");
  newNode.classList.add("edFieldContainer");

  let textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.classList.add("edField");
  textarea.classList.add("mt-2");
  textarea.setAttribute("rows", 1);
  textarea.setAttribute("placeholder", "Enter here");

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "&minus;";
  removeButton.classList.add(
    "btn",
    "btn-outline-danger",
    "btn-sm",
    "ml-2",
    "removeButton"
  );
  removeButton.onclick = function () {
    newNode.remove();
  };
  newNode.appendChild(textarea);
  newNode.appendChild(removeButton);

  let edOb = document.getElementById("ed");
  let edAddButtonOb = document.getElementById("edAddButton");
  edOb.insertBefore(newNode, edAddButtonOb);
}

function addNewWEField() {
  let newNode = document.createElement("div");
  newNode.classList.add("weFieldContainer");

  let textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.classList.add("weField");
  textarea.classList.add("mt-2");
  textarea.setAttribute("rows", 1);
  textarea.setAttribute("placeholder", "Enter here");

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "&minus;";
  removeButton.classList.add(
    "btn",
    "btn-outline-danger",
    "btn-sm",
    "ml-2",
    "removeButton"
  );
  removeButton.onclick = function () {
    newNode.remove();
  };

  newNode.appendChild(textarea);
  newNode.appendChild(removeButton);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewPrField() {
  let newNode = document.createElement("div");
  newNode.classList.add("PrFieldContainer");

  let textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.classList.add("PrField");
  textarea.classList.add("mt-2");
  textarea.setAttribute("rows", 1);
  textarea.setAttribute("placeholder", "Enter here");

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "&minus;";
  removeButton.classList.add(
    "btn",
    "btn-outline-danger",
    "btn-sm",
    "ml-2",
    "removeButton"
  );
  removeButton.onclick = function () {
    newNode.remove();
  };

  newNode.appendChild(textarea);
  newNode.appendChild(removeButton);

  let PrOb = document.getElementById("Pr");
  let PrAddButtonOb = document.getElementById("PrAddButton");

  PrOb.insertBefore(newNode, PrAddButtonOb);
}

function generateCV() {
 
  var firstName = document.getElementById("firstField").value;
  var middleName = document.getElementById("middleField").value;
  var lastName = document.getElementById("lastField").value;
  var fullName = firstName + " " + middleName + " " + lastName;
  document.getElementById("NAMEI").innerHTML = fullName;

  document.getElementById("PHONE-NOT").innerHTML = document.getElementById("phone-noField").value;
  document.getElementById("E-MAILT").innerHTML = document.getElementById("E-MailField").value;
  document.getElementById("LINKEDINT").innerHTML = document.getElementById("linkedField").value;
  document.getElementById("ADDRESST").innerHTML = document.getElementById("AddressField").value;


  var firstName = document.getElementById("firstField").value;
  var middleName = document.getElementById("middleField").value;
  var lastName = document.getElementById("lastField").value;
  var fullName = firstName + " " + middleName + " " + lastName;
  document.getElementById("NAMET").innerHTML = fullName;

  document.getElementById("PROFESSIONALT").innerHTML = document.getElementById("ProfessionalSummaryField").value;

  let wes = document.getElementsByClassName("weField");
  let strWes = "";
  for (let e of wes) {
      strWes += `<li> ${e.value} </li>`;
  }
  document.getElementById("WET").innerHTML = strWes;

  let prs = document.getElementsByClassName("PrField");
  let strPrs = "";
  for (let e of prs) {
      strPrs += `<li> ${e.value} </li>`;
  }
  document.getElementById("PRT").innerHTML = strPrs;

  
  let eds = document.getElementsByClassName("edField");
  let strEds = "";
  for (let e of eds) {
      strEds += `<li> ${e.value} </li>`;
  }
  document.getElementById("EDUCATIONT").innerHTML = strEds;

  document.getElementById("TECHNICALT").innerText = "Technical Skills: " + document.getElementById("TechnicaldField").value;
  document.getElementById("SOFT").innerText = "Soft Skills: " + document.getElementById("softField").value;

  let file = document.getElementById("imgField").files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  } else {
    
    document.getElementById("imgTemplate").src = "default-image.jpg"; 
  }
  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block"
}
function printCV() {
  window.print();
}