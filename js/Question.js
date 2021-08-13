class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
    this.input1.position(width/2, height/2);
   //Create a input box to enter the number
  


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.
    var question = `What starts and ends with the letter ‘E’, but has only one letter?`
    this.question.html(question);
    this.question.position(width/2, 50);
    var option1 = `Estimate`
    this.option1.html(option1);
    this.option1.position(100, 100);
    var option2 = `Envelope`
    this.option2.html(option2);
    this.option2.position(100, 150);
    var option3 = `Engage`
    this.option3.html(option3);
    this.option3.position(100, 200);
    var option4 = `Example`
    this.option4.html(option4);
    this.option4.position(100, 250);

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      var message2 = `Thank You! Your answer have been successfully submitted.`
      this.message2.html(message2);

    })


  }
}
