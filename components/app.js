class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this);
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this)
  }

  //GET GRADES
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


  //CREATE GRADES
  createGrade(name, course, grade) {

    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "LAQ5s1z6"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError

    })
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  //DELETE GRADES
  deleteGrade(id) {
    var deleteID = ("https://sgt.lfzprototypes.com/api/grades/" + id)
    console.log(deleteID);

    $.ajax({
      method: "DELETE",
      url: deleteID,
      headers: {
        "X-Access-Token": "LAQ5s1z6"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleDeleteGradeError

    })
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }

//UPDATE GRADE
  updateGrade(id) {
    console.log(id);
    var updateID = ("https://sgt.lfzprototypes.com/api/grades/" + id)
    console.log(updateID);
  }

  handleUpdateGradeError(error) {
    console.error(error);
  }

  handleUpdateGradeSuccess() {
    this.getGrades();
  }


//START
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

}
