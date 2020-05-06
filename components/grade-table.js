class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }

  updateGrades(grades){
    var tbody = this.tableElement.querySelector("tbody");
    console.log(grades);
    tbody.texContent = " ";

    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      row.appendChild(name);
      row.appendChild(course);
      row.appendChild(grade);

      tbody.appendChild(row);

    }
  }

}
