class Person {
  name = null;
  age = null;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce = () => {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  };
}

class Student extends Person {
  grade = null;
  subjects = [];

  constructor(name, grade, subjects) {
    super(name);
    this.grade = grade;
    this.subjects = subjects;
  }

  study = (subject) => {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
    }
  };

  getInfo = () => {
    return `Student: ${this.name}, Grade: ${this.grade}, Subjects: ${this.subjects} `;
  };
}

class Teacher extends Person {
  subject = null;
  salary = null;

  constructor(subject, salary, name) {
    super(name);
    this.subject = subject;
    this.salary = salary;
  }

  teach = () => {
    return `Mr/Ms. ${this.name} is teaching ${this.subject}`;
  };

  getInfo = () => {
    return `Teacher: ${this.name}, Subject: ${this.subject}, Salary: ${this.salary}`;
  };
}

class CLassroom {
  teacher = null;
  students = [];

  constructor(teacher) {
    this.teacher = teacher;
    this.students = [];
  }

  addStudent = (student) => {
    this.students.push(student);
  };

  listMembers = () => {
    console.log("Teacher:");
    console.log(this.teacher.getInfo());

    console.log("Students:");
    this.students.forEach((student) => {
      console.log(student.getInfo());
    });
  };

  findStudent = (name) => {
    return this.students.map((student) => {
      if (student.name.toLowerCase() === name.toLowerCase()) {
        return student.name;
      } else {
        return;
      }
    });
  };

  averageAge = () => {
    if (this.students.length === 0) {
      return 0;
    }

    const totalAge = this.students.reduce((acc, current) => acc + current, 0);

    return totalAge / this.students.length;
  };
}
