function addListenters(){
    var prev=null;
}
function showResult(){
    var container=document.getElementById("questionsContainer");
//    console.log(TestJson);
    var questions=container.children;
    console.log(questions);
    var questionAttempted=0;
    var testScore=0;
    container.innerHTML='<h3 id="qstnAttempt">Question Attempted : <span id="QuestionAttempted">'+questionAttempted+'</span></h3><h2 class="center">Your Score Is : <span id="testScore">'+testScore+'/'+TestJson.questions.length+'<span></h2><button class="btn btn-info submit_btn">Show Answers</button>';
    $("button").eq(1).hide();
    $("body").append('<button onclick="loginHomePage();" class="btn btn-info submit_btn btn-lg">Logout</button>');
}

function userLogin(){
    var username=$("#username")[0].value;
    var password=$("#password")[0].value;
    $(".sign_in").hide();
    $(".login_image ,.login_details").show();
    if(username!=""&&password!=""){
    var userExists=false;
    var rawFile=new XMLHttpRequest();
//    rawFile.overrideMimeType("application/json");
    rawFile.onreadystatechange = function(){
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            userExists=isUser(this.responseText,username,password);
        }
        else if(rawFile.readyState==4 && rawFile.status=="404"){
            $("#songs .container").html('<h1 style="text-align:center;">Error 404 </h1><h2>Oops!Sorry <br/>File Not found</h2>');
        }
    }
    rawFile.open("GET","assests/js/login.json",false);
    rawFile.send(null);
    
    
    if(userExists===true){
        alert("Welcome "+username);
     $(location)[0].href="test.html";
    }
    else{
            alert("Wrong Username or password \n    SIGN IN");
        }
    }}


function userSignIn(){
    $(".sign_in").show();
    $(".login_image ,.login_details").hide();
    var newUserObj={
        
    };
    var username=$("#firstName")[0].value;
    var pwd=$("#pwd")[0].value;
    if(username!=""&&pwd!=""){
    alert("Welcome new user "+username);
    $(location)[0].href="test.html";}
}

function isUser(userlist,username,password){
    userlist=JSON.parse(userlist);
    for(var i=0;i<userlist.users.length;i++){
        if(userlist.users[i].userid===username&&
          userlist.users[i].password===password)
            return true;
    }
    return false;
}

function loginHomePage(){
    $(location)[0].href="login.html";
}