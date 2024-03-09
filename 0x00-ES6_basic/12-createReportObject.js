export default function createReportObject(employeesList) {
  const allEmployees = {
    allEmployees: employeesList,
  };
	  Object.defineProperty(allEmployees, 'getNumberOfDepartments', {
    value: () => Object.keys(employeesList).length,
    enumerabe: false,
  });

  return allEmployees;
}
