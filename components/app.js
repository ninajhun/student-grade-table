class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var sum = 0;

    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }

    var average = (sum / grades.length);

    this.pageHeader.updateAverage(average);
  }


  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "LAQ5s1z6"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError

    })
  }

  start() {
    this.getGrades();
  }

}
