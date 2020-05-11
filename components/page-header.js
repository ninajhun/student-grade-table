class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateAverage(newAverage){
    var avgGradesBadge = document.querySelector(".badge");
    avgGradesBadge.textContent = newAverage;
  }

}
