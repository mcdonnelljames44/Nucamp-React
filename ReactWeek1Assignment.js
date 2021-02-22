class Student {
    constructor (name, email, community) {
      this.name = name;
      this.email = email;
      this.community = community;
    }
  };
  
  class Bootcamp {
    constructor (name, level, students=[]) {
      this.name = name;
      this.level = level;
      this.students = students;
    }
  
    registerStudent(student) {

        let emailCheck = this.students.filter(s => s.email === student.email);
        if(emailCheck != undefined && emailCheck.length > 0) {
          console.log(`Student with email address ${student.email} is already registered for the ${this.name} bootcamp.`);
        }
        else {
          console.log(`Registering ${student.name}(${student.email}) as student # ${this.students.length+1} to the bootcamp ${this.name}.`);
          this.students.push(student);
        }
      return this.students;
    }
  };
  
  const student1 = new Student('Bob', 'bob@email.com', 'So Cal');
  const student2 = new Student('John', 'john@email.com', 'So Cal');
  const student3 = new Student('Mary', 'mary@email.com', 'So Cal');
  const bootcamp1 = new Bootcamp('React', 'Intermediate');
  bootcamp1.registerStudent(student1);
  bootcamp1.registerStudent(student2);
  bootcamp1.registerStudent(student3);
  bootcamp1.registerStudent(student1);