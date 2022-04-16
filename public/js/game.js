$(document).ready(function(){


    $("#plgunting").click(function(){
      let pGunting = 'gunting';
      let player = "";
      let winner = document.getElementById("the-winner");
      let computer = Math.random();

      if( computer < 0.34 ) {
          computer = "gunting";
          winner.textContent = "Seri";
      } else if( computer >= 0.34 && computer < 0.67 ) {
          computer = "batu";
          winner.textContent = "Kalah";
      } else {
          computer = "kertas";
          winner.textContent = "Menang";
      }
    })

    $("#player-batu").click(function(){
      let pGunting = 'batu';
      let player = "";
      let winner = document.getElementById("the-winner");
      let computer = Math.random();

      if( computer < 0.34 ) {
          computer = "gunting";
          winner.textContent = "Menang";
      } else if( computer >= 0.34 && computer < 0.67 ) {
          computer = "batu";
          winner.textContent = "Seri";
      } else {
          computer = "kertas";
          winner.textContent = "Kalah";
      }
    })

    $("#player-kertas").click(function(){
        let pGunting = 'kertas';
        let player = "";
        let winner = document.getElementById("the-winner");
        let computer = Math.random();
  
        if( computer < 0.34 ) {
            computer = "gunting";
            winner.textContent = "Kalah";
        } else if( computer >= 0.34 && computer < 0.67 ) {
            computer = "batu";
            winner.textContent = "Menang";
        } else {
            computer = "kertas";
            winner.textContent = "Seri";
        }
      })
  })

  function reset(){
  window.location.reload();
}
  
  

  function computerChoices() {
      let computer = Math.random();

      if( computer < 0.34 ) {
          computer = "gunting";

      } else if( computer >= 0.34 && computer < 0.67 ) {
          computer = "batu";
      } else {
          computer = "kertas";
      }
  }

  function setWinner(text){
    let winner = document.getElementById("the-winner")
    winner.textContent = text
}

  function result(computer, player){
      
      if( player == "gunting" ){
          result = (computer == "kertas")
          setWinner("YOU WINNER");
      }else if( player == "gunting"){
          result = (computer == "batu")
          setWinner("YOU LOSE");
      }else if( player == "batu"){
          result = (computer == "gunting")
          setWinner("YOU WIN");
      }else if( player == "batu"){
          result = (computer == "kertas")
          setWinner("YOU LOSE");
      }else if( player == "kertas"){
          result = (computer == "gunting")
          setWinner("YOU LOSE");
      }else if( player == "kertas"){
          result = (computer == "batu")
          setWinner("YOU WIN");
      }else{
          setWinner("SERI");
      }
  }