var price, crust, topping-price;
let total = 0;
function myPizza(size,crust,topping-price,total){
	this.size = size;
	this.crust = crust;
	this.topping = topping;
	this.total = total;
};
$(document).ready(function(){
	$("button.order").click(function(){
		$("button.order").hide();
		$("#receipt").hide();
		$("div.choice").slideDown(1000);
	});
});
$("button.order").ready(function(){
	let psize = $(".name option:selected").val();
	let pcrust = $("#size option: selected").val();
	let ptopping =[];
	$.each($("input[name='toppings'].checked").functio(({
		ptopping.push($(this).val());

	});
	console.log(ptopping.join(","));
});