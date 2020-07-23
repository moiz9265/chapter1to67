// alert('Welcome to My Website');
// alert('Error! Please Enter a valid Password');
// alert('Welcom to JS Land..\n Happy Coding');
// alert('Welcome to JS Land');
// alert('Happy Coding! \n '+<input type="checkbox" />+'Prevent this message from creating additional dialogs');

// Chapter 21 to 25
// Task# 1

// var firstname = prompt('Enter your First name','First Name');
// var lastname = prompt('Enter your last name','Last Name');
// var fullName = 'Welcome '+firstname+' '+lastname;
// alert(fullName);

// Task# 2

// var phone = prompt('Tell me About your favourite Mobile Model');
// var phoneLength = phone.length;
// document.write('My favourite phone is: '+phone+'<br> Length of String: '+phoneLength);

// Task# 3

// var nationality = "Pakistani";
// var indexofn = nationality.indexOf('n');
// document.write('<br>String: '+nationality+'<br>');
// document.write('<br>Index of "n" is: '+indexofn+'<br>');

// Task# 4

// var greetings = "Hello World";
// var lastindex = greetings.lastIndexOf('l');
// document.write('<br>String: '+greetings+'<br>');
// document.write('<br>Last Index of l is: '+lastindex+'<br>');

// Task# 5

// var countryName = "Pakistani";
// var indexofn = countryName.charAt(3);
// document.write('<br>String: '+countryName+'<br>');
// document.write('<br>Character at Index 3 is: '+indexofn+'<br>');

// Task# 6

// var firstname = prompt('Enter your First name','First Name');
// var lastname = prompt('Enter your last name','Last Name');
// var fullName = firstname.concat(lastname);
// alert(fullName);

// Task# 7

// var city = "Hyderabad";
// var repcity = city.replace("Hyder","Islam");
// document.write('<br>City: '+city+'<br>');
// document.write('<br>After Replacement: '+repcity+'<br>');

// Task# 8

// var message = "Ali and sami are best friends. They play circket and football together";
// var change = message.replace(/and/g,"$");
// document.write(change);

// Task# 9

// var stringval = "472";
// var convert = Number(stringval);
// document.write('<br> Value: '+stringval+'<br>');
// document.write('Type: String <br>');
// document.write('<br> Value: '+convert+'<br>');
// document.write('Type: Number <br>');


// Task# 10

// var userinput = prompt("Enter any word in lowercase");
// var userupper = userinput.toUpperCase();
// document.write('<br> User Input: '+userinput+'<br>');
// document.write('Upper Case:'+userupper+'<br>');

// Task# 11

// var userinput = prompt("Enter any word in lowercase");
// var firstletter = userinput.slice(0,1);
// var userupper = firstletter.toLocaleUpperCase();
// var changeLetter = userinput.replace(firstletter,userupper);
// var joinboth = userupper.concat(userupper);
// document.write('<br> User Input: '+userinput+'<br>');
// document.write('First Letter Upper Case: '+changeLetter+'<br>');

// Task# 12

// var numberval = 35.36;
// var convertt = numberval.toString();
// var removedot =  convertt.split('.').join("");
// document.write('<br> Number: '+numberval+'<br>');
// document.write('<br> Result: '+removedot+'<br>');

// Task# 13

// var username = prompt('Please enter your name');
// for(var i=0; i<username.length; i++)
// {
//     if(username.charAt(i) == "@" || username.charAt(i) == "." || username.charAt(i) == "," || username.charAt(i) == "!")
//     {
//         username = prompt('Please Enter a valid user name');
//     }
// }

// Task# 14

// var a = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to ABC Bakery what do you want to order Sir/Ma'am");
// if(search == "cake")
// {
//     document.write(search+' is availabe at index 0 in our bakery');
// }else if(search == "apple pic")
// {
//     document.write(search+' is availabe at index 1 in our bakery');
// }else if(search == "cookie")
// {
//     document.write(search+' is availabe at index 2 in our bakery');
// }
// else if(search == "chips")
// {
//     document.write(search+' is availabe at index 3 in our bakery');
// }else if(search == "patties")
// {
//     document.write(search+' is availabe at index 4 in our bakery');
// }else
// {
//     document.write('We are sorry'+search+'is not availabe at our bakery');

