class GradeForm {
  constructor(formElement, gradeID) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
    this.gradeID = gradeID;
  }

  onSubmit(createGrade, updateGrade) {
    this.createGrade = createGrade;
    this.updateGrade = updateGrade;
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    var id = formData.get('id');

    var button = document.querySelector(".btn-success");
    if (button.getAttribute("id") === "update"){
      this.updateGrade(name, grade, course, this.gradeID);
      this.resetForm;

    }else {
      this.createGrade(name, course, grade);
      event.target.reset();
    }


  }


 resetForm(){
   var name = document.getElementById('name');
   var grade = document.getElementById('grade');
   var course = document.getElementById("course");

   name.value = " "
   grade.value = " ";
   course.value = " ";
   document.querySelector(".btn-success").textContent = "Add"
   document.getElementById("form-header").textContent = "Add Grade"


 }

}
