//Final script 
var starting_program_index = 608;
var number_of_program_done_in_Cur_dif = 197;
var current_difficulty = "Easy"; // "Very Easy" "Easy" "Medium" "Hard" "Very Hard" "Expert"
var prog_lang = "js"; // py js java c++



var comment_open = null;
var comment_close = null;
var sing_comment = null;
var fileExt = null;
var current_language = null;
switch (prog_lang) {
case "py":
  comment_open = "\"\"\"";
  comment_close = "\"\"\"";
  sing_comment = "#";
  fileExt = ".py";
  current_language = "Python";
  break;
case "js":
  comment_open = "/*";
  comment_close = "*/";
  sing_comment = "//";
  fileExt = ".js";
  current_language = "JavaScript";
  break;
case "java":
  comment_open = "/*";
  comment_close = "*/";
  sing_comment = "//";
  fileExt = ".java";
  current_language = "Java";
  break;
case "c++":
  comment_open = "/*";
  comment_close = "*/";
  sing_comment = "//";
  fileExt = ".cpp";
  current_language = "C++"
  break;
default:
  throw "No valid option entered in programming language selection"
}

//Global settings:-
function print(context) {
  console.log(context);
}

if (current_difficulty == "Very Easy") {
  number_of_program_done_in_Cur_dif += 1;
}

var current_program_difficulty = current_difficulty; // "Very Easy" "Easy" "Medium" "Hard" "Very Hard" "Expert"
var current_program_title = null;
var instructions = null;
var resources = null;
var myfile = null;
var diff_menu_items = {};
for (let i of document.getElementsByClassName("menu transition")[1].children){
  diff_menu_items[(i.innerText).toString()] = i;
}
var lang_menu_items = {};
for (let i of document.getElementsByClassName("menu transition")[0].children){
  lang_menu_items[(i.innerText).toString()] = i;
}

lang_menu_items[current_language].click()
diff_menu_items[current_difficulty].click();
setTimeout(setDifficulty, 1000); 

function updateDifficulty() {
  let programs = document.getElementsByClassName("item no-highlight");
  current_program_difficulty = programs[number_of_program_done_in_Cur_dif].children[1].children[3].innerText;
  if(current_program_difficulty != current_difficulty) {
    current_difficulty = current_program_difficulty;
    //print(current_difficulty + " " + number_of_program_done_in_Cur_dif);
    number_of_program_done_in_Cur_dif = 0;
  }
}

function setDifficulty() {
  if (document.getElementsByClassName("item no-highlight").length > 0){
  	selectTheProgram();
  }
  else {
    setTimeout(setDifficulty, 100);
  }
}

function selectTheProgram() {
  let programs = document.getElementsByClassName("item no-highlight");
  if(programs.length > number_of_program_done_in_Cur_dif) {
    //print(Date());
    startFileExtraction();
  }
  else {
    document.getElementsByClassName("ui fluid button")[0].click();
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(selectTheProgram, 500);
  }
}

//These functions are temporary
function startFileExtraction() {
  let temp = number_of_program_done_in_Cur_dif;
  //print(current_program_difficulty);
  updateDifficulty();
  //console.log("Program going to start");
  setTimeout(waitForFS, 50, temp);
}

function waitForFS(temp) {
  document.getElementsByClassName("item no-highlight")[temp].click();
  setTimeout(startFileExtRFunc, 2000);
}

function startFileExtRFunc() {
  if (document.getElementsByClassName("grey-segment code-area instructions").length > 0) {
    setTimeout(waitForInst, 700);
  }
  else {
    //console.log("No it is not");
    setTimeout(startFileExtRFunc, 300);
  }
}

function waitForInst() {
  instructions = extractTheContent1();
  //setTimoutloopstarts
  document.getElementsByClassName("rc-tabs-tab")[2].click();
  setTimeout(waitForRes, 300);
}

