
var step = $('.quizForm_item.step');
var quiz_item = $('.quizForm_item');
var q_count = step.index($('.step_active'))+ 1;
console.log(q_count)
if (quiz_item.first()) {
    $('.quizForm .step_active button.prev_step').attr('disabled', true);
}
// var q_count = quiz_item.length;
// console.log(q_count - 1);

$('.quizForm .step button.next_step').click(function (){
    step.removeClass('step_active');
    $(this).parentsUntil('.quizForm_list').next().addClass('step_active');
    q_count = $('.quizForm_item.step').index($('.step_active'))+1;
    $('.quizForm .step_count').text(q_count + '/5')
    if(q_count < 6) {
        $('.step_title').text('Ответьте на несколько вопросов, чтобы узнать шансы и стоимоть списания долгов')
        $('.quizForm .step_count').show()
        console.log(q_count)
    } else {
        $('.step_title').text('Оставьте контакты, чтобы получить бесплатную консультацию')
        $('.quizForm .step_count').hide()
    }
    // console.log(q_count)
})
$('.quizForm .step button.prev_step').click(function (){
    step.removeClass('step_active');
    $(this).parentsUntil('.quizForm_list').prev().addClass('step_active');
    q_count = $('.quizForm_item.step').index($('.step_active'))+1;
    $('.quizForm .step_count').text(q_count + '/5')
    if(q_count < 6) {
        $('.step_title').text('Ответьте на несколько вопросов, чтобы узнать шансы и стоимоть списания долгов')
        $('.quizForm .step_count').show()
    } else {
        $('.step_title').text('Оставьте контакты, чтобы получить бесплатную консультацию')
        $('.quizForm .step_count').hide()
    }
    console.log(q_count)
})