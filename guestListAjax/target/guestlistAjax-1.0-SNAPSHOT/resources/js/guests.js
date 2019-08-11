$(function() {
    $("#send").click(updateGuests);
});






function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guests.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {


   let guestList="<ol>";
   for(let temp of data){

       guestList+="<li>"+temp.first+" "+temp.last+"</li>";

   }



    $("#guestList").html(guestList+"</ol>");
    
}