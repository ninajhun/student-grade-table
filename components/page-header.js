class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateAverage(newAverage){
    console.log(newAverage);
    var avgGradesBadge = document.querySelector(".badge");
    avgGradesBadge.textContent = newAverage;
  }

}
