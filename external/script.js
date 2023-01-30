function openTopic(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("opendefualt").click();
function search_page() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('tablinks');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
window.onload = function() {
      var month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth();
      var currentMonth = month[mm];
      var yyyy = today.getFullYear();
      today = currentMonth + ' ' + dd + ', ' + yyyy;
      document.getElementById('date').innerHTML = today;
    }
