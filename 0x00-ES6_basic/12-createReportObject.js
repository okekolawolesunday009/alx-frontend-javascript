export default function createReportObject(employeesList) {
	
	const fullList = {
		...employeesList,
		getNumberOfDepartments(){
			return this.employeesList.length;
		}

	};

	return fullList;
}
