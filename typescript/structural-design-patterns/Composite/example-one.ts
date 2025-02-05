interface Employee {
  getName: () => string;
  getSalary: () => number;
  getRole: () => string;
}

class Developer implements Employee {
  constructor(
    private name: string,
    private salary: number,
  ) {}

  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  getRole() {
    return "Developer";
  }
}

class Designer implements Employee {
  constructor(
    private name: string,
    private salary: number,
  ) {}

  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  getRole() {
    return "Designer";
  }
}

// Composite

interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];
  constructor(
    private name: string,
    private salary: number,
  ) {}

  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
  getRole() {
    return "Designer";
  }
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }
  getEmployees(): Employee[] {
    return this.employees;
  }
}

// Client Code
let dev1 = new Developer("John Doe", 12000);
let dev2 = new Developer("Mohamed Almatry", 20000);
let designer = new Designer("Mark", 8000);

let manager = new Manager("Jane Smith", 25000);

manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer);

console.log("Manager's Total Salary: ", manager.getSalary());
console.log(manager.getEmployees());
