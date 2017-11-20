(function($)
{
    
    $.fn.autogrow = function(options)
    {
        return this.filter('textarea').each(function()
        {
            var self         = this;
            var $self        = $(self);
            var minHeight    = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

            var shadow = $('<div></div>').css({
                position:    'absolute',
                top:         -10000,
                left:        -10000,
                width:       $self.width(),
                fontSize:    $self.css('fontSize'),
                fontFamily:  $self.css('fontFamily'),
                fontWeight:  $self.css('fontWeight'),
                lineHeight:  $self.css('lineHeight'),
                resize:      'none',
                'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function(event)
            {
                var times = function(string, number)
                {
                    for (var i=0, r=''; i<number; i++) r += string;
                    return r;
                };

                var val = self.value.replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/&/g, '&amp;')
                                    .replace(/\n$/, '<br/>&nbsp;')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/ {2,}/g, function(space){ return times('&nbsp;', space.length - 1) + ' ' });

                // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
                if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
                    val += '<br />';
                }

                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
                $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
            }

            $self.change(update).keyup(update).keydown({event:'keydown'},update);
            $(window).resize(update);

            update();
        });
    };
})(jQuery);
// plugins
$.fn.extend({
	_focus: $.fn.focus,
	focus: function( delay, fn ) {
		return typeof delay === "number" ?
			this.each(function() {
				var elem = this;
				setTimeout(function() {
					$( elem ).focus();
					if ( fn ) {
						fn.call( elem );
					}
				}, delay );
			}) :
			this._focus.apply( this, arguments );
	},

	scrollParent: function() {
		var scrollParent;
		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ) );
					if ( !isNaN( value ) && value != 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},
	
	disableSelection: function() {
		return this.bind(
			"mousedown.ui-disableSelection selectstart.ui-disableSelection",
			function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});
/*----------------------------------Variables----------------------------------*/
var noteZindex = 1;
var noteCounter = 0;
var posX = [184, 184, 184, 402, 402, 402];
var posY = [144, 334, 525, 144, 334, 525];

// var IDarray = []; // keep track of which note is present and which is deleted
// var checkID = []; 
/*----------------------------------Delete Note----------------------------------*/
function deleteNote(){
    //console.log('----------------Deleting notes----------------');    
    var deleteID = $(this).parents('.note')[0].id; // == get ID.toString() of deleted note

    //console.log(deleteID);

    if(deleteID != '0'){
        // delete the event that is associated with the note. If there is no date it doesn't matter.
        $('#calendar_full').fullCalendar('removeEvents', "note" + deleteID, true);

        var toSend = {"auth_token" : auth_token, "_id" : deleteID};
        $.ajax({
          url: 'https://ubcse442tada.com/delete_note',
          type: "post",
          data: JSON.stringify(toSend),
          dataType: "json",
          contentType: "application/json",
          success: function(response) {
              if ('success' in response) {	
                //console.log(response['success'])
              }
              else if ('error' in response) {
                  //console.log(response['error'])
              }
          },
          error: function(response) {
            //console.log(response);
          },
        });
    }
    
    noteCounter = noteCounter - 1;
    //console.log('note count: ', noteCounter);    
    $(this).parents('.note').remove(); // remove the note on click of corresponding x button
};
/*----------------------------------Load Note----------------------------------*/
function loadNote(title, content, ID, Xaxis, Yaxis, startTime, endTime, color) {    
    //console.log('start time: ', startTime);
    //console.log('end time: ', endTime);    

    if (startTime !== "") {
        var resultStart = chrono.parse(startTime);
        var newElement;
        if (endTime !== "") {
            var resultEnd = chrono.parse(endTime);
            newElement = {id: "note" + ID, title : title, start : resultStart[0].start.date(), end : resultEnd[0].start.date(), color : color};
        }
        else {
            newElement = {id: "note" + ID, title : title, start : resultStart[0].start.date(), color};
        }
        $('#calendar_full').fullCalendar('renderEvent', newElement , true);
    }  

    Xaxis = Xaxis-190;
    Yaxis = Yaxis-130;
    var noteTemp =  '<div class="note" id="' + ID + '" style=" background-color: ' + color + '; position: absolute; left:' +Xaxis+ '; top:' +Yaxis+ '">'
                        +'<a href="javascript:;" class="button remove">X</a>'
                        // +'<a href="javascript:;" class="button save">S</a>'
                        +'<a href="javascript:;" class="button edit">E</a>'    
                        +'<a href="javascript:;" onclick="displayColorMenu(this.parentElement)" class="button color"><center>C</center></a>'                                            
                        + 	'<div class="note_cnt">'
                        +		'<textarea class="title" placeholder="Enter note title">'+title+'</textarea>'
                        + 		'<textarea class="cnt" placeholder="Enter note description">'+content+'</textarea>' 
                        +	'</div> '
                        +'</div>';

    var $containerEl = $(noteTemp).parent(),
    $draggableEl = $(noteTemp).hide().appendTo("#board").show("fade", 300);

    $draggableEl.each(
    function(){
        var containmentX1 = $(this).parent().offset().left;
        var containmentY1 = $(this).parent().offset().top;
        var containmentX2 =  ($(this).parent().outerWidth() + $(this).parent().offset().left - $(this).outerWidth())
        var containmentY2 = ($(this).parent().outerHeight() + $(this).parent().offset().top - $(this).outerHeight())                 

        $(this).draggable({
            containment: [ containmentX1, containmentY1, containmentX2, containmentY2]
        });
    });

    $draggableEl.on('dragstart',
        function(){
            var containmentX1 = $(this).parent().offset().left;
            var containmentY1 = $(this).parent().offset().top;
            var containmentX2 =  ($(this).parent().outerWidth() + $(this).parent().offset().left - $(this).outerWidth())
            var containmentY2 = ($(this).parent().outerHeight() + $(this).parent().offset().top - $(this).outerHeight())                 
            $(this).zIndex(++noteZindex);
            $(this).draggable('option',
            'containment',
            [ containmentX1, containmentY1, containmentX2, containmentY2]);
    });

    noteCounter = noteCounter + 1;
    $('.remove').unbind().click(deleteNote); // onclick of delete button, trigger the deleteNote function
    // $('.save').click(saveNote);    
    $('.edit').click(editNote);            
    $('textarea').autogrow(); // text area grows automatically       
    $('.note')
    return false; 
};
/*----------------------------------New Note----------------------------------*/
function newNote() {
        var ID = 0; // To delete unsaved note
        var Xaxis, Yaxis;
        //console.log('note count: ',noteCounter);
        if(noteCounter >= 6){
            Xaxis = posX[5];
            Yaxis = posY[5];
        }
        else{
            Xaxis = posX[noteCounter];            
            Yaxis = posY[noteCounter];
        }

        Xaxis = Xaxis-190;
        Yaxis = Yaxis-130;

        var noteTemp =  '<div class="note" id="' + ID.toString() + '" style="position: absolute; left:' + Xaxis + '; top:' + Yaxis + '; background-color: #c0c7c2">'
                        +'<a href="javascript:;" class="button remove">X</a>'
                        +'<a href="javascript:;" class="button save">S</a>'
                        +'<a href="javascript:;" onclick="displayColorMenu(this.parentElement)" class="button color"><center>C</center></a>' 
                        // +'<a href="javascript:;" class="button edit">E</a>'                                                
                        + 	'<div class="note_cnt">'
                        +		'<textarea class="title" placeholder="Enter note title"></textarea>'
                        + 		'<textarea class="cnt" placeholder="Enter note description"></textarea>'
                        +	'</div> '
                        +'</div>';
   
        var $containerEl = $(noteTemp).parent(),
            $draggableEl = $(noteTemp).hide().appendTo("#board").show("fade", 300);
       
        $draggableEl.each(
            function(){
                var containmentX1 = $(this).parent().offset().left;
                var containmentY1 = $(this).parent().offset().top;
                var containmentX2 =  ($(this).parent().outerWidth() + $(this).parent().offset().left - $(this).outerWidth())
                var containmentY2 = ($(this).parent().outerHeight() + $(this).parent().offset().top - $(this).outerHeight())                 
    
                $(this).draggable({
                    containment: [ containmentX1, containmentY1, containmentX2, containmentY2]
                });
        });

        $draggableEl.on('dragstart',
        function(){
            var containmentX1 = $(this).parent().offset().left;
            var containmentY1 = $(this).parent().offset().top;
            var containmentX2 =  ($(this).parent().outerWidth() + $(this).parent().offset().left - $(this).outerWidth())
            var containmentY2 = ($(this).parent().outerHeight() + $(this).parent().offset().top - $(this).outerHeight())                 
            $(this).zIndex(++noteZindex);
            $(this).draggable('option',
            'containment',
            [ containmentX1, containmentY1, containmentX2, containmentY2]);
        });
            
        //console.log($(noteTemp)[0]);
        //position the note according to the array
       
        // $(noteTemp).style.position = "absolute";
        // $(noteTemp).style.left =  +'px';
        // $(noteTemp).style.top =  +'px';

        noteCounter = noteCounter + 1;            
        $('.remove').unbind().click(deleteNote); // onclick of delete button, trigger the deleteNote function
        $('.save').unbind().click(saveNote);
        // $('.edit').click(editNote); 
        $('textarea').autogrow(); // text area grows automatically              
        $('.note')
        return false; 
    // }
};
/*----------------------------------Get Position----------------------------------*/
function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    }
  }
