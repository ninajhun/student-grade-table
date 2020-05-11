class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("hi from handle submit")

    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');

    var button = document.querySelector(".btn-success");
    if (button.getAttribute("id") === "update"){
      console.log("update");
    }else {
      console.log("add")
    }

    this.createGrade(name, course, grade);
    event.target.reset();
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
