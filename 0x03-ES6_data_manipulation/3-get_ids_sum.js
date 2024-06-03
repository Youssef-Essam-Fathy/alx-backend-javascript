export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((accumlator, currentValue) => accumlator + currentValue.id, 0);
}
