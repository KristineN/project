

document.getElementById('button').click = a;

		var a = function(but) {
			console.log("Hello");
		};

		if( document.body.attachEvent)
			document.getElementById('button').attachEvent("click", a);
