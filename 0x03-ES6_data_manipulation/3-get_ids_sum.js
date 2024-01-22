export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((total, item) => item.id + total, 0);
}
