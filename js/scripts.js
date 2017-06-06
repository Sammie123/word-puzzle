$(document).ready(function() {
  $("form#formPuzzle").submit(function(event) {
    event.preventDefault();
    //var vowels = ['A', 'E', 'O', 'I', 'U'];
    var guessSentences = $("#userSentence").val().toLowerCase();
    //guessSentences.toString();
    guessSentences = guessSentences.replace('a', '-');
    // console.log(newGuess);
    alert(guessSentences);

    guessSentences.toString();
  });
});
