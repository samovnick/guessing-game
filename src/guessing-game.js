class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.current = 50;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.current = Math.round((this.max - this.min) / 2) + this.min;
    }

    guess() {
        
        return this.current

    }

    lower() {
        this.max = this.current;
        this.current = Math.round((this.max - this.min) / 2) + this.min;
    }

    greater() {
        this.min = this.current;
        this.current = Math.round((this.max - this.min) / 2) + this.min;
    }
}

module.exports = GuessingGame;
