$.ajax({
  url: "https://sgt.lfzprototypes.com/api/users",
  method: "POST",
  data: {
    firstName: "Nina",
    lastName: "Jhunjhnuwala",
    cohort: "c04.20"
 },
  success: function(response){
    console.log(response);
  }
})
