// // // // Function constructor

// // // // var john = {
// // // //   name: 'John',
// // // //   yearOfBirth: 1990,
// // // //   job: 'teacher'
// // // // };

// // // // var Person = function(name,
// // // //   yearOfBirth, job) {
// // // //     this.name;
// // // //     this.yearOfBirth = yearOfBirth;
// // // //     this.job = job;
// // // //   };

// // // //   Person.prototype.lastName = 'Smith';

// // // // var john = new Person('John', 1990, 'teacher');
// // // // var jane = new Person('Jane', 1969, 'stripper');
// // // // var mark = new Person('Mark', 1948, 'retired');

// // // // john.calculateAge();
// // // // jane.calculateAge();
// // // // mark.calculateAge();

// // // // console.log(john.lastName);
// // // // console.log(jane.lastName);
// // // // console.log(mark.lastName);

// // // // Object.create
// // // var personProto = {
// // //   calculateAge: function() {
// // //     console.log(2016 - this.yearOfBirth);
// // //   }
// // // };

// // // var john = Object.create(personProto);
// // // john.name = 'John';
// // // john.yearOfBirth = 1990;
// // // john.job = 'teacher';

// // // Primitives vs objects

// // // Objects
// // var a = 23;
// // var b = a;
// // a = 46;
// // console.log(a);
// // console.log(b);

// // var obj1 = {
// //   name: 'John',
// //   age: 26
// // };
// // var obj2 = obj1
// // obj1.age = 30;
// // console.log(obj1.age);
// // console.log(obj2.age);

// // //Functions
// // var age = 27;
// // var obj = {
// //   name: 'Nick',
// //   city: 'Los Angeles'
// // };
// // function change(a, b) {
// //   a = 30;
// //   b.city = 'San Francisco';
// // }

// // change(age, obj);

// // console.log(obj.city);

// // ///////////////////////////////////////////////
// // // Lecture: Functions returning functions

// // function interviewQuestion(job){
// //   if(job === 'designer') {
// //     return function(name) {
// //       console.log(name + ', can you please explain what UX design is?');
// //     }
// //   } else if (job === 'teacher') {
// //     return function(name) {
// //       console.log(name + ', what subject do you teach.');
// //     }
// //   } else {
// //     return funtion(name) ;
// //       console.log('Hello ' + name + ', what do you do?');
// //     }
// //   }

// //  var teacherQuestion = interviewQuestion('teacher');
// //  var designerQuestion = interviewQuestion('designer');

// // teacherQuestion('John');
// // designerQuestion('Jane');
// // designerQuestion('Nick');

// // interviewQuestion('teacher')('Mark');

// ////////////////////////////////////////////////// Lecture: IIFE

// /*function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();*/

// // (funtion () {
// //   var score = Math.random() * 10;
// //   console.log(score >= 5);
// // })();

// // console.log(score);

// ///////////////////////////////
// // Lecture: bind, call and apply

// var john = {
//   name: 'John',
//   age: 26,
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m a ' + this.name + 'and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I/'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
//     }
//   }
// } 
// var emily = {
//   name: 'Emily',
//   age: 35,
//   job:
// }

// john.presentation('formal', 'morning');

//////////////////////////////
// Coding Challenge 7:

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (var i = 0; i , this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
}

Question.prototype.checkAnswer =
  function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!')
    } else {
      console.log('Wrong answer. Try Again :)')
    } 
  }

var q1 = new Question('Is Nick have the Biggest Dick in all of the world?',
                  ['Yes', 'No'],
                  0);

var q2 = new Question('What is the name of this course\'s teacher?',
                  ['John', 
                  'Micheal', 
                  'Jonas'],
                   2);

var q3 = new Question('what does best describe coding?'
                  ['Boring',
                   'Hard', 'Fun',
                   'Tedious'],
                   2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt (prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);










