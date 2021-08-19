// проверяем готов ли сайт к манимуляциям
$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  // изменение в счетчике при наведении мышью на этаж
  $(".home-img path").on("mouseover", function () {
    // удаляю подсветку этажа,чтобы при ховер эффекте удалить подстветку в случае когда этаж выбран с помощью кнопки
    $(".home-img path").removeClass("current-floor");
    // console.log($(this).attr("data-floor"));
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  // при клике на кнопку, подвсечивать этаж на картинке и менять counter
  counterUp.on("click", function () {
    
    if (currentFloor < 18) {
      currentFloor++;
      // добавить 0 к счетчику (02, 03, 04...)
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      // удаляю подсветку этажа
      $(".home-img path").removeClass("current-floor");
      // подсвечиваю этаж
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
    }
    }
  );

  counterDown.on("click", function () {
   
    if (currentFloor > 2) {
      currentFloor--;
      // добавить 0 к счетчику (02, 03, 04...)
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      // удаляю подсветку этажа
      $(".home-img path").removeClass("current-floor");
      // подсвечиваю этаж
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

});