// }

// Task# 15

// var userpassword = prompt("Enter your Password");
// for(var i=0; i<userpassword.length; i++)
// {
//     if(userpassword.charAt(i) == "@" || userpassword.charAt(i) == "." || userpassword.charAt(i) == "," || userpassword.charAt(i) == "!" || userpassword.charAt(i) == "&")
//     {
//         userpassword = prompt('Please Enter a valid Password');
//     }
// }

// firstChar = userpassword.slice(0,1);
// if(firstChar=="0" || firstChar=="1" || firstChar=="2" || firstChar=="3" || firstChar=="4" || firstChar=="5" || firstChar=="6" || firstChar=="7" || firstChar=="8" || firstChar=="9")
// {
//     userpassword = prompt('Please cannot beging with a Number please Enter a valid Password');
// }

// if(userpassword.length < 6)
// {
//     userpassword = prompt('Please Enter a valid Password with atleast 6 characters');
    
// }

// Task# 16

// var uni = "University Of Karachi";
// var changeInArray = uni.split("");
// for(var a=0; a<changeInArray.length; a++)
// {
//     document.write(changeInArray[a]+'<br>');
// }

// Task# 17

// var lastIndex = prompt("Enter any word");
// var check = lastIndex.slice(-1);
// document.write('User Input: '+lastIndex);
// document.write('<br>Last Character of input is: '+check);

// Task# 18

// var content = "The quick brown fox jumps over the lazy dog";
// var count   = (content.match(/the/g)).length;
// document.write('Text: '+content+'<br>');
// document.write('There are '+count+' occurence(s) of word the'); 

// Chapter# 26-30
// Task# 1

// var positiveInt = prompt("Enter any positive Integer");
// var roundOff = Math.round(positiveInt);
// var flooroff = Math.floor(positiveInt);
// var ceiloff  = Math.ceil(positiveInt);
// document.write('<br>Number: '+positiveInt+'<br>');
// document.write("round off value: "+roundOff+'<br>');
// document.write("floor value: "+flooroff+"<br>");
// document.write("ceil value: "+ceiloff);

// Task# 2

// var negativeInt = prompt("Enter any Negative Floating value");
// var roundOff = Math.round(negativeInt);
// var flooroff = Math.floor(negativeInt);
// var ceiloff  = Math.ceil(negativeInt);
// document.write('<br>number: '+negativeInt+'<br>');
// document.write("round off value: "+roundOff+'<br>');
// document.write("floor value: "+flooroff+"<br>");
// document.write("ceil value: "+ceiloff);

// Task# 3

// var absValue = prompt("Enter any Number");
// var result = Math.abs(absValue);
// document.write("The absolute value of "+absValue+' is '+result);

// Task# 4
// var dice = Math.random();
// var diceResult = (dice * 6) + 1;
// document.write("random dice value: "+diceResult);

// Task# 5

// var randomDice = (Math.floor(Math.random() + 1.5 ));
// if(randomDice == 1)
// {
//     document.write(randomDice+'<br>');
//     document.write('random coins value: Heads');
// }else
// {
//     document.write(randomDice+'<br>');
//     document.write('random coins value: Tails');
// }

// Task# 6

// var rand = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100: "+rand);

// Task# 7

// var weight = prompt("Please Enter your weight");
// var convert = parseFloat(weight);
// document.write("The weight of user is: "+convert+' kilograms');

// Task# 8

// var secrectNumber = Math.floor(Math.random() * 10);
// var randNumber = prompt("Please Enter any number between 1 to 10");
// if(secrectNumber == randNumber)
// {
//     alert('Congratulations!');
// }else{
//     alert('Try again');
// }

// Chapter# 31-34
// Task# 1

// var currentDate = new Date();
// document.write(currentDate);

// Task# 2

