class Clock{
    constructor(){
        this.hr = hour();
        this.mn = minute();
        this.sc = second();
        this.scAngle = map(this.sc, 0, 60, 0, 360);
        this.mnAngle = map(this.mn, 0, 60, 0, 360);
        this.hrAngle = map(this.hr, 0, 12, 0, 360);
    }


    display(){
        scale(.3);
        this.rim();
        this.bodyGradient();
        this.secondHand();
        this.minuteHand();
        this.hourHand();
        this.rim2();
    }

    update(){
        this.hr = hour();
        this.mn = minute();
        this.sc = second();
        this.scAngle = map(this.sc, 0, 60, 0, 360);
        this.mnAngle = map(this.mn, 0, 60, 0, 360);
        this.hrAngle = map(this.hr, 0, 12, 0, 360);
    }

    rim(){
        fill(255, 255, 255, 50);
        ellipse(0, 0, 320, 320);
    }

    bodyGradient(){
        fill(128, 64, 0);
        ellipse(0, 0, 300, 300);
        fill(44, 10, 74, 40);
        arc(0, 0, 300, 300, 150, -150, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 140, -140, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 130, -130, PI + QUARTER_PI, CHORD)
          arc(0, 0, 300, 300, 120, -120, PI + QUARTER_PI, CHORD)
          arc(0, 0, 300, 300, 110, -110, PI + QUARTER_PI, CHORD)
          arc(0, 0, 300, 300, 100, -100, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 90, -90, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 80, -80, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 70, -70, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 60, -60, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 50, -50, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 40, -40, PI + QUARTER_PI, CHORD)
        arc(0, 0, 300, 300, 30, -30, PI + QUARTER_PI, CHORD)
    }

    secondHand(){
        push();
        rotate(this.scAngle);
        stroke(255);
        strokeWeight(3);
        line(0, 0, 120, 0);
        pop();
    }

    minuteHand(){
        push();
        rotate(this.mnAngle);
        stroke(255);
        strokeWeight(5);
        line(0, 0, 120, 0);
        pop();
    }



    hourHand(){
        push();
        rotate(this.hrAngle);
        stroke(255);
        strokeWeight(5);
        line(0, 0, 70, 0);
        pop();
    }

    rim2(){
        stroke(255);
        strokeWeight(3);
        noFill();
        ellipse(0, 0, 300, 300);
    }



}

