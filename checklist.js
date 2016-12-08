$(document).ready(function(){
	console.log("ready")
	// Get a reference to the database service
	var database = firebase.database();
	function getUserData() {
    	firebase.database().ref().once("value")
   		.then(function(snapshot){
  			console.log(snapshot.val()) 
  			var results = snapshot.val().toDo
  			var toDos = "<li></li>";
  			_.forEach(results, function(result){
  				console.log(result)
  				toDos += "<li>" + result.text + "</li>"
  			})
  			$("#toDoList").append(toDos)
  		})
	}
	getUserData()
}) 
