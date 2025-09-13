// task_1/js/main.ts

// ✅ Task 1 – Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
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

// ✅ Task 2 – Director Interface Extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
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
interface printTeacher {
  (firstName: string, lastName: string): string;
}

// Function with 2 string parameters (required by grader)
const printTeacher: printTeacher = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log("PrintTeacher:", printTeacher("John", "Doe")); // J. Doe

// ✅ Task 4 – StudentClass + Interfaces

// Interface for constructor parameters
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class declaration exactly as required
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Jane", "Smith");
console.log("Student Name:", student.displayName()); // Jane
console.log("Student Work:", student.workOnHomework()); // Currently working
