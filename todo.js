$(function () {



    $('li').hide().each(function (index) {
        $(this).delay(450 * index).fadeIn(1500);
    });


    let $valueGoods = $("#itemDescription");
    let $listGoods = $("#ula");


    $(document).ready(function () {
        addListenerToAdd();
    });


    function updateCount() {
        let $items = $('li').length;
        console.log($items);
        if ($items > 0) {
            $('#counter').text($items);

            if ($items == 1) {
                $('#goods').text(' ' + 'товар');
            } else if ($items <= 4) {
                $('#goods').text(' ' + 'товара');
            } else {
                $('#goods').text(' ' + 'товаров');
            }
        } else {
            $('#goods').text(' ' + 'нет товаров');
        }
    }

    updateCount();



    function addListenerToAdd() {



        $("#add").on("click", function () {
            if (!$valueGoods.val()) {
                return false;
            }



            $listGoods.append("<li>" + $valueGoods.val() + "<button class='delete'>&#10006</button></li>");
            $valueGoods.val("");
            updateCount();
            $(".delete").on("click", function () {
                let $parent = $(this).parent();

                $parent.css("animation", "fadeOut .3s linear");
                updateCount();
                setTimeout(function () {
                    $parent.remove();

                }, 295);
             

            });


            $( "#deleteAll" ).on("click", function() {

                $("li").css("animation", "fadeOut .3s linear");
                setTimeout(function () {
                $("li").remove();
            }, 295 , );
            updateCount();
            }
            );
            
        });
    };

});


// счетчик работает некорректно (сбрасывает только после второго клика, но оставляет последнее число) не смог разобраться

