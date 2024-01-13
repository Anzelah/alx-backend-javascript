export default function createEmployeesObject(departmentName, employees) {
  const ans = { [departmentName]: [...employees] };

  return ans;
}
