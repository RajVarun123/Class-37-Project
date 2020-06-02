class Quiz {
    constructor() {

    }

    display() {
        var answers = [];

        var marks = 0;

        var land1 = 0;
        var land2 = 0;
        var land3 = 0;
        var land4 = 0;
        var land5 = 0;
        var land6 = 0;
        var land7 = 0;
        var land8 = 0;
        var land9 = 0;
        var land10 = 0;

        var introTitle = createElement("h1");
        introTitle.html("Welcome to my Quiz");
        introTitle.position(displayWidth - 850, displayHeight - 700);
        
        var nameInput = createInput("What is your name ??");
        nameInput.position(displayWidth - 800, displayHeight - 500);

        var introButton = createButton("SUBMIT");
        introButton.position(displayWidth - 750, displayHeight - 480);

        var q1 = createElement("h2");
        q1.html("How do you identify a Pit Viper (Species of Snake)");
        q1.position(displayWidth - 850, displayHeight - 700);
        q1.hide();

        var q1AButton1 = createButton("By the increased length of the snake");
        q1AButton1.position(displayWidth - 1000, displayHeight - 500);
        q1AButton1.hide();

        var q1AButton2 = createButton("By the holes on each side in between the nostrils and the eyes");
        q1AButton2.position(displayWidth - 600, displayHeight - 500);
        q1AButton2.hide();

        var q1AButton3 = createButton("By its body design");
        q1AButton3.position(displayWidth - 1000, displayHeight - 400);
        q1AButton3.hide();

        var q1AButton4 = createButton("By its thickness");
        q1AButton4.position(displayWidth - 600, displayHeight - 400);
        q1AButton4.hide();

        var q2 = createElement("h2");
        q2.html("Are all the snake species venomous");
        q2.position(displayWidth - 950, displayHeight - 700);
        q2.hide();

        var q2AButton1 = createButton("Depends");
        q2AButton1.position(displayWidth - 1000, displayHeight - 500);
        q2AButton1.hide();

        var q2AButton2 = createButton("IDK");
        q2AButton2.position(displayWidth - 600, displayHeight - 500);
        q2AButton2.hide();

        var q2AButton3 = createButton("Yes");
        q2AButton3.position(displayWidth - 1000, displayHeight - 400);
        q2AButton3.hide();

        var q2AButton4 = createButton("No");
        q2AButton4.position(displayWidth - 600, displayHeight - 400);
        q2AButton4.hide();

        var q3 = createElement("h2");
        q3.html("How do we differentiate between a gecko and a lizard");
        q3.position(displayWidth - 950, displayHeight - 700);
        q3.hide();

        var q3AButton1 = createButton("Lizards have movable eyelids");
        q3AButton1.position(displayWidth - 1000, displayHeight - 500);
        q3AButton1.hide();

        var q3AButton2 = createButton("Geckos and lizards are the same");
        q3AButton2.position(displayWidth - 600, displayHeight - 500);
        q3AButton2.hide();

        var q3AButton3 = createButton("Lizards have a different size than that of a gecko");
        q3AButton3.position(displayWidth - 1000, displayHeight - 400);
        q3AButton3.hide();

        var q3AButton4 = createButton("With the marking on its body");
        q3AButton4.position(displayWidth - 600, displayHeight - 400);
        q3AButton4.hide();

        var q4 = createElement("h2");
        q4.html("How do we differentiate between a crocodile and an alligator");
        q4.position(displayWidth - 950, displayHeight - 700);
        q4.hide();

        var q4AButton1 = createButton("Crocodiles have external ears");
        q4AButton1.position(displayWidth - 1000, displayHeight - 500);
        q4AButton1.hide();

        var q4AButton2 = createButton("Crocodiles are longer");
        q4AButton2.position(displayWidth - 600, displayHeight - 500);
        q4AButton2.hide();

        var q4AButton3 = createButton("Alligators have broad snouts");
        q4AButton3.position(displayWidth - 1000, displayHeight - 400);
        q4AButton3.hide();

        var q4AButton4 = createButton("They are literally the same");
        q4AButton4.position(displayWidth - 600, displayHeight - 400);
        q4AButton4.hide();

        var q5 = createElement("h2");
        q5.html("Why do you think lizards stay still at one position for sometime");
        q5.position(displayWidth - 950, displayHeight - 700);
        q5.hide();

        var q5AButton1 = createButton("So that it does not attract a predator");
        q5AButton1.position(displayWidth - 1000, displayHeight - 500);
        q5AButton1.hide();

        var q5AButton2 = createButton("It builds up energy so that it can use it later");
        q5AButton2.position(displayWidth - 600, displayHeight - 500);
        q5AButton2.hide();

        var q5AButton3 = createButton("To take some rest");
        q5AButton3.position(displayWidth - 1000, displayHeight - 400);
        q5AButton3.hide();

        var q5AButton4 = createButton("They do it for no reason");
        q5AButton4.position(displayWidth - 600, displayHeight - 400);
        q5AButton4.hide();

        var q6 = createElement("h2");
        q6.html("Why do you think that a snake flicks out its tongue");
        q6.position(displayWidth - 950, displayHeight - 700);
        q6.hide();

        var q6AButton1 = createButton("For no reason");
        q6AButton1.position(displayWidth - 1000, displayHeight - 500);
        q6AButton1.hide();

        var q6AButton2 = createButton("To scare the enemy saying that it is venomous");
        q6AButton2.position(displayWidth - 600, displayHeight - 500);
        q6AButton2.hide();

        var q6AButton3 = createButton("To sense chemicals to study its environment");
        q6AButton3.position(displayWidth - 1000, displayHeight - 400);
        q6AButton3.hide();

        var q6AButton4 = createButton("A kind of way for the snake to smell its prey");
        q6AButton4.position(displayWidth - 600, displayHeight - 400);
        q6AButton4.hide();

        var q7 = createElement("h2");
        q7.html("How do we differentiate between a venomous and a non-venomous snake");
        q7.position(displayWidth - 950, displayHeight - 700);
        q7.hide();

        var q7AButton1 = createButton("With the presence or the of a rattle");
        q7AButton1.position(displayWidth - 1000, displayHeight - 500);
        q7AButton1.hide();

        var q7AButton2 = createButton("non-venomous are longer than the venomous");
        q7AButton2.position(displayWidth - 600, displayHeight - 500);
        q7AButton2.hide();

        var q7AButton3 = createButton("Venomous snake have a triangular-shaped head");
        q7AButton3.position(displayWidth - 1000, displayHeight - 400);
        q7AButton3.hide();

        var q7AButton4 = createButton("They have a bright colour");
        q7AButton4.position(displayWidth - 600, displayHeight - 400);
        q7AButton4.hide();

        var q8 = createElement("h2");
        q8.html("Which is the most venomous snake in the world");
        q8.position(displayWidth - 950, displayHeight - 700);
        q8.hide();

        var q8AButton1 = createButton("Coral snake");
        q8AButton1.position(displayWidth - 1000, displayHeight - 500);
        q8AButton1.hide();

        var q8AButton2 = createButton("Water moccasin");
        q8AButton2.position(displayWidth - 600, displayHeight - 500);
        q8AButton2.hide();

        var q8AButton3 = createButton("Inland taipan");
        q8AButton3.position(displayWidth - 1000, displayHeight - 400);
        q8AButton3.hide();

        var q8AButton4 = createButton("Timber rattlesnake");
        q8AButton4.position(displayWidth - 600, displayHeight - 400);
        q8AButton4.hide();

        var q9 = createElement("h2");
        q9.html("Which one of these lizards are venomous");
        q9.position(displayWidth - 950, displayHeight - 700);
        q9.hide();

        var q9AButton1 = createButton("Gila monster");
        q9AButton1.position(displayWidth - 1000, displayHeight - 500);
        q9AButton1.hide();

        var q9AButton2 = createButton("Veiled chameleon");
        q9AButton2.position(displayWidth - 600, displayHeight - 500);
        q9AButton2.hide();

        var q9AButton3 = createButton("Komodo dragon");
        q9AButton3.position(displayWidth - 1000, displayHeight - 400);
        q9AButton3.hide();

        var q9AButton4 = createButton("Horned lizard");
        q9AButton4.position(displayWidth - 600, displayHeight - 400);
        q9AButton4.hide();

        var q10 = createElement("h2");
        q10.html("What differentiates an iguana and a gecko");
        q10.position(displayWidth - 950, displayHeight - 700);
        q10.hide();

        var q10AButton1 = createButton("iguanas are nocturnal whereas geckos are diurnal");
        q10AButton1.position(displayWidth - 1000, displayHeight - 500);
        q10AButton1.hide();

        var q10AButton2 = createButton("there is nothing big of a difference");
        q10AButton2.position(displayWidth - 600, displayHeight - 500);
        q10AButton2.hide();

        var q10AButton3 = createButton("iguanas have shorter tail than geckos");
        q10AButton3.position(displayWidth - 1000, displayHeight - 400);
        q10AButton3.hide();

        var q10AButton4 = createButton("iguanas are usually larger than geckos");
        q10AButton4.position(displayWidth - 600, displayHeight - 400);
        q10AButton4.hide();

        var endingText = createElement("h2");
        endingText.html("Great, you completed the quiz and now here are you marks");
        endingText.position(displayWidth - 980, displayHeight - 700);
        endingText.hide();

        var bonusQ = createElement("h2");
        bonusQ.html("Now, what kind of quiz do you think this is (use the puzzle if neccessary)");
        bonusQ.position(displayWidth - 900, displayHeight - 600);
        bonusQ.hide();

        var bonusQAButton1 = createButton("Mammalian quiz");
        bonusQAButton1.position(displayWidth - 800, displayHeight - 400);
        bonusQAButton1.hide();

        var bonusQAButton2 = createButton("Reptilian quiz");
        bonusQAButton2.position(displayWidth - 400, displayHeight - 400);
        bonusQAButton2.hide();

        var bonusQAButton3 = createButton("Amphibian quiz");
        bonusQAButton3.position(displayWidth - 800, displayHeight - 300);
        bonusQAButton3.hide();

        var bonusQAButton4 = createButton("Bird quiz");
        bonusQAButton4.position(displayWidth - 400, displayHeight - 300);
        bonusQAButton4.hide();

        introButton.mousePressed(function() {
            introTitle.hide();
            nameInput.hide();
            introButton.hide();

            var names = nameInput.value();

            q1.show();
            q1AButton1.show();
            q1AButton2.show();
            q1AButton3.show();
            q1AButton4.show();
        })

        q1AButton1.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q1AButton2.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();

            marks++;

            land1 += 1;
        })

        q1AButton3.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q1AButton4.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q2AButton1.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton2.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton3.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton4.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();

            marks++;

            land2 += 1;
        })

        q3AButton1.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();

            marks++;

            land3 += 1;
        })

        q3AButton2.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q3AButton3.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q3AButton4.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q4AButton1.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            q5.show();
            q5AButton1.show();
            q5AButton2.show();
            q5AButton3.show();
            q5AButton4.show();
        })

        q4AButton2.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            q5.show();
            q5AButton1.show();
            q5AButton2.show();
            q5AButton3.show();
            q5AButton4.show();
        })

        q4AButton3.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            q5.show();
            q5AButton1.show();
            q5AButton2.show();
            q5AButton3.show();
            q5AButton4.show();

            marks++;

            land4 += 1
        })

        q4AButton4.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            q5.show();
            q5AButton1.show();
            q5AButton2.show();
            q5AButton3.show();
            q5AButton4.show();
        })

        q5AButton1.mousePressed(function() {
            q5.hide();
            q5AButton1.hide();
            q5AButton2.hide();
            q5AButton3.hide();
            q5AButton4.hide();

            q6.show();
            q6AButton1.show();
            q6AButton2.show();
            q6AButton3.show();
            q6AButton4.show();
        })

        q5AButton2.mousePressed(function() {
            q5.hide();
            q5AButton1.hide();
            q5AButton2.hide();
            q5AButton3.hide();
            q5AButton4.hide();

            q6.show();
            q6AButton1.show();
            q6AButton2.show();
            q6AButton3.show();
            q6AButton4.show();
            
            marks++;

            land5 += 1
        })

        q5AButton3.mousePressed(function() {
            q5.hide();
            q5AButton1.hide();
            q5AButton2.hide();
            q5AButton3.hide();
            q5AButton4.hide();

            q6.show();
            q6AButton1.show();
            q6AButton2.show();
            q6AButton3.show();
            q6AButton4.show();
        })

        q5AButton4.mousePressed(function() {
            q5.hide();
            q5AButton1.hide();
            q5AButton2.hide();
            q5AButton3.hide();
            q5AButton4.hide();

            q6.show();
            q6AButton1.show();
            q6AButton2.show();
            q6AButton3.show();
            q6AButton4.show();
        })

        q6AButton1.mousePressed(function() {
            q6.hide();
            q6AButton1.hide();
            q6AButton2.hide();
            q6AButton3.hide();
            q6AButton4.hide();

            q7.show();
            q7AButton1.show();
            q7AButton2.show();
            q7AButton3.show();
            q7AButton4.show();
        })

        q6AButton2.mousePressed(function() {
            q6.hide();
            q6AButton1.hide();
            q6AButton2.hide();
            q6AButton3.hide();
            q6AButton4.hide();

            q7.show();
            q7AButton1.show();
            q7AButton2.show();
            q7AButton3.show();
            q7AButton4.show();
        })

        q6AButton3.mousePressed(function() {
            q6.hide();
            q6AButton1.hide();
            q6AButton2.hide();
            q6AButton3.hide();
            q6AButton4.hide();

            q7.show();
            q7AButton1.show();
            q7AButton2.show();
            q7AButton3.show();
            q7AButton4.show();
            
            marks++;

            land6 += 1
        })

        q6AButton4.mousePressed(function() {
            q6.hide();
            q6AButton1.hide();
            q6AButton2.hide();
            q6AButton3.hide();
            q6AButton4.hide();

            q7.show();
            q7AButton1.show();
            q7AButton2.show();
            q7AButton3.show();
            q7AButton4.show();
        })

        q7AButton1.mousePressed(function() {
            q7.hide();
            q7AButton1.hide();
            q7AButton2.hide();
            q7AButton3.hide();
            q7AButton4.hide();

            q8.show();
            q8AButton1.show();
            q8AButton2.show();
            q8AButton3.show();
            q8AButton4.show();
        })

        q7AButton2.mousePressed(function() {
            q7.hide();
            q7AButton1.hide();
            q7AButton2.hide();
            q7AButton3.hide();
            q7AButton4.hide();

            q8.show();
            q8AButton1.show();
            q8AButton2.show();
            q8AButton3.show();
            q8AButton4.show();
        })

        q7AButton3.mousePressed(function() {
            q7.hide();
            q7AButton1.hide();
            q7AButton2.hide();
            q7AButton3.hide();
            q7AButton4.hide();

            q8.show();
            q8AButton1.show();
            q8AButton2.show();
            q8AButton3.show();
            q8AButton4.show();
            
            marks++;

            land7 += 1
        })

        q7AButton4.mousePressed(function() {
            q7.hide();
            q7AButton1.hide();
            q7AButton2.hide();
            q7AButton3.hide();
            q7AButton4.hide();

            q8.show();
            q8AButton1.show();
            q8AButton2.show();
            q8AButton3.show();
            q8AButton4.show();
        })

        q8AButton1.mousePressed(function() {
            q8.hide();
            q8AButton1.hide();
            q8AButton2.hide();
            q8AButton3.hide();
            q8AButton4.hide();

            q9.show();
            q9AButton1.show();
            q9AButton2.show();
            q9AButton3.show();
            q9AButton4.show();
        })

        q8AButton2.mousePressed(function() {
            q8.hide();
            q8AButton1.hide();
            q8AButton2.hide();
            q8AButton3.hide();
            q8AButton4.hide();

            q9.show();
            q9AButton1.show();
            q9AButton2.show();
            q9AButton3.show();
            q9AButton4.show();
        })

        q8AButton3.mousePressed(function() {
            q8.hide();
            q8AButton1.hide();
            q8AButton2.hide();
            q8AButton3.hide();
            q8AButton4.hide();

            q9.show();
            q9AButton1.show();
            q9AButton2.show();
            q9AButton3.show();
            q9AButton4.show();
            
            marks++;

            land8 += 1
        })

        q8AButton4.mousePressed(function() {
            q8.hide();
            q8AButton1.hide();
            q8AButton2.hide();
            q8AButton3.hide();
            q8AButton4.hide();

            q9.show();
            q9AButton1.show();
            q9AButton2.show();
            q9AButton3.show();
            q9AButton4.show();
        })

        q9AButton1.mousePressed(function() {
            q9.hide();
            q9AButton1.hide();
            q9AButton2.hide();
            q9AButton3.hide();
            q9AButton4.hide();

            q10.show();
            q10AButton1.show();
            q10AButton2.show();
            q10AButton3.show();
            q10AButton4.show();
            
            marks++;

            land9 += 1
        })

        q9AButton2.mousePressed(function() {
            q9.hide();
            q9AButton1.hide();
            q9AButton2.hide();
            q9AButton3.hide();
            q9AButton4.hide();

            q10.show();
            q10AButton1.show();
            q10AButton2.show();
            q10AButton3.show();
            q10AButton4.show();
        })

        q9AButton3.mousePressed(function() {
            q9.hide();
            q9AButton1.hide();
            q9AButton2.hide();
            q9AButton3.hide();
            q9AButton4.hide();

            q10.show();
            q10AButton1.show();
            q10AButton2.show();
            q10AButton3.show();
            q10AButton4.show();
        })

        q9AButton4.mousePressed(function() {
            q9.hide();
            q9AButton1.hide();
            q9AButton2.hide();
            q9AButton3.hide();
            q9AButton4.hide();

            q10.show();
            q10AButton1.show();
            q10AButton2.show();
            q10AButton3.show();
            q10AButton4.show();
        })

        q10AButton1.mousePressed(function() {
            q10.hide();
            q10AButton1.hide();
            q10AButton2.hide();
            q10AButton3.hide();
            q10AButton4.hide();

            endingText.show();

            fill("black");
            textSize(200);
            text(marks + "/10", displayWidth - 840, displayHeight - 370);
        })

        q10AButton2.mousePressed(function() {
            q10.hide();
            q10AButton1.hide();
            q10AButton2.hide();
            q10AButton3.hide();
            q10AButton4.hide();

            endingText.show();

            fill("black");
            textSize(200);
            text(marks + "/10", displayWidth - 840, displayHeight - 370);
        })

        q10AButton3.mousePressed(function() {
            q10.hide();
            q10AButton1.hide();
            q10AButton2.hide();
            q10AButton3.hide();
            q10AButton4.hide();

            endingText.show();

            fill("black");
            textSize(200);
            text(marks + "/10", displayWidth - 840, displayHeight - 370);
        })

        q10AButton4.mousePressed(function() {
            q10.hide();
            q10AButton1.hide();
            q10AButton2.hide();
            q10AButton3.hide();
            q10AButton4.hide();
            
            marks++;

            land10 += 1

            if(land1 !== null && land2 !== null && land3 !== null && land4 !== null && land5 !== null && land6 !== null && land7 !== null && land8 !== null && land9 !== null && land10 !== null) {
                endingText.hide();

                var lizard = createSprite(displayWidth - 1180, displayHeight - 475, 50, 50);
                lizard.addImage("lizardE", lizardImg);
                bonusQ.show();
                bonusQAButton1.show();
                bonusQAButton2.show();
                bonusQAButton3.show();
                bonusQAButton4.show();

                bonusQAButton1.mousePressed(function() {
                    endingText.show();

                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/10", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton2.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    marks++;

                    fill("black");
                    textSize(200);
                    text(marks + "/10", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton3.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/10", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton4.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/10", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })
            }
        })

        drawSprites();
    }
}