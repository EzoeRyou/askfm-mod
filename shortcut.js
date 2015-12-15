function listener( evt )
{
    // check if keyup key is the shortcut key : Esc
    if ( evt.keyCode != 27 )
        return ;
 
    // choose the latest answer
    if ( window.location.href == "https://ask.fm/account/inbox" )
    {
        var a = document.getElementsByClassName("inboxItem-answerButton")[0] ;
        console.log( a ) ;
        if ( a )
        {
            window.location.href = a.href ;
            return ;
        }
    }
    else
    {
        // click answer input
        var a = document.getElementsByClassName("optionsBar-submit")[0] ;
        console.log(a) ;
        if ( a )
        {
            var t = document.getElementsByTagName("textarea")[0] ;
            if ( t.value == "" )
            {
                t.value = "質問ではない。" ;
            }

            a.click() ;
            return ;
        }
    }


}


document.addEventListener( "keyup", listener, false ) ;
