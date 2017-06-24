$.get('data.json',function(data){
   bildAlbums(data); 
});

function bildAlbums(data){
    var albume = $('div.albumContainer');
    $.each(data,function(i, val){
       var pic = $('<picture>');
       $('<figcaption>',{class:"up"}).appendTo(pic);
       $('<img>', {src:val.img, alt:val.name, "data-name":val.name, "click":add}).appendTo(pic);
       $('<figcaption>',{text:val.name, class:"down"}).appendTo(pic);
       pic.appendTo(albume);
    });
}

function add(e){   
    let albumName = $(e.target).attr('data-name');
    var timeOut;
    let character = 0;
    
    if($(e.target).siblings('figcaption.up').text()=== ""){
        move("up","down");
    }else{
        move("down","up");
    }
   
    function move(one,two) {
        timeOut = setTimeout(function() {
            character++;
            var type = albumName.substring(0, character);
            $(e.target).siblings('figcaption.'+one + '').text(type);
            var down = albumName.substring(character,albumName.length);
            $(e.target).siblings('figcaption.'+two+ '').text(down);
            move(one,two );
            if (character === albumName.length) {
                clearTimeout(timeOut);
            }        
        }, 200);
    };

}


    


  