/*----------------------------------Edit Note----------------------------------*/
function editNote() {
    //console.log('----------------Editing notes----------------');
    var eTitle = $(this).parents('.note').children('.note_cnt').children('.title')[0].value; 
    var eText = $(this).parents('.note').children('.note_cnt').children('.cnt')[0].value; 
    var eX = getOffset($(this)[0]).left;
    var eY = getOffset($(this)[0]).top;
    var eID = $(this).parents('.note')[0].id
    var eColor = rgb2hex($(this).parents('.note')[0].style.backgroundColor);
   
    //console.log('Title: ', eTitle);
    //console.log('Text: ', eText);
    //console.log('Positions: ', eX,eY);
    //console.log('ID: ', eID);

    // delete the event that is associated with the note. If there is no date it doesn't matter.
    $('#calendar_full').fullCalendar('removeEvents', "note" + eID, true);

    var results = chrono.parse(eText);
    var newElement, toSend;
 
    if (results.length != 0){
        if(results[0].end == null){
            newElement = {id: "note" + eID, title : eTitle, start : results[0].start.date(), color : eColor};
            toSend = {"auth_token" : auth_token, "username": username, "_id": eID, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : ""}], "x": eX, "y": eY, "color" : eColor};                        
        }   
        else{
            newElement = {id: "note" + eID, title : eTitle, start : results[0].start.date(), end : results[0].end.date(), color : eColor};
            toSend = {"auth_token" : auth_token, "username": username, "_id": eID,"title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : results[0].end.date().toString()}], "x": eX, "y": eY, "color" : eColor};                        
        }      
        $('#calendar_full').fullCalendar('renderEvent', newElement , true);       
    }
    else {
        toSend = {"auth_token" : auth_token, "username": username, "_id": eID, "title": eTitle, "noteList" : [{"text" : eText}], "x": eX, "y": eY, "color" : eColor};                    
    }    
    
    $.ajax({
      url: 'https://ubcse442tada.com/edit_note',
      type: "post",
      data: JSON.stringify(toSend),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
	
	      if ('success' in response) {	
		    //   $('#calendar_full').fullCalendar('updateEvent', event);
	      }
	      else if ('error' in response) {
		      //console.log(response['error'])
	      }
      },
      error: function(response) {
        //console.log(response);
      },
    });
  }
