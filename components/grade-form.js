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

    this.createGrade(name, course, grade);
    event.target.reset();
  }


  // onUpdate(updateGrade){
  //   this.updateGrade = updateGrade;
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  //   console.log("hi from handle update")
  // }

}
