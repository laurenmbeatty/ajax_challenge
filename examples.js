
// $(document).ready(function() {

//     $.ajax('data.json', {
//         success: function(response){
//             console.log(response);
//         },
//         error: function(request, errorType, errorMessage){
//             alert(errorType + " " + errorMessage);
//         }
//     });

// })

$(document).ready(function() {
	$.ajax({
		url: "data.json"
	}).done(function(response){
		console.log(response);
		for (var i = 0; i<response.length; i++){
			console.log(response[i]);
			var $content = $("<div class = 'group' style='color:" + response[i].value + "'>" + "The Color # " + (i+1) + " is:" + "</div>");
			$(".content-placeholder").append($content);

			var $colorType = $("<p style = 'color:" + response[i].value + "'>" + response[i].color + " known as hex #: " + response[i].value + "</p>");
			console.log($colorType);

			$(".group").parent().append($colorType);

			//console.log(response[i].value);

			//$("#color-" + i).parent().css("color", response[i].value)

//$("#color-" + (i+1).parent().css("color", response[i].value);

		}
	});
















});