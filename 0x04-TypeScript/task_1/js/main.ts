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

// ✅ Task 2 – Director Interface (Extends Teacher)
interface Director extends Teacher {
  numberOfReports: number; // mandatory property
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
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log("PrintTeacher:", printTeacher("John", "Doe"));

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
