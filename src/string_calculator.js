// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
    if (string_numbers === '') {
        return 0;
    }

    // Split the input string by commas, convert them to integers and sum them up
    return string_numbers.split(',')
                         .reduce((sum, number) => sum + parseInt(number, 10), 0);
};
