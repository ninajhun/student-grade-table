class App {
  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  getGrades(){
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

  start(){
    this.getGrades();
  }

}
