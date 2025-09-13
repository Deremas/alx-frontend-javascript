// task_1/js/main.ts

// ✅ Task 1 – Teacher Interface
interface Teacher {
  readonly firstName: string; // cannot be modified after initialization
  readonly lastName: string; // cannot be modified after initialization
  fullTimeEmployee: boolean; // must always be present
  yearsOfExperience?: number; // optional
  location: string; // must always be present
  [key: string]: any; // allows additional properties like contract
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: false,
  contract: false, // extra property allowed due to index signature
};

console.log("Teacher:", teacher3);

// ✅ Task 2 – Directors Interface Extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // additional property required for directors
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Director:", director1);

// ✅ Task 3 – printTeacher Function + Interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log("PrintTeacher:", printTeacher("John", "Doe")); // J. Doe

// ✅ Task 4 – StudentClass + Interfaces
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

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
console.log("Student Name:", student.displayName());
console.log("Student Work:", student.workOnHomework());
