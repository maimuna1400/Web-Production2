let theta;

function setup() {
  createCanvas(windowWidth, 200);
}

function draw() {
  background(254,241,230);
  frameRate(30);
    stroke(0,0,0);
    // Let's pick an angle 0 to 90 degrees based on the mouse position
    let a = (mouseX / width) * 35;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width/2,height);
    // Draw a line 120 pixels
    line(0,0,0,-60);
    // Move to the end of that line
    translate(0,-60);
    // Start the recursive branching!
    branch(50);
}

function branch(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.70;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 4) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}


