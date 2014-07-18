var Tamagotchi = {
    initialize: function(name){
    this.name = name,
    this.foodLevel = 10,
    this.sleepLevel = 10,
    this.activityLevel = 10
  },

  timePasses: function() {
    if(this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel >0){
      this.foodLevel -= 1;
      this.activityLevel -=1;
      this.sleepLevel -=1;
    }
  },

  isAlive: function() {
    if ((this.foodLevel > 0) && (this.sleepLevel > 0) && (this.activityLevel > 0)) {
      return true;
    } else if (this.foodLevel === 0) {
      return false;
    } else {
      return false;
    }
  },
 }

$(document).ready(function(){

  $('form#tam-name').submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();

    var myTamagotchi = Object.create(Tamagotchi);
    myTamagotchi.initialize(inputtedName);

    var counter = window.setInterval(function(){
      myTamagotchi.timePasses();
        $("#food-amount").text(myTamagotchi.foodLevel);
        $("#sleep-amount").text(myTamagotchi.sleepLevel);
        $("#activity-amount").text(myTamagotchi.activityLevel);
        if(myTamagotchi.foodLevel === 0 && myTamagotchi.sleepLevel === 0 && myTamagotchi.activityLevel ===0){
          alert("You let " + inputtedName + " die! SAD DAY!");
          window.clearInterval(counter);
        }
    },1000)

    $("#food-level").click(function(){
      myTamagotchi.foodLevel +=1;
    });
    $("#sleep-level").click(function(){
      myTamagotchi.sleepLevel +=1;
    });
    $("#activity-level").click(function(){
      myTamagotchi.activityLevel +=1;
    });



    console.log(counter);




  });

});




