class Model {
  constructor() {
    this.inputNumber = '';
  }

  initAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      if (!answer.includes(randomNumber)) {
        answer.push(randomNumber);
      }
    }
    this.answer = answer.join('');
    return this;
  }

  getState() {
    // inputnumber와 answer를 비교해서 스트라이크, 볼을 반환
    const answer = this.answer.split('');
    const inputNumber = this.inputNumber.split('');
    let strike = 0;
    let ball = 0;

    inputNumber.forEach((number, index) => {
      if (number === answer[index]) {
        strike += 1;
      } else if (answer.includes(number)) {
        ball += 1;
      }
    });
    return { strike, ball, isCorrect: strike === 3 };
  }

  update(input) {
    this.inputNumber = input;
    return this;
  }
}

export default Model;
