$(function dragAndDropList() {



            function drag(event, ui) {
                $(this).draggable('option', 'cursorAt', {
                    left: Math.floor(this.clientWidth / 2),
                    top: Math.floor(this.clientHeight / 2),
                });
            }

            $('#ula').sortable();
            $('li').draggable({
                containment: '#page',
                connectWith: '#ula',
                revert: 'parent',

            });   //  добавили возможность перетаскивания


            $('#basket').droppable({
                
                drop: function (event, ui) {
                    $(this).addClass("deleted")
                        .find("p")
                        .html("Сброшено!");      

                    ui.draggable.addClass("del");  // добавляю класс объекту, который мы перетащили в корзину
                    ui.draggable.removeAttr("style"); // удаляю свойства стилей , и добавляю новые
                    // ui.draggable - это элемент, который я переношу в дроп объект
             
                   

                },

                accept: 'li', // позволяет принять только указанные элемент(ы)

            });

// добавляем фукнционал кнопки очистить корзину
            $("#trash").on("click", function () {

                $("del").css("animation", "fadeOut .3s linear");
                setTimeout(function () {
                    $(".del").remove();
                }, 295, );
                updateCount();
            });

        });