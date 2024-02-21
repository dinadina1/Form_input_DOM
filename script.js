// Creating form element using function.

// Label Creation
function label_create(tagname,attrname,attrvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

// break tag creation
function break_create(){
    let ele=document.createElement("br");
    return ele;
}

// input input creation
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    let ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
}

// button creation
function button_create(tagname,attr1name,attr1value,attr2name,attr2value,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    ele.innerHTML=content;
    return ele;
}

let first_label = label_create("label","for","firstname","First Name:");
let first_label_break = break_create();
let first_input = input_create("input","type","text","id","firstname");
let first_input_break = break_create();

let middle_label = label_create("label","for","middlename","Middle Name:");
let middle_label_break = break_create();
let middle_input = input_create("input","type","text","id","middlename");
let middle_input_break = break_create();

let last_label = label_create("label","for","lastname","Last Name:");
let last_label_break = break_create();
let last_input = input_create("input","type","text","id","lastname");
let last_input_break = break_create();

let email_label = label_create("label","for","email","Email:");
let email_label_break = break_create();
let email_input = input_create("input","type","email","id","email");
let email_input_break = break_create();

let submit = button_create("button","type","submit","onclick","display_input()","Submit");

document.body.append(first_label,first_label_break, first_input,first_input_break,middle_label,
    middle_label_break,middle_input,middle_input_break,last_label,last_label_break,last_input,last_input_break,
    email_label,email_label_break,email_input,email_input_break,submit);


    // Print inputs in console

function display_input() {
    console.log(`First Name: ${document.getElementById("firstname").value}`);
    console.log(`Middle Name: ${document.getElementById("middlename").value}`);
    console.log(`Last Name: ${document.getElementById("lastname").value}`);
    console.log(`Email: ${document.getElementById("email").value}`);
}