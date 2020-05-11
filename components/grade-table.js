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
        tbody.append(this.renderGradeRow(grades[i], this.deleteGrade, this.updateForm) );
      }
    }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  onUpdateClick(updateForm){
    this.updateForm = updateForm;
  }

  renderGradeRow(data, deleteGrade, updateForm) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");

    var operationsCol = document.createElement("td");
    var changeButton = document.createElement("button");
    var changeIcon = document.createElement("i")
    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i")


    changeButton.classList.add("fas", "fa-edit");
    deleteButton.classList.add("fas", "fa-trash");
    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;

    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    })

    changeButton.addEventListener("click", function () {
      console.log("hi from the change button!");
      updateForm(data);
    })

    changeButton.appendChild(changeIcon)
    deleteButton.appendChild(deleteIcon);
    operationsCol.append(changeButton, deleteButton);


    row.append(name, course, grade, operationsCol);


    return row;
  }
}
