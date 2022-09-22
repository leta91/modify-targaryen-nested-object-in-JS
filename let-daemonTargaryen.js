let daemonTargaryen = {
  birthYear: '81 AC',
  twinDaughters: 2,
  firstSon: 'Aegon',
  secondSon: 'Viserys',
  wives: {
    totalNumber: 3,
    names: {
      firstWife: 'Rhea Royce',
      secondWife: 'Laena Velaryon',
      thirdWife: 'Rhaenyra Targaryen'
    }
  }
};

/* to change the value of an object located into many levels of depth,
(in this case we have an object (wives) nested within an object (daemonTargaryen),
use dot notation with the syntax mainObjectName.directProperty.subProperty.finalProperty
or as many properties as you need to reach the needed value from the main object

the main properties of the (daemonTargaryen) object are:
birthYear, twinDaughters, firstSon, secondSon and wives

the value of the property (wives) is the object that starts at line 6 and ends at line 13
*/

// Only change code below this line
daemonTargaryen.wives.names.thirdWife = "The Realm's Delight";
// Only change code above this line

console.log(daemonTargaryen);