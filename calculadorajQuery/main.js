$(document).ready(function() {
    var input = $('.calculator__input');

    $('.calculator__key').click(function() {
        var value = $(this).text();
        var currentInput = input.val();

        switch (value) {
            case 'C':
                input.val('');
                break;
            case '=':
                input.val(eval(currentInput));
                break;
            default:
                input.val(currentInput + value);
        }
    });
});