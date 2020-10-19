/*
 *  Disable Keys
 *  v1.0.0
 *  https://github.com/the-muda-organization/disable-keys
 *  The Unlicense
 */

(function(){
    
    /***************************************************************************
     *                              CSS
     ***************************************************************************/
    document.body.style.WebkitUserSelect = 'none';
    document.body.style.MozUserSelect    = 'none';
    document.body.style.MsUserSelect     = 'none';
    document.body.style.userSelect       = 'none';
    
    
    
    /***************************************************************************
     *                              FUNCTIONS
     ***************************************************************************/
    function disableEvent(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }else if(window.event){
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
    
    /***************************************************************************
     *                              EVENT LISTENERS
     ***************************************************************************/
    
    //Mouse Right Click
    document.addEventListener('contextmenu',function(e){
        e.preventDefault();
    });
    
    //Keyboard Keys
    document.addEventListener('keydown',function(e){
        
        //CTRL
        if(e.ctrlKey){
            switch(e.code){
                
                case 'KeyA':
                case 'KeyC':
                case 'KeyP':
                case 'KeyS':
                case 'KeyU':
                case 'KeyX':
                    disableEvent(e);
                    break;
            }
        }
        
        //CTRL + SHIFT
        if(e.ctrlKey && e.shiftKey){
            switch(e.code){
                
                case 'KeyI':
                case 'KeyJ':
                    disableEvent(e);
                    break;
            }
        }
        
        //KEYS
        switch(e.code){
            
            case 'F12':
                disableEvent(e);
                break;
                
        }
    });
    
    
})();
