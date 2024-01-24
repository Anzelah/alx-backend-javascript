interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Lydia",
  lastName: "Anderson",
  age: 12,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Mark",
  lastName: "Kamau",
  age: 14,
  location: "Mombasa",
};

const studentsList: Array<Student> = [ 
        student1,
        student2,
];

const table = document.createElement("table");
const head = document.createElement("thead");
const body = document.createElement("tbody");
table.appendChild(head);
table.appendChild(body);

const headRow = document.createElement("tr");
const headCell = document.createElement("th");
headCell.textContent = "First Name";
const headCell2 = document.createElement("th");
headCell2.textContent = "Location";
headRow.appendChild(headCell);
headRow.appendChild(headCell2);

head.appendChild(headRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.textContent = student.firstName;
  const cell2 = document.createElement("td");
  cell2.textContent = student.location;

  row.appendChild(cell);
  row.appendChild(cell2);

  body.appendChild(row);
  });

document.body.appendChild(table);
