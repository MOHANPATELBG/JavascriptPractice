 document.getElementById("demo1").innerHTML="This is Dynamic message"
 document.getElementById("demo2").innerHTML="Welcome to Javascript"
 document.getElementById("myBtn").onclick= displayDate;
	function displayDate()
	{
		document.getElementById("myDate").innerHTML= Date();
	}