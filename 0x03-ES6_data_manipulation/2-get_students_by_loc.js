export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((item) => item.location === city);
}
