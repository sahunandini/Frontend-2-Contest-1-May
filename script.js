/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const students = arr.filter((student) => student.marks > 50);
  const studentNames = students.map((student) => student.name);
  console.log(studentNames);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((student) => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 4, name: "alice", age: "18", marks: 90 },
    { id: 5, name: "bob", age: "19", marks: 75 },
    { id: 6, name: "charlie", age: "20", marks: 60 },
  ];
  arr = arr.concat(newArr);
  console.log(arr);
}
