
    //show cards
    $('#card-trigger li').click(function(){
        var sku = $(this).children().data('sku');

        $.getJSON('http://jsonplaceholder.typicode.com/posts', function(data) {

             $.each(data, function(key, value) {
               if(value['id']==sku) {
                 id = value['id'];
                 titolo = value['title'];
                 testo = value['body'];
               }
             })
          $('#cards-holder').append('<div class="card n'+ id + '"><h3>'+ titolo +'</h3><p>'+ testo +'</p><a href="javascript:void(0)" class="removeone">remove card</a></div>');
        });

    })

    // mobile menu toggle
    $('#card-trigger').click(function(event){

        var isCard = $(event.target).is('#card-trigger');
        if(isCard){
            $(this).children().toggle();
            $('#remover').toggle();
            if( $(this).hasClass('x-icon') ) {
              $(this).removeClass('x-icon');
            }
            else {
              $(this).addClass('x-icon');
            }
        }

    });

    //remove the card
    $(document).on('click', '.removeone', function(){
      $(this).parent().css('display', 'none');
    });

    //remove all cards
    $('#remover').click(function(){
      $('#cards-holder').html("");
    })
