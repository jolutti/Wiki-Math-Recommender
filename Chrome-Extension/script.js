//TODO
/*
*Place dialog near click position
*Remove dialog on click outside of dialog box
*Clean Up code
*/

$(function(){
	

chrome_getJSON = function(url,event) {
	//console.log("sending request");
  
  	chrome.extension.sendMessage({action:'getJSON',url:url}, function(response){
		
			$('<div id="dialog"></div>').dialog({
        title: "Related pages",
        close: function (event, ui) {
            $(this).find("form").remove();
            $(this).dialog('destroy');
        }
    });

		for(x in response.data.response.docs){
			$("#dialog").append('<a href="http://simple.wikipedia.org/wiki/'+ response.data.response.docs[x].title + '">'+response.data.response.docs[x].title +'</a><br/>');			
		}
		return false;
	});  
}


	$('.mwe-math-fallback-image-inline, .tex').click(function(event){
		searchTerm = $(this).attr("alt");
		searchTerm = '"' + searchTerm + '"';
		
		//Create request HERE:
		chrome_getJSON("http://localhost:8983/solr/wiki1_extracted_XML/select?q=math:" +searchTerm +"&wt=json",event);
	});

	
	
});


