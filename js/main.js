$('#addSkill').on('click', function(evt) {
    var newSkill = $('.skills').val();
    var newRow = `
        <tr>
        <td><button class="remove">X</button></td>
        <td>${newSkill}</td>
        </tr>
    `;
    $(newRow).appendTo($('table'));
})

$('.list').on('click', 'button', function(){
    $(this).closest('tr').fadeOut(750, function(){
        $(this).remove()
    })
});