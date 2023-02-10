function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

logTwoValues(1,2);
console.log(introduction("Aki"));
console.log(introduction("Samip"));
console.log(introductionWithLanguage("Aki" , "Ember.js"));
console.log(introductionWithLanguage("Samip" , "React"));
console.log(introductionWithLanguageOptional("Gracie"));
console.log(introductionWithLanguageOptional("Gracie", "Python"));