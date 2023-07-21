function setup(){
    canvas=createCanvas(1000,1000);
    }
     x=0; y=0

     screen_width = window.innerWidth;
    
    draw_apple=""
    speak_data=""
    to_number=""

    var apple
    var SpeechRecognition=window.webkitSpeechRecognition;
    var Recognition=new SpeechRecognition
    
    function start(){
        document.getElementById("status").innerHTML="system is listening please speak";
        Recognition.start()
    }
    Recognition.onresult=function (event){
    console.log (event)
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognized as: "+content;
    if (content=="apple"){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        document.getElementById("status").innerHTML="started drawing circle";
        draw_apple="set";
        
        }
    }
    function draw(){
   if (draw_apple == "set")
   {
    document.getElementById("status").innerHTML = to_number + "Apples Drawn";
    draw_apple = "";   
}
        }    
        function speak(){
            var synth = window.speechSynthesis;
            var utterThis = new Promise((resolve, reject) => {
                SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
                speak_data="";
            
            })
        }