describe('String Calculator', function() {
    var calculator;

    beforeEach(function() {
        calculator = new StringCalculator();
    });

    it('should return 0 for an empty string', function() {
        expect(calculator.add('')).toEqual(0);
    });

    it('should return the number when only one number is provided', function() {
        expect(calculator.add('1')).toEqual(1);
    });

    it('should return the sum of two numbers', function() {
        expect(calculator.add('1,2')).toEqual(3);
    });

    it('adds large single digits together', function() {
        expect(calculator.add('1,27')).toEqual(28);
    });

    it('adds multiple numbers', function() {
        expect(calculator.add('15,17,21')).toEqual(53);
    });

    it('adds a mixture of small and large numbers', function() {
        expect(calculator.add('1,5,27,45')).toEqual(78);
    });

    it('adds very large numbers', function() {
        expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
    });
});
