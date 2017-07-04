//window.addEventListener("load",jsonLoadTest);
var TestJson;
function jsonLoadTest(){
    var rawFile = new XMLHttpRequest();
//    rawFile.overrideMimeType("application/json");
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            generateQuestionsLayout(this.responseText);
        }
        else if(rawFile.readyState==4 && rawFile.status=="404"){
            $("#songs .container").html('<h1 style="text-align:center;">Error 404 </h1><h2>Oops!Sorry <br/>File Not found</h2>');
        }
    }
    rawFile.open("GET","assests/js/gmatTest.json", true);
    rawFile.send(null);
    
}

function generateQuestionsLayout(json){
//    console.log(json);
    json=JSON.parse(json);
    TestJson=json;
    var container=document.getElementById("questionsContainer");
    var div;
    document.getElementById("testName").innerHTML=json.test_name;
    document.getElementById("testDate").innerHTML=json.test_date;
    for(var i=0;i<json.questions.length;i++){
        div=generateQuestion(json.questions[i],i);
        container.appendChild(div);
    }
    console.log(json);
    addListenters();
    
}

  
function generateQuestion(obj,i){
    i++;
    var temp=i*10;
    var div=document.createElement("div");
        var content='<h3 class="questionDesc">Q.'+i+' '+obj.question+'</h3><div class="questionOption"><input type="radio" name="question'+i+'" id="'+temp+'"><label for="'+temp+++'">'+obj.option1+'</label></div><div class="questionOption"><input type="radio" name="question'+i+'" id="'+temp+'"><label for="'+temp+++'">'+obj.option2+'</label></div><div class="questionOption"><input  type="radio" name="question'+i+'" id="'+temp+'"><label for="'+temp+++'">'+obj.option3+'</label></div><div class="questionOption"><input type="radio" name="question'+i+'" id="'+temp+'"><label for="'+temp+++'">'+obj.option4+'</label></div>';
        div.innerHTML=content;
    return div;
}