// var now = new Date();
// var Month = now.getMonth();
// var currenctMonth = "";
// if(Month == 0)
// {
//     currenctMonth = "January";
// }
// else if(Month == 1)
// {
//     currenctMonth = "February";
// }else if(Month == 2)
// {
//     currenctMonth = "March";
// }else if(Month == 3)
// {
//     currenctMonth = "April";
// }else if(Month == 4)
// {
//     currenctMonth = "May";
// }else if(Month == 5)
// {
//     currenctMonth = "June";
// }else if(Month == 6)
// {
//     currenctMonth = "July";
// }else if(Month == 7)
// {
//     currenctMonth = "August";
// }else if(Month == 8)
// {
//     currenctMonth = "September";
// }else if(Month == 9)
// {
//     currenctMonth = "October";
// }else if(Month == 10)
// {
//     currenctMonth = "November";
// }else if(Month == 11)
// {
//     currenctMonth = "December";
// }

// document.write("Current Month: "+currenctMonth);


// Task# 3

// var currentDate = new Date();
// var check = currentDate.toString();
// var convert = check.slice(0,3);
// document.write('Today is: '+convert);

// Task# 4

// var currentDate = new Date();
// var converToString = currentDate.toString();
// var getDay = converToString.slice(0,3);
// if(getDay == "Sat" || getDay == "Sun")
// {
//     alert("It's a Fun day");
// }

// Task# 5

// var currentDate = new Date();
// var getDatee = currentDate.getDate();
// if(getDatee < 16)
// {
//     document.write("First fifteen days of the month");   
// }else{
//     document.write("Last fifteen days of the month");
// }

// Task# 6

// var currentDate = new Date();
// var getmiliseconds = currentDate.getTime();
// var getminutes = getmiliseconds / (1000 * 60 * 60);
// document.write('Current Date: '+currentDate+'<br>');
// document.write('Elapses MilliSeconds Since January 1, 1970: '+getmiliseconds+'<br>');
// document.write('Elapses Minutes Since January 1, 1970: '+getminutes+'<br>');

// Task# 7

// var currentDate = new Date();
// var gethour    = currentDate.getHours();
// if(gethour < 13)
// {
//     document.write('Its AM');
// }else{
//     document.write('Its PM');
// }

// Task# 8

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later Date: "+laterDate);

// Task# 9

// var lastramzan     = new Date("June 18, 2015");
// var upcomingramzan = new Date("Apr 24, 2020");
// var oneday          = 24 * 60 * 60 * 1000;
// var getday         = Math.floor(Math.abs(lastramzan - upcomingramzan) / oneday);
// document.write(getday+' days have passed since 1st ramzan 2015');

// Task# 10

// var getdate = new Date("Dec 05, 2015");
// var getsec = getdate.getTime();
// var sec    = getdate / (1000 * 60);
// // alert(sec);
// document.write("On Reference Date: "+getdate+', '+sec+' seconds had passed since begining of 2015');

// Task# 11

// var currentdate = new Date();
// var oneHourAgo = new Date(currentdate.getTime() - (1000*60*60));
// document.write('Current Date: '+currentdate+'<br>');
// document.write('1 hour ago: '+hourAgo+'<br>');

// Task# 12

// var currentdate = new Date();
// var yearsback = new Date("Dec 19, 1920");
// document.write("Current Date: "+currentdate);
// document.write("<br> 100 years back, it was "+yearsback);

// Task# 13

// var yourage = prompt('Enter your age');
// var year    = new Date();
// var fullyear = year.getFullYear();
// var getAge   = fullyear - yourage;
// document.write("Your age is "+yourage);
// document.write("Your birth year is "+getAge);

// Task# 14

// document.write("<h2><b>K-Electric Bill</b></h2><br>");
// document.write("Customer Name: <b>ABC Customer</b><br>");
// document.write("Month: <b>June</b><br>");
// document.write("Number of Units: <b>410</b><br>");
// document.write("Charges Per Unit: <b>16</b><br><br>");
// var bill = 410 * 16;
// var gross = bill + 350;
// document.write("Net Amount payable (within Due Date) : <b>"+bill+"</b><br>");
// document.write("Late Payment Surcharge: <b>350</b><br>");
// document.write("Gross Amount payable (after Due Date) : <b>"+gross+"</b><br>");

// Chapter# 35 to 38
// Task# 1

// function currentdate()
// {
//     var currdate = new Date();
//     document.write(currdate);
//  }
//  currentdate();

// Task# 2

