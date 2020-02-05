var totalvotes  = 0;
var electionResults = null;
var politicianName = "";

var makePolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tallyUpTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 
};
  
  
  return politician;
};
 var caroline = makePolitician("Caroline Bingley", [132,17,11])

  var elizabeth = makePolitician("Elizabeth Bennet", [245,141,136]);

caroline.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

elizabeth.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

caroline.electionResults[9] = 1;
elizabeth.electionResults[9] = 28;
caroline.electionResults[4] = 17;
elizabeth.electionResults[4] = 38;
caroline.electionResults[43] = 11;
elizabeth.electionResults[43] = 27;

var setStateResults =function(state) { 
  theStates[state].winner = null;
  if (caroline.electionResults[state] > elizabeth.electionResults[state]) {
    theStates[state].winner = caroline;
  }
  else if (elizabeth.electionResults[state] > caroline.electionResults[state]) {
    theStates[state].winner = elizabeth;
  }
  else {
    theStates[state].winner = null;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
  var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = caroline.name;
candidate2Name.innerText = elizabeth.name;
 
candidate1Results.innerText = caroline.electionResults[state];
candidate2Results.innerText = elizabeth.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
};

caroline.tallyUpTotalVotes();
elizabeth.tallyUpTotalVotes();

var winner = "";
if (caroline.totalVotes > elizabeth.totalVotes) {
  winner = caroline.name
} else if (elizabeth.totalVotes > caroline.totalVotes) {
  winner = elizabeth.name
}else {
  winner = "DRAW"
}

var countryResults = document.getElementById ('countryResults');

countryResults.children[0].children[0].children[0].innerText = caroline.name;
countryResults.children[0].children[0].children[1].innerText = caroline.totalVotes;
countryResults.children[0].children[0].children[2].innerText = elizabeth.name;
countryResults.children[0].children[0].children[3].innerText=elizabeth.totalVotes;
countryResults.children[0].children[0].children[5].innerText=winner;

