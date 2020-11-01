          var btn = document.getElementById("demo");
          var count = 0;
          var sum =0;
          var random =0;
          
          var p1 = document.getElementById("p1")
            btn.addEventListener("click", function(){
              count++;
              random = Math.floor((Math.random() * 6) +1)
              sum += random;
              document.getElementsByTagName("p")[1].innerHTML ="Die No: " + random;
              document.getElementById("p").innerHTML = "No Of Trials: "+ count;
              var name = document.getElementById("inp").value;
              
              
              if(count === 6){
                document.getElementById("p").innerHTML = "6 Trials Exceeded";
                document.getElementById("demo").innerHTML = "Game Over"
                document.getElementsByTagName("p")[0].setAttribute("id", "")
                document.getElementsByTagName("p")[1].setAttribute("id", "")
                document.getElementById("demo2").innerHTML = "PLAY AGAIN"
               
               
              if(sum >= 25){
                document.getElementsByTagName("p")[1].innerHTML = name.toUpperCase() +" your score is " + sum + " you won";
                document.getElementsByTagName("p")[1].style.backgroundColor = "green";

              }else{
                document.getElementsByTagName("p")[1].innerHTML = name.toUpperCase() + " your score is " + sum+ " you lost";
                document.getElementsByTagName("p")[1].style.backgroundColor = "red";
              }

              }
              switch(random) {
                case 1:
                var en = "1.png";
                break;
                case 2:
                var en = "2.png";
                break;
                case 3:
                var en = "3.png";
                break;
                case 4:
                var en = "4.png";
                break;
                case 5:
                var en = "5.png";
                break;
                case 6:
                var en = "6.png";
                break;
    }
    document.getElementById("img").src =en;
     });            
            
    var btn2 = document.getElementById("demo2")
    btn2.addEventListener("click", function(){
      if(count > 0){
        sum =0;
        count=0;
        random = 0;
        document.getElementsByTagName("p")[0].setAttribute("id", "p")
        document.getElementsByTagName("p")[1].innerHTML = random;
        document.getElementById("demo").innerHTML = "ROLL DIE"
        document.getElementById("p").innerHTML = "0";
        document.getElementById("demo2").innerHTML = "RESET"
        document.getElementsByTagName("p")[1].style.backgroundColor = "";
      }

    })

  