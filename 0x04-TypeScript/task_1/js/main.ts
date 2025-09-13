// task_1/js/main.ts

// ✅ Task 1 – Teacher Interface
interface Teacher {
  readonly firstName: string; // cannot be modified after initialization
  readonly lastName: string; // cannot be modified after initialization
  fullTimeEmployee: boolean; // must always be present
  yearsOfExperience?: number; // optional
  location: string; // must always be present
  [key: string]: any; // allow additional attributes
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log("Teacher:", teacher3);

// ✅ Task 2 – Directors Interface Extends Teacher
interface Director extends Teacher {
  numberOfReports: number; // mandatory for directors
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log("Director:", director1);

// ✅ Task 3 – printTeacher Function + Interface
interface PrintTeacherFunction {
  (args: { firstName: string; lastName: string }): string;
}

// Named function declaration using object destructuring
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName[0]}. ${lastName}`;
}

// Call the function
console.log(
  "PrintTeacher:",
  printTeacher({ firstName: "John", lastName: "Doe" })
); // J. Doe

// ✅ Task 4 – StudentClass + Interfaces

// Interface for constructor parameters
interface StudentProps {
  firstName: string;
  lastName: string;
}

// Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class declaration with constructor using interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(student: StudentProps) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Jane", lastName: "Smith" });
console.log("Student Name:", student.displayName());
console.log("Student Work:", student.workOnHomework());
