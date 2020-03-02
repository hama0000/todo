$(function () {


});

const $tbody = $('tbody');

const duration = 750;
let item = "";
let id = 1;

$('.btnAdd').on('click', function () {

    const text = $('#inputText').val();

    if (text == '') {
        return;
    } else {
        item += '<tr><td>' + id + '</td><td>' + text + '</td><td><input class="checkbox" type="checkbox"></td><td></td></tr>';
        $tbody.html(item);

        id++;

        $('#inputText').val('');
    }

});

$(document).on('click', '.checkbox', function () {
    $checkTd = $(this).parent('td');
    $tr = $checkTd.parent('tr');

    if ($(this).prop('checked')) {
        $checkTd.nextAll('td').html('clear!');
        $tr.stop(true).animate({
            backgroundColor: '#ddffdd'
        }, duration);
    } else {
        $checkTd.nextAll('td').html('');
        $tr.stop(true).animate({
            backgroundColor: 'white'
        }, duration);
    }


    /*
    if ($(this).prop('checked')) {
        $(this).parent('td').nextAll('td').html('clear');
    } else {
        $(this).parent('td').nextAll('td').html('');
    }*/
});

