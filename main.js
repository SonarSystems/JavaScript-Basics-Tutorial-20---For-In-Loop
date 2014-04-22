var text = "";
var person = {firstname:"Bruce", lastname:"Wayne", location:"Gotham City", awesomeness:1000};


for (var x in person)
{
	text = text + person[x];
}

alert(text);