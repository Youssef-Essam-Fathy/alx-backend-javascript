export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filteredListOfStudents = listOfStudents.filter((student) => student.location === city);
  const mappedListOfStudents = filteredListOfStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return mappedListOfStudents;
}