// function usergreetings()
// {    
//     var firstname = prompt('Enter your First name');
//     var lastname = prompt('Enter your last name');
//     var fullName = 'Hello '+firstname+' '+lastname;
//     alert(fullName);

// }
// usergreetings();

// Task# 3

// function addition()
// {
//     var firstNum = prompt('Enter First Number');
//     var secondNum = prompt("Enter Second Number");
//     var result = Number(firstNum) + Number(secondNum);
//     document.write(result);
// }
// addition();

// Task# 4

// function smallCalculator(num1,num2,oppr)
// {
//     if(oppr == "+")
//     {
//         document.write(num1 + num2);
//     }else if(oppr == "-")
//     {
//         document.write(num1 - num2);

//     }else if(oppr == "*")
//     {
//         var result = num1 * num2;
//         document.write(result);
//     }else if(oppr == "/")
//     {
//         var result = num1 / num2;
//         document.write(result);
//     }
// }
// smallCalculator(10,20,'*');

// Task# 5

// function squaresArgument(val)
// {
//       document.write(val * val);  
// }
// squaresArgument(2);

// Task# 6

// Task# 7

// function counting()
// {
//     var firstNum = prompt('Enter First Number');
//     var secondNum = prompt('Enter Second Number');
//     for(var i=Number(firstNum); i<=Number(secondNum); i++)
//     {
//         document.write(i+'<br>');
//     }
// }
// counting();


// Task# 8

// function calculateHypotenuse()
// {
//     var base = prompt('please Enter base');
//     var perp = prompt('Please enter perpendicular');
//     var hyp = Number(base * base) + Number(perp * perp);
//     document.write(hyp);

// }
// calculateHypotenuse();

// Task# 9

// function area(w,h)
// {
//     var A = Number(w) * Number(h);
//     document.write(A);
// }

// area(25,26);

// Task# 10

// function changecase(str)
// {
//     for(var i=0;i<str.length; i++)
//     {
//         if(str.charAt(i) == '')
//         {
//             str.charAt(i+1).toUppercase();
//         }
        
//     }
//     document.write(str);

// }
// changecase("the quick brown fox");

// Task# 13

// function findLetter(str,letter)
// {
//     var strval = str.length;
//     var count = 0;
//     for(var a=0; a<str.length; a++)
//     {
//         if(str.charAt(a) == letter)
//         {
//             ++count;
//         }
//     }
//     document.write(letter+' appears '+count+' times in this string');
// }
// findLetter('hello how are you','o');


// Task# 14

// function calcCircumference(r)
// {
//     var result = 2 * 3.14 * Number(r);
//     document.write("Circumference is: "result.toFixed(2));
// }
// calcCircumference(10);

// function calcArea(r)
// {
//     document.write("Area of a circle is: "3.14 * Number(r * r));
// }
// calcArea(4)

// Chapter 38 to 42
// Question# 1 
// function power(a, b)
// {
//     var value = a;
//     for(var i=0; i<b; i++)
//     {
//         value = value * a;
//     }
//     document.write("value of a "+a+" raised to b "+b+" is "+value);
// }
// power(2,5);

// Question# 2

// var year = prompt('Enter any year to check its a leap year or not');
// var result = year % 4;
// if(result == 0)
// {
//     document.write('The Year you entered is an leap year');
// }else
// {
//     document.write('The Year you entered is NOT an leap year');
// }

// Question# 3

// var S; 
// function Sides(a,b,c)
// {
//     S = (a+b+c) / 2; 
  // }

// function trianglesides(a,b,c)
// {
//    var area  = Math.round(S*(S-a)*(S-b)*(S-c),2);
//    document.write('Area of a Triangle is '+area);
   // }

// Sides(10,12,15);
// trianglesides(10,12,15);

// Question# 4
// var sumsub;
// function mainFunction()
// {
//     var sub1 = prompt('Enter First Subject Marks');
//     var sub2 = prompt('Enter Second Subject Marks');
//     var sub3 = prompt('Enter Third Subject Marks');
//     document.write("Subject One: "+sub1+'<br>');
//     document.write("Subject Two: "+sub2+'<br>');
//     document.write("Subject Three: "+sub3+'<br>');
//     var sumsub = +sub1 + (+sub2) + (+sub3);
   
