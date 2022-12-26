"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    id;
    courses;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students;
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor, course) {
        this.instructor = instructor;
        instructor.assignCourse(course);
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student('Alice', 20, 12345);
const student2 = new Student('Bob', 21, 12346);
const instructor1 = new Instructor('Eve', 30, 40000);
const instructor2 = new Instructor('Charlie', 35, 45000);
const course1 = new Course(1, 'Introduction to Computer Science');
const course2 = new Course(2, 'Advanced Programming');
const department1 = new Department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1, course1);
console.log(student1.getName()); // Output: Alice
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses[0].name); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]
