const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {

  return tutorials.map(sentence => {

    let splitSentence = sentence.split(" ");

    for (let i=0;i < splitSentence.length;i++){
      splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1);
    }
    return splitSentence.join(" ");
});
};
titleCased(tutorials);
/*

function titleCased() {
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  });
}
/*
const titleCased = tutorials.map((sentences){
return tutorials.map((sentences){
    sentences = sentences.split(' ');

    for (let i=0; i<sentences.length; i++) {
      sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
     }
    sentences=sentences.join(' ');
    return sentences;
  });

});
