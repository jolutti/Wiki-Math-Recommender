//TODO
/*
*Place dialog near click position
*Remove dialog on click outside of dialog box
*Clean Up code
*/

$(function(){
	

chrome_getJSON = function(url,event) {
  console.log("sending RPC");
  
  chrome.extension.sendMessage({action:'getJSON',url:url}, function(response){
		//alert("the x pos: " + event.clientX);
		
			$('<div id="dialog"></div>').dialog({
        title: "Related pages",
        close: function (event, ui) {
            $(this).find("form").remove();
            $(this).dialog('destroy');
        }//,
		//position:  ['top+ 100', 200]
		//position:{my: event.clientX , at: event.clientY}
    });
	//var x =event.pageX -$(document).scrollLeft();
    //var y =event.pageY -$(document).scrollTop();
	 //$("#dialog").dialog( "option", "position", [x,y]);
	 //$("#dialog").dialog('open');
	//$( "#dialog" ).dialog( "option", "position", { my: "bottom", at: "right", of: ".mwe-math-fallback-image-inline, .tex" } );

		for(x in response.data.response.docs){
			$("#dialog").append('<a href="http://simple.wikipedia.org/wiki/'+ response.data.response.docs[x].title + '">'+response.data.response.docs[x].title +'</a><br/>');
				
		}
		return false;
	});
  
}


	$('.mwe-math-fallback-image-inline, .tex').click(function(event){
		/*
		//$('<div id="dialog"><p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the icon.</p></div>').dialog();
		$('<div id="dialog"></div>').dialog();
		//$('<div id="msg_dialog"></div>').dialog();
		//$("#firstHeading").dialog();
		$.getJSON("http://johann.lutterodt.info/dev/request.json", function(data){
			var jd  = data;
			var jdr = data.response
			//$('<div id="dialog"></div>').dialog();
			for(x in data.response.docs){
				$("#dialog").append('<a href="http://simple.wikipedia.org/wiki/'+ data.response.docs[x].title + '">'+data.response.docs[x].title +'</a><br/>');
				
			}
	
		});
		
		*/
		/*
		chrome.runtime.sendMessage({
			method: 'GET',
			action: 'xhttp',
			url:'http://johann.lutterodt.info/dev/request.json'
			//url: 'http://www.stackoverflow.com/search',
			//data: 'q=something'
		}, function(responseText) {
			//alert("response");
			alert(responseText);
			//Callback function to deal with the response
		});
		*/
		/*
		$.ajax({
			type: 'GET',
			url: 'http://johann.lutterodt.info/dev/request.json',
			dataType: 'jsonp',
			success: function (data) {
				alert(data);
			}
		});
		*/
	//	var x = event.clientX;     // Get the horizontal coordinate
//var y = event.clientY;     // Get the vertical coordinate
//var coor = "X coords: " + x + ", Y coords: " + y;
//alert(coor);
		//event = this.event;
		//alert($(this).attr("alt"));
		searchTerm = $(this).attr("alt");
		searchTerm = '"' + searchTerm + '"';
		//alert(searchTerm);
		
		//searchTerm = searchTerm.replace(/\{|\}|\^/g, function f(x){return "\\"+x;});
		//alert(searchTerm);
		//remove spaces
		//searchTerm = searchTerm.replace(/\s/g,"");
		//alert(searchTerm);

		
		//Create request HERE:
		chrome_getJSON("http://localhost:8983/solr/wiki1_extracted_XML/select?q=math:" +searchTerm +"&wt=json",event);
		//$("#dialog").dialog("option", { position: [e.pageX, e.pageY] });
	});

	
	
	
});


