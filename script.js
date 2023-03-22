const candidate = function (name, partyColor){
    let politician = {};
      politician.name = name;
      politician.electionResults = null;
      politician.totalVotes = 0;
      politician.partyColor = partyColor;
    
      politician.tallyVotes = function() {
      this.totalVotes = 0;
      for (let i = 0; i < this.electionResults.length; i++) {
       this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };
    
      return politician;
    
  };
  
  const politician1 = candidate("Sally", [132, 17, 11]);
  const politician2 = candidate("Simon", [245, 141, 136]);
  
  
  
  console.log(politician1);
  console.log(politician2);
  
  console.log("Sally's color is: " + politician1.partyColor);
  console.log("Simon's color is: " + politician2.partyColor);
  
  
  politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
  
  politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]
  
  politician1.electionResults[9] = 1;
  politician1.electionResults[4] = 17;
  politician1.electionResults[43] = 11;
  
  politician2.electionResults[9] = 28;
  politician2.electionResults[4] = 38;
  politician2.electionResults[43] = 27;
  
  
  console.log(politician1.electionResults);
  console.log(politician2.electionResults);
  
  const setStateResults = function (state) {
    theStates[state].winner = null;
    
    if (politician1.electionResults[state] > politician2.electionResults[state]){
      theStates[state].winner = politician1;
    
    }else if (politician1.electionResults[state] < politician2.electionResults[state]){
      theStates[state].winner = politician2;
    }
    
  const stateWinner = theStates[state].winner;
    if (stateWinner !== null){
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11, 32, 57];
    }
    
  const stateInfoTable = document.getElementById("stateResults");  
  let header = stateInfoTable.children[0].children[0];
  let stateName = header.children[0];
  let stateAbbrev = header.children[1];
  let body = stateInfoTable.children[1];
  let name1 = body.children[0].children[0];
  let result1 = body.children[0].children[1];
  let name2 = body.children[1].children[0];
  let result2 = body.children[1].children[1];
  let winnerName = body.children[2].children[1];
  
  
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  name1.innerText = politician1.name;
  name2.innerText = politician2.name;
  result1.innerText = politician1.electionResults[state];
  result2.innerText = politician2.electionResults[state];
    
    
  if (theStates[state].winner === null){
      winnerName.innerText = "DRAW";
  } else {
      winnerName.innerText = theStates[state].winner.name;
  }
  
  /*if (politician1.electionResults[state] > politician2.electionResults[state]){
      winnerName.innerText = politician1.name;
    
  } else if (politician1.electionResults[state] < politician2.electionResults[state]){
      winnerName.innerText = politician2.name;
      
  } else { 
    winnerName.innerText = "Tie!";
    
  }*/
      
  
  const table = document.getElementById("countryResults");
   
  table.children[0].children[0].children[0].innerText = politician1.name;
  table.children[0].children[0].children[1].innerText = politician1.totalVotes;
  table.children[0].children[0].children[2].innerText = politician2.name;
  table.children[0].children[0].children[3].innerText = politician2.totalVotes;
  table.children[0].children[0].children[5].innerText = winner;
    
  };
  
  
  politician1.tallyVotes();
  politician2.tallyVotes();
  
  
  console.log(politician1.totalVotes);
  console.log(politician2.totalVotes);
  
  let winner = "";
  
  if (politician1.totalVotes > politician2.totalVotes){
    winner = politician1.name;
  }  
  
  else if (politician1.totalVotes < politician2.totalVotes){
    winner = politician2.name;
  }  
    
  else {
    winner = "No one";
  }
  
  console.log (winner + " is the winner!");
  
    
  