$.getJSON("DashJSON.json",loadOptions) /*Get JSON Function*/

function loadOptions(data) { /*Loading JSON datas from the JSON*/
	console.log(data);
	console.log(data.ManageRoute); 
	console.log(data.ManageBus);
	console.log(data.BusTicketInfo);
	console.log(data.Dashboard);

	$.each(data.ManageRoute, function(index, value) /*Passing JSON Propertied in to Menu where JSON Name is "Manage Route"*/
	{		
		var routes = $("<li>", {
			"text" : value
		});
		routes.appendTo($("#routes"));
	});

	$.each(data.ManageBus, function(index, value) /*Passing JSON Propertied in to Menu where JSON Name is "ManageBus"*/
	{		
		var bus = $("<li>", {
			"text" : value
		});
		bus.appendTo($("#bus"));
	});

	$.each(data.BusTicketInfo, function(index, value) /*Passing JSON Propertied in to Menu where JSON Name is "BusTicketInfo"*/
	{		
		var TicketInfo = $("<li>", {
			"text" : value
		});
		TicketInfo.appendTo($("#TicketInfo")); 

	});

	$.each(data.Dashboard,function(index, value) /*Passing JSON Propertied in to Menu where JSON Name is "Dashboard"*/
	{
		var dashboarditem = $("<li>",{
			"text" :value
		});
		dashboarditem.appendTo($("#dashboarditem"));
	});
}

/*Click Dropdown toogle ON*OF*/

$( ".menu1" ).click(function() {
  $( "#routes" ).toggle();
});

$( ".menu2" ).click(function() {
  $( "#bus" ).toggle();
});

$( ".menu3" ).click(function() {
  $( "#TicketInfo" ).toggle();
});
/*function toogle() 
{
    var list = document.getElementById("#routes");
    list.toogle();
}


/*$( "#container" ).click(function() {
  $( "#routes" ).toggle( "slow", function() {
  });
});*/


/*  $(document).ready(function () {
        $('<routes ').hover(
        function () {
            //show submenu
            $('ul', this).slideDown("fast");
        }, function () {
            //hide submenu
            $('ul', this).slideUp("fast");
        });
    });*/
   /*$(function(){
    $('#ManageRoute').click(function(){
        $('#routes').show();        
    });
    $('#routes li').click(function(e){
         $('#ManageRoute').text($(this).text());
         $('#routes').hide(); 
        $(this).addClass('current');
        e.preventDefault();
    })
})*/