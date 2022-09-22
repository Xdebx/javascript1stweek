//using map
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
  ];
  persons.map((person) => console.log(person.firstname)); //gets all the firstname
  
  var newPersons = persons.map((person) => {
    console.log(person); 
    return [person.firstname, person.lastname].join(" ");
    //Gets all the fname and lname with property
  });
  
  console.log(newPersons); //Gets all the fname and lname 