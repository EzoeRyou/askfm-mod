function listener( evt )
{
    // check if keyup key is the shortcut key : Esc
    if ( evt.keyCode != 27 )
        return ;

    // click answer input
    var a = document.getElementById("question_submit") ;

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

    // else
    // choose the latest answer
    var a = document.querySelector(" .answer-linkBox a.link-blue") ;
    if ( a )
    {
        window.location.href = a.href ;
        return ;
    } 
}


document.addEventListener( "keyup", listener, false ) ;
