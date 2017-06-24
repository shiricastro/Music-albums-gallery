$.get('data.json',function(data){
   bildAlbums(data); 
});

function bildAlbums(data){
    var albume = $('div.albumContainer');
    $.each(data,function(i, val){
       var pic = $('<picture>');
       $('<img>', {src:val.img, alt:val.name, "data-name":val.name, "click":add}).appendTo(pic);
       var name = $('<figcaption>',{text:val.name}).appendTo(pic);
       pic.appendTo(albume);
    });
}

function add(e){
    if($(e.target).siblings('figcaption').hasClass('move')){
        $(e.target).siblings('figcaption').removeClass('move');
        $(e.target).siblings('figcaption').addClass('return'); 
    }else{
        $(e.target).siblings('figcaption').addClass('move'); 
    }
}
