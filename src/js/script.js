var app = {
    init : function() {
        app.forms();
    },
    forms: function(){
        var element = document.getElementsByTagName('textarea'),
            i = 0,
            ellenght = element.length;
        
        for(i; i < ellenght; i ++) {
            var elObj = element[i];
            element[i].onkeydown = function(e){

                elVal(this.value, e);
            }
            element[i].onkeyup = function(e){
                elVal(this.value, e);

                elValue(this.value, e);
            }
            element[i].onkeyup = function(e){
                elValue(this.value, e);

            }
        }
        
        var label,
            tVal,
            ourLabel;

        
        function elVal(thatvalue, event) {
            tVal = thatvalue.length;
            
            
        var tclass = document.getElementsByClassName('textarea'),
            i = 0,
            tclasslenght = tclass.length,
            focusFlag = 0;
            
            for (i ; i < tclasslenght; i++) {
                var elincl = tclass[i].getElementsByTagName('label');
                
                    ourLabel = elincl[i]
            }
            if(event.type === 'keydown') {
                var evKeyCode = event.keyCode;
                if(tVal > 0) {
                    ourLabel.classList.add('hidden');
                }
                else {
                    ourLabel.classList.remove('hidden');
                }
                
                if(tVal === 0) {
                    if(evKeyCode !== 8 && evKeyCode !== 46)
                    ourLabel.classList.add('hidden');
                }
                    
                if(tVal === 1) {
                    if(evKeyCode === 8 || evKeyCode === 46) {
                        ourLabel.classList.remove('hidden');
                    }
                }
            }
            else {
                if(tVal > 0) {
                    ourLabel.classList.add('hidden');
                }
                else {
                    ourLabel.classList.remove('hidden');
                }
            }
        }
    }
}

$(document).ready(app.init)
