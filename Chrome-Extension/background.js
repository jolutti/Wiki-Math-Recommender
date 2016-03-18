function onRequest(request, sender,sendResponse) {
  if (request.action == 'getJSON') {
	  var data;	  
    $.getJSON(request.url, function(data){
		data = data;
		sendResponse({data:data});
	});	
  }
  return true;
}

chrome.extension.onMessage.addListener(onRequest);