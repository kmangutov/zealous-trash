
var userService = LexUserService("clients")

var getForm = function() {

	var inputs = [
		"firstName",
		"lastName",
		"phone",
		"primaryAddress",
		"secondaryAddress",
		"occupation",
		"employer",
		"income",
		"updates"
	];

	var data = {};

	inputs.forEach(function(input) {
		var val = $("#" + input + "Input").val();
		data[input] = val;
	});

	return data;
}

$(document).ready(function() {

	$("#signup").click(function() {


		//TODO: VALIDATE FORM

		var success = function(response) {
			//alert(JSON.stringify(response));
			window.location.href = "client-new-query.html";
		};

		var fail = function(response) {
			alert("Fail: " + JSON.stringify(response));
		}

		var userId = _getLoggedInUserId();
		userService.put(userId, getForm(), success, fail);

	});
});