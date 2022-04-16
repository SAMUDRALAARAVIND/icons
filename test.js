let icons = [
    "search","home" , "settings","done","info","delete","visibility","lock","favorite","description","schedule","language",
    "face","event","verified","login","list","help","paid","article","history","assignment",'analytics',"work","build","print","store",
    "today","room","savings","code","grade","receipt","update","pets","explore","bookmark","reorder","payment","launch","pending",
    "leaderboard","assessment","preview","timeline","dns","feedback","book","stars",
    "label","gavel","android","cached","alarm","accessibility","minimize","translate","extension","rule","support","source","announcement","loyalty","redeem","restore","sensors",
    "dangerous","subject","grading","https","bookmarks","copyright","toc","api","input","backup","swipe","pageview","upgrade","accessible"
    ,"class","expand","segment","maximize","theaters","percent","unpublished","tour",'shop',"plagiarism","contactless","anchor",
    "meditation","toll","flaky","tab","balance","try","rowing","outlet","wysiwyg "," compress","http","token","spellcheck","gif","rocket",
    "quickreply"," fax"," polymer"," outbound"," terminal"," eject","html","webhook","output","javascript","commit","css","pinch",
    "php","hls","person","share","school","menu","close","check","east","reply","add","report","create","redo","shield","forward",
    "ballot","markunread","waves","gesture","weekend","brush","edit","image","download","place","layers","key","call","nightlife"
]
var input = document.getElementsByTagName("input")[0] ;
input.addEventListener("keyup" , change) ;
var inputValue = "" ;
function change() {
    inputValue = input.value ;
    if(inputValue == ""){
        document.getElementsByClassName("grid-container")[0].style.display = "none" ;
        return ;
    }
    document.getElementsByClassName("grid-container")[0].style.display = "grid"
    searchForSuggetion(inputValue) ;
}
function checkStrings( s2,  s1){
    var counter = 0; 
    var i = 0;
    for( ;i < s1.length; i++){
        if( counter == s2.length )
            break;
        if( s2[counter] == s1[i] )
            counter++;
      else{
            if(counter > 0)
                i -= counter;
            counter = 0;
        }
    }
    return counter < s2.length ? -1 : i-counter;
}


function searchForSuggetion(val) {
    // ar(user entered) == > karna , mowar
    let ans = [] ; 
    for(let i = 0;i<icons.length ;i++){
        if(checkStrings(val , icons[i]) != -1){
            ans.push(icons[i]) ;
        }
    }
    let dropZone = document.getElementsByClassName("grid-container")[0] ;
    dropZone.innerHTML = "" ;
    dropZone.style.display = "grid" ;
    if(ans.length == 0 ){
        dropZone.innerText = "No results found..."
        return ;
    }
    for(let i= 0;i<ans.length;i++){
        let resultItem = document.createElement("div") ;
        let span1  = document.createElement("span") ;
        span1.className = "material-icons" ;
        span1.innerText = ans[i] ; 
        let span2 = document.createElement("span") ;
        span2.innerText = ans[i] ;
        resultItem.className = "grid-item" ;
        resultItem.appendChild(span1);
        resultItem.appendChild(span2) ;
        dropZone.appendChild(resultItem) ;
    }

}
