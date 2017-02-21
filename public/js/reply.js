/**
 * Created by parkjaesung on 2017. 2. 21..
 */
function reply(){
    var message = $('#reply_input').find('.form-control').val();

    $.ajax({
        type: 'POST',
        url: 'http:/sendu.kr:3000/reply/' + email + '/' + orderUUID + '/' + message,
        success: function (response) {
        },
        error: function (request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });
}
