/*MadLibs 2.0 by Lillian Liu*/ 

window.onload= function() { 
    //check that JS is working
    console.log("reading js");
    
    //the submit event
    document.f.onsubmit=processForm; 
    
    //the reset event 
    document.f.onreset=resetPage;
    
    //define process function
    function processForm() {

        //store names in variables 
        var firstName=
            document.f.firstName.value;
        var age=
            document.f.age.value;
        var occupation=
            document.f.occupation.value;
        var company=
            document.f.company.value;
        var miles=
            document.f.miles.value;
        var pluralNoun=
            document.f.pluralNoun.value;
        var activity=
            document.f.activity.value;
        var gender=
            document.f.gender.value;
        var bodyPart=
            document.f.bodyPart.value;
        var philosopher1=
            document.f.philosopher1.value;
        var philosopher2=
            document.f.philosopher2.value;
        var game=
            document.f.game.value;
        var height=
            document.f.height.value;
        
        //error detection
        if (firstName=="" || age==""|| occupation== "" || company =="" || miles=="" || pluralNoun=="" || activity =="" || gender =="" || bodyPart=="" || philosopher1=="" ||philosopher2=="" || game==""|| height=="")   {
            alert("Whoops! You're missing something. Please look again and fill out the entire form."); 

        }  else { 
        //capture the msg element to change it's text and html 
        var myMsg= 
            document.getElementById("myMsg"); 
            
        myMsg.innerHTML= firstName + ", " + age +"<br>"+occupation+" at "+ company + "<br>"+miles+" miles away"+ "<br><br>"+"Lover of "+pluralNoun+". Master of " + activity+ ". Searching for a "+gender+" with a nicer "+bodyPart+ " than me. Some think of me as a " +philosopher1+ ", but I consider myself more of a " +philosopher2+". <br> Hit me up yo. We can say we met on "+game+" forums. Height, "+height+"."; 
           
            myMsg.className="show";
        }
        //prevent page from reloading
        return false;
        } 
    //if user chooses "reset" 
        function resetPage(){
        myMsg.innerHTML="";
            //change the class name
        myMsg.className="hide";
            //reset firstName field 
        firstName.value=""; 
            //reset age field
        age.value="";
            //reset occupation field
        occupation.value="";
            //reset company field
        company.value="";
            //reset miles field
        miles.value="";
            //reset pluralNoun field 
        pluralNoun.value="";
            //reset activity field 
        activity.value=""; 
            //reset gender field; 
        gender.value=""; 
            //reset bodyPart field 
        bodyPart.value="";
            //reset philosopher1 
        philosopher1.value="";
            //reset philosopher2 
        philosopher2.value=""; 
            //reset game field 
        game.value=""; 
            //reset height field 
        height.value=""; 
            
            return false; 
        }
    } 

