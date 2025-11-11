


console.log('hi');

$(".signUpButton").click(function () {
    console.log('hi from the sign up button');
    $("#signUpModal").css("display", "block"); // Rregullim i .style()
});

$('#quantityOfUnicornsForm').submit(function (e) {
    e.preventDefault();
    var numberOfUnicorns = $("#quantityOfUnicorns option:selected").text();
    console.log(numberOfUnicorns);
    $("#cartItems").text(numberOfUnicorns);
});



// $('#signUpBtn').modal('hide');




