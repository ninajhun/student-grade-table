class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = " ";

    if (!grades.length) {
      this.noGradesElement.classList = " ";
    } else {
      this.noGradesElement.classList = "d-none"
    }

      for (var i = 0; i < grades.length; i++) {
        tbody.append(this.renderGradeRow(grades[i], this.deleteGrade) );
      }
    }


  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var buttonCol = document.createElement("td");
    var deleteButton = document.createElement("button");

    deleteButton.classList.add("btn", "btn-danger");

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    })

    buttonCol.appendChild(deleteButton);

    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(buttonCol);

    return row;
  }




}