function extractTheContent1() {
  let problemTitle = document.getElementsByClassName("content");
  current_program_title = problemTitle[0].innerText;// Expected to return the problem title and is tested
  print(current_program_title);
  let labelsEle = (document.getElementsByClassName("sub header no-highlight"))[1];
  
  let labels = [];
  
  for (let i of labelsEle.children) {
    labels.push(i.innerText);
  }
    //Examples
  let mainDivEle = document.getElementsByClassName("grey-segment code-area instructions")[0].children[1];
  
  let mainContent = "\n####  " + current_program_title + "  ####\n\n";
  for (let i of mainDivEle.children) {
    let p_string = "";
    if(i.tagName == "P") {
      for (let j of i.children){
        p_string += j.innerText;
      }
    
    }
    else if(i.tagName == "PRE"){
      p_string += "_________\n"  + i.innerText + "\n_________\n" ;
    }
    
    else if(i.tagName == "H3"){
      p_string += "\n\n[" + i.innerText + "]\n";
    }

    else if(i.tagName == "UL"){
      p_string += "_________\n"
      for (let j of i.children) {
        p_string += "*) " + j.innerText + "\n";
      }
      p_string += "_________\n"
    }
    mainContent += p_string + "\n";
  }

  mainContent += "\n\n";
  labels.forEach((item) => {
    mainContent += "[" + item + "] ";
  })
  
  return mainContent;
}

function extractTheContent2() {
  let mainContent = "\n\n\n\n-------------------------------------------------------------------\n[Resources]\n";
  
  let mainDivEle = (document.getElementsByClassName("ui comments"))[0].children;

  if (document.getElementsByClassName("ui comments")[0].children[0].className == "ui center aligned container") {
    return mainContent+'\n\n[No Resources]\n\n'
  }
  
  for (let i of mainDivEle) {
    let p_string = "";
    
    p_string += "___________________________\n";
    p_string += i.children[0].children[0].children[0].children[0].children[0].innerText + "\n";
    
    p_string += i.children[0].children[0].children[0].children[0].children[0].getAttribute("href") + "\n";
    
    p_string += i.children[0].children[0].children[0].children[2].innerText + "\n";
    
    p_string += "___________________________\n";
    mainContent += p_string;
  }
  return mainContent;
}

function waitForRes() {
  if (document.getElementById("Resources") != null) {
    resources = extractTheContent2();
    myfile = comment_open + instructions + resources + "\n" + comment_close +"\n"+ sing_comment +"Your code should go here:\n\n";
    let content = [myfile];
    let bl = new Blob(content, {type: "text/py"});
    let aaaa = document.createElement("a");
    aaaa.href = URL.createObjectURL(bl);
    aaaa.download = "[" + starting_program_index.toString() + "] " + cleanTitle(current_program_title) + " [" + getTheShortForm(current_program_difficulty) + "]" + fileExt;
    aaaa.hidden = true;
    document.body.appendChild(aaaa);
    aaaa.click();
    setTimeout(returnToMenu, 500);
  }
  else {
    setTimeout(waitForRes, 1000);
  }
}

function returnToMenu() {
  document.getElementsByClassName("link item navbar-item")[1].click();
  number_of_program_done_in_Cur_dif += 1;
  starting_program_index += 1;
  waitForItems(false);
}

function cleanTitle(title) {
  let regex = /[/\:,."<>|?*]/g;
  let new_title = title.replaceAll(regex, "_");
  regex = /_{2,}/g
  new_title = new_title.replaceAll(regex, "");
  return new_title;
}

function getTheShortForm(phrase) {
  if(phrase == "Expert") {
    return "Ex";
  }
  let words = phrase.split(" ");
  let shortForm = "";
  for (let i of words) {
    shortForm += i.slice(0,1);
  }
  return shortForm;
}

function waitForItems() {
  if (document.getElementsByClassName("item no-highlight").length > 0){
    instructions = null;
    for (let i of document.getElementsByClassName("menu transition")[1].children){
      diff_menu_items[(i.innerText).toString()] = i;
    }
  	diff_menu_items[current_difficulty].click();
    setDifficulty();
  }
  else {
    setTimeout(waitForItems, 100);
  }
}

///There are a lot of functions here that can be shortened in terms of code.
///Like we can actually make a wait function that waits for a specific condition to be met before executing a callback function.
/// Just a prototype of loading function
/*function domLoop(condition, func, timer) {
  if(condition){
    func();
  }
  else {
    setTimeout(domLoop, timer, condition, func, timer);
  }
}
*/