//     average(sumsub);
//     percentage(sumsub);
// } 

// function average(subjectsum)
// {
//     var avg = subjectsum / 3;
//     document.write("Average is "+ avg+'<br>');
// }
// function percentage(sumsubject)
// {
//     var per = (sumsubject * 100) / 300;
//     document.write("Percentage is "+ per+"%");
// }
// mainFunction()

// Question # 5
// function customindexOf()
// {
//     var str = "Hello world, welcome to the universe";
//     var findChar = 'H';
//     var counter = 0;
//     for(var i=0; i<str.length; i++)
//     {
//         if(str[i] === findChar)
//         {
//             document.write('Index of '+findChar+' is '+counter);
//             break;
//         }else
//         {
//             counter++;
//         }
//     }
// }
// customindexOf()

// Question# 6

// function vowels()
// {
//   var sentence = "Hello everyone I am Muhmmad Moiz";
//   var vow = '';
//   for(var a=0; a<sentence.length; a++)
//   {
//     if(sentence[a] == 'a' || sentence[a] == 'e' || sentence[a] == 'i' || sentence[a] == 'o' || sentence[a] == 'u')
//     {
//       continue;
//     }else{

//       vow += sentence[a];
//     }
//   }
//   document.write(vow);
// }
// vowels()

// Question# 7

// function checkOccurences()
// {
//   var sentence = "Pleases read this application and give me gratuity";
//   let twovowles = false;
//   var count = 0;
//   for(var a=0; a<sentence.length; a++)
//   {
//     switch(sentence[a])
//     {
//         case 'a':
//         case 'e':
//           {
//             if(twovowles)
//             {
//               count++;
//               twovowles = false;
//             }else{
//               twovowles = true;
//             }
//             break;
//           }
//         default:
//           twovowles = false;  
//     }
    
//   }
//   document.write(count);
// }
// checkOccurences()


// Question #8

// function meters(dis)
// {
//     var totalmeters = dis * 1000;
//     document.write('Distance in Meters are '+totalmeters+'<br>');
// }
// function feet(dis)
// {
//   var totalfeets = dis * 3280.84;
//   document.write('Distance in feets are '+totalfeets+'<br>');

// } 
// function inches(dis)
// {
//   var totalinches = dis * 39370.1;
//   document.write('Distance in inches are '+totalinches+'<br>');

// }
// function centimeters(dis)
// {
//   var totalcentimeters = dis * 100000;
//   document.write('Distance in centimeters are '+totalcentimeters+'<br>');
  
// }

// function getdistance()
// {
//   var distance = prompt('Please Enter distance between 2 cities in KM');
//   meters(distance);
//   feet(distance);
//   inches(distance);
//   centimeters(distance);
// }

// getdistance();

// Question# 9

// var hours= prompt('Please Enter the total hours working of an employee');
// var totalhours = parseInt(hours);
// if(totalhours > 40)
// { 
//   var overtime = totalhours - 40;
//   var overtimepay = overtime * 12;
//   document.write('Over Time Pay of this employee is Rs.'+overtimepay);
// }else
// {
//   document.write('This employee not work overtime');
// }

// Question#10

// var amount = prompt('Enter Amount for withdraw');
// var amt    = parseInt(amount);
// var hundreds = Math.floor(amt / 100);
// var fifties  = Math.floor((amt % 100) / 50);
// var tens     = Math.floor(((amt % 100) % 50) / 10);

// document.write('100 = '+hundreds+'<br>');
// document.write('50 = '+fifties+'<br>');
// document.write('10 = '+tens);


// Chapter 43 to 48

// Question# 1
function alertbox()
{
  alert('Hello');
}

// Question# 2
function mobilefunc()
{
  alert('Thanks for visiting out site');
}

// Question# 3
$('table').on('click', '.deleteitem', function(){
  $(this).closest('tr').remove()
});


// Question# 4
$(document).on('mouseover','.myimage', function(){

    $(this).attr('src','images/two.jpg');
});

$(document).on('mouseout','.myimage', function(){

  $(this).attr('src','images/three.jpg');
});


