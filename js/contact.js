//function to take input from form
$('#submit').click(function(){
		var inputName = $('#input_name').val();
		var describeProblem = $('#describe_problem').val();
		var bestTime = $('#best_time').val();			
		alert(inputName + '\n\n' + describeProblem + '\n\n' + bestTime);
	
			
				$.ajax({
					url: '../docs/ppp',
					method: 'POST',
					data: {"Name" : inputName, "Problem" : describeProblem, "Contact_Info" : bestTime},
					dataType: "xml",
					success: alert("Success"),
					error: alert("Fail")
				});
		
			
	
		});