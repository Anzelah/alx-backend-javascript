export default function updateStudentGradeByCity(students, city, newGrades) {

	const newArray = students.filter((std) => std.location === city)
		.map((std) => {
		const matching = newGrades.find((g) => g.studentId === std.id);

		
		if (matching) {
			return { ...std, grade: matching.grade }
		} else {
			return { ...std, grade: 'N/A' }
		}
		});

	return newArray;
}
