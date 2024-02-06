
        let textbox=document.getElementById("textbox");
        textbox.addEventListener("input",function(){
            let text=this.value;
            //console.log(text);
            let char=text.length;
            //console.log(char);
            document.getElementById("char").innerHTML=char;
           // chars=char;
           text=text.trim();
           let words=text.split(" ");
           //console.log(words);
           let cleanlist=words.filter(function(elm){
                return elm!="";
           })
           document.getElementById("words").innerHTML=cleanlist.length;
        })
   
