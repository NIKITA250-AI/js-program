let students=[
  { name: "Emily", averageMarks: 89 },
  { name: "Daniel", averageMarks: 72 },
  { name: "Sarah", averageMarks: 58 },
  { name: "Alex", averageMarks: 85 }
]
function findStudents(students){
return students.filter(function(student){
    return student.averageMarks>80
})
}
console.log(findStudents(students))
