function bindEvent() {
    $('.input').on('keydown', function (e) {
        console.log(e.keyCode)
        if(e.keyCode == 13 ) {
            console.log($(this).val())
        }
    })
    $('.btn').on('click', function () {
        $(this).trigger('keydown');
    })
    getData($('.input').val());
    // addDom();

}
bindEvent();
function getData(val) {
    $.ajax({
        url:'http://data.duyiedu.com/api/chat',
        type: 'GET',
        data: {text:val},
        success: function (data) {
            console.log(data)
        }

    })
}