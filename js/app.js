/*const calculadora = (value)=>{
	const flexContent = $('<div class="flex-content"></div>');
	const div = $('<div></div>');
	const input = $('<input type="button">');

	flexContent.append(div);
	let cont =0;
	for (var i = 0; i < 6; i++) {
		cont++;
		input.value=value;
	}
	return $('.flex').append(flexContent);
}*/

$(function(){
	var screenVal = $('input:text');

	$("input:button").on("click", function(){
		var eachNumber = $(this).val();
		var currentScreen = screenVal.val();
		currentScreen += eachNumber;
		screenVal.val(currentScreen);
		if ($(this).val() == "C") {
			screenVal.val("");
		}
	});

	$("button").click(function(event){
		event.preventDefault();
		screenVal.val(eval(screenVal.val()));
	});
});


