function listener( evt )
{
    // check if keyup key is the shortcut key : Esc
    if ( evt.keyCode != 27 )
        return ;
 
    // choose the latest answer
    if ( window.location.href == "https://ask.fm/account/inbox" )
    {
        var a = document.querySelector("a.btn-secondary.icon-caret-right") ;

        window.location.href = a.href ;
        return ;
    }
    else
    {
        // click answer input
        var button = document.getElementsByTagName("button")[0] ;
        var t = document.getElementsByTagName("textarea")[0] ;
        if ( t.value == "" )
        {
            t.value = "質問ではない。" ;
        }

        button.click() ;
        return ;

    }


}


document.addEventListener( "keyup", listener, false ) ;