// Question# 5
function decreasecounter()
{
  var check = parseInt($('#counter').val());
  $('#counter').val('');

  if(check > 0)
  {
    var decrement = check - 1;
    $('#counter').val(decrement);
  }else{
    var count = 0;
    $('#counter').val(count);
  }
  
}

function increasecounter()
{
  var check = parseInt($('#counter').val());
  $('#counter').val('');
  var increment = check + 1;
  $('#counter').val(increment);

}

// CHapter# 49 to 52
// Question# 1
// function signupform()
// {
//   var firstname = document.getElementById('fname').value;
//   var lastname = document.getElementById('lname').value;
//   var email     = document.getElementById('email').value;
//   var phone = document.getElementById('phone').value;

//   document.getElementById('firstname').value = firstname;
//   document.getElementById('lastname').value  = lastname;
//   document.getElementById('myemail').value   = email;
//   document.getElementById('number').value    = phone;
// }

// Question# 2
function readMorebtn()
{
  document.getElementById("readmore").style.display="block";
  document.getElementById("mybtn").style.display="none";
}

// Question# 3



// Chapter# 58 to 67
// Question# 1

function DOM_one()
{
  var mainContent = document.getElementById("main-content");

  // console.log(mainContent.childNodes[4]);
  document.write("First Child "+mainContent.childNodes[0]+"<br>");
  document.write("Second Child "+mainContent.childNodes[1]+"<br>");
  document.write("Third Child "+mainContent.childNodes[2]+"<Br>");
  document.write("Fourth Child "+mainContent.childNodes[3]+"<Br>");
  document.write("Fifth Child "+mainContent.childNodes[4]+"<br>");

  document.write(document.getElementsByClassName("render")[0].innerHTML+"<br>");
  document.write(document.getElementsByClassName("render")[1].innerHTML+"<br>");
  document.write(document.getElementsByClassName("render")[2].innerHTML+"<br>");
  document.write(document.getElementsByClassName("render")[3].innerHTML+"<br>");
  document.write(document.getElementsByClassName("render")[4].innerHTML+"<br>");
  document.getElementById('first-name').value = "Abdul";
  document.getElementById('last-name').value = "Moiz";
  document.getElementById('myemail').value = "moiz@gmail.com";
}

DOM_one();

// Question# 2
function DOM_two()
{
  var FormContent = document.getElementById('form-content');
  document.write("<br> Node type of form-content is "+ FormContent.nodeType+" means Element <br>");
  document.write("NodeType last Name is "+document.getElementById("lastName").nodeType+"<br>");
  document.write("Child Node of last Name is "+document.getElementById("lastName").childNodes[0]+"<br>");
  document.getElementById('lastName').innerHTML = "Last Name: Banker";
  document.write("First Child of ID main-content is "+document.getElementById("main-content").firstChild+"<br>");
  document.write("Last Child of ID main-content is "+document.getElementById("main-content").lastChild+"<br>");
  document.write("Previous Sibling of ID lastName is "+document.getElementById("lastName").previousSibling+"<br>");
  document.write("Next Sibling of ID lastName is "+document.getElementById("lastName").nextSibling+"<br>");
  document.write("Parent Node of ID email is "+document.getElementById("myemail").parentNode+"<br>");

}
DOM_two();

function formsubmit(e)
{
  // alert('hello');
  e.preventDefault();
  
  var fname = document.getElementById('firstname').value;
  var lname = document.getElementById('lastname').value;
  var email = document.getElementById('mynewemail').value;
  var phone = document.getElementById('myphone').value;

  // alert(fname+' '+lname+' '+email+' '+phone)

  var tableRef = document.getElementById("myTable");
  var newRow = tableRef.insertRow(-1);   
  var col1 = newRow.insertCell(0);
  var col2 = newRow.insertCell(1);   
  var col3 = newRow.insertCell(2);   
  var col4 = newRow.insertCell(3);

  var text1 = document.createTextNode(fname);
  var text2 = document.createTextNode(lname);
  var text3 = document.createTextNode(email);
  var text4 = document.createTextNode(phone);


  col1.appendChild(text1);
  col2.appendChild(text2);
  col3.appendChild(text3);
  col4.appendChild(text4);
  // var newText = document.createTextNode('1');
}