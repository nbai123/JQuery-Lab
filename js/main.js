$('.addSkill').on('click', function(evt) {
    evt.preventDefault();
    var newSkill = $('.skills').val();
    var newRow = `
    <tr>
        <td><button class="remove">X</button></td>
        <td>${newSkill}</td>
    </tr>
    `;
    $('table').append(newRow);
    console.log('hit')
})



$('.list').on('click', 'button', function(){
    $(this).closest('tr').fadeOut(750, function(){
        $(this).remove()
    })
});