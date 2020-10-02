$( document ).ready(function() {
$('')
});
    // После загрузки DOM-дерева (страницы)
    $(function() {     
      //при нажатии на ссылку, содержащую Thumbnail
      $('a.thumbnail').click(function(e) {
        //отменить стандартное действие браузера
        e.preventDefault();
        //присвоить атрибуту scr элемента img модального окна
        //значение атрибута scr изображения, которое обёрнуто
        //вокруг элемента a, на который нажал пользователь
        $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'));
        //открыть модальное окно
        $("#image-modal").modal('show');
      });
      //при нажатию на изображение внутри модального окна 
      //закрыть его (модальное окно)
      $('#image-modal .modal-body img').on('click', function() {
        $("#image-modal").modal('hide')
      });
      document.addEventListener("scroll", function() {
        document.getElementById("opac").style.opacity = 1;
        document.getElementById("opac1").style.opacity = 1;
        document.getElementById("opac1").style.paddingTop = '60vh';
        document.getElementById("delivery").style.opacity = 1;
        document.getElementById("del").style.marginLeft = '11vw';
      });
    });