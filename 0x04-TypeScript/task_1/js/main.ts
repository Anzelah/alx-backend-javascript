interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(fn: (firstName: string, lastName: string) => string) {
  const str = firstName.substring(0, 1);
  return `${str}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string) => string;
}