/*----------------------------------Save Note----------------------------------*/
function saveNote(){
    //console.log('----------------Saving notes----------------');
    try{
    var eTitle = $(this).parents('.note').children('.note_cnt').children('.title')[0].value; 
    var eText = $(this).parents('.note').children('.note_cnt').children('.cnt')[0].value; 
    var ID = $(this).parents('.note')[0].id;  
    var eColor = rgb2hex($(this).parents('.note')[0].style.backgroundColor);    
    //console.log("hi");    
    //console.log(eColor);
    ////console.log($(this).parents('.note')[0]);
    ////console.log($(this).parents('.note')[0].style);     
    }catch(e){
        if(e){
            var eTitle = '';
            var eText = '';
            var ID = '0';
        }
    }
    var eX = getOffset($(this)[0]).left;
    var eY = getOffset($(this)[0]).top;
    var $this = $(this);
    
    //console.log('Title: ', eTitle);
    //console.log('Text: ', eText);
    //console.log('Positions: ', eX,eY); 

    var testID = "1";
    $this.parent().attr("id", testID);

    var results = chrono.parse(eText);
    var newElement;
    var toSend;

    if (results.length != 0){
        if(results[0].end == null){
            toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : ""}], "x": eX, "y": eY, "color" : eColor};                        
        }   
        else{
            toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : results[0].end.date().toString()}], "x": eX, "y": eY, "color" : eColor};                        
        }
        //console.log(results[0].start.date().toString())
                    
    }
    else {
        toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText}], "x": eX, "y": eY, "color" : eColor};                    
    }
    
    $.ajax({
        url: 'https://ubcse442tada.com/add_note',
        type: "post",
        data: JSON.stringify(toSend),
        dataType: "json",
        contentType: "application/json",
        // want to put condition : if ID already exist, dont update the ID.
        success: function(response) {
  
            if ('success' in response) {

                newID = response['_id'];
                //console.log('assigned ID: ',newID);
                document.getElementById("1").id = newID;
                //console.log(document.getElementById(newID));
             
                if (results.length != 0){
                    if(results[0].end == null){
                        newElement = {id: "note" + newID, title : eTitle, start : results[0].start.date(), color : eColor};                     
                    }   
                    else{
                        newElement = {id: "note" + newID, title : eTitle, start : results[0].start.date(), end : results[0].end.date(), color : eColor};
                    }      
                    $('#calendar_full').fullCalendar('renderEvent', newElement , true);       
                }
            }
            else if ('error' in response) {
                //console.log(response['error'])
            }
        },
        error: function(response) {
          //console.log(response);
        },
      });

    var stringEdit = '<a href="javascript:;" class="button edit">E</a>' // edit button string
    $(this).parents('.note').append(stringEdit); // append edit button to the note.
    $('.edit').click(editNote); // enable edit functionality onclick of edit button
    $(this).remove(); // remove the save button 
};

