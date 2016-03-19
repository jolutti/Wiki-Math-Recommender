declare default element namespace "http://www.mediawiki.org/xml/export-0.10/";

let $deleteNode := %updating function($node){
  
  delete node $node
}

let $insertNode := %updating function($node1,$node2){
  insert node <expressions>{$node2}</expressions> into $node1
}



for $subset in ./mediawiki/page
return (
if(contains($subset/revision/text,"&lt;math&gt;"))
then
  (    
   updating $insertNode($subset,
  replace(replace($subset/revision/text,'(&lt;!--.*--&gt;)','',"s"),'.*?(&lt;math&gt;.+?&lt;/math&gt;)?(.+?)','$1',"s")),
  updating $deleteNode($subset/revision)
)
else
  updating $deleteNode($subset)
)