/*----------------------------------Color Note----------------------------------*/
function displayColorMenu(elemt){
    //append to this array to add more color options
    var colorList = ['#2c2a50', '#6a7da0', '#c0c7c2', '#ede6d3', '#fefdf3', 
                     '#234a56', '#417d95', '#89b9c5', '#c1dee2', '#dde7dc',    
                     '#c5af7d', '#e9dfcb', '#f6f4ee', '#e2e9f0', '#b5ccdc',
                     '#c76675', '#edb7bc', '#f2dadb', '#f2f2ea', '#aecdc4'];

    var span = document.createElement('span');
    for (var i = elemt.children.length - 1; i >= 0; i--) {
        elemt.children[i].style.display = "none";
    }
    // elemt.style.backgroundColor = "#000000";
    elemt.style.backgroundColor = 'transparent';
    var inner = "";
    for (var i = colorList.length - 1; i >= 0; i--) {
        inner += "<div class='colorNode' onclick='chooseColor(this.parentElement.parentElement,this)' style='background-color:" + colorList[i] +"'></div>";
    }
    span.innerHTML = inner
    elemt.appendChild(span);
}

function chooseColor(elemt, colorNode){
    elemt.style.backgroundColor = colorNode.style.backgroundColor;
    elemt.removeChild(colorNode.parentElement);
    for (var i = elemt.children.length - 1; i >= 0; i--) {
        elemt.children[i].style.display = "inherit";
    }
}

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
