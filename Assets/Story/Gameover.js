function gameOverScreen() {

    background(10)
    cgGameOver.resize(1403,992);
    image(cgGameOver,-61.5,-72,);

    textAlign(LEFT);
    fill(211);
    textFont(novecentoBold)
    textSize(32)
    text("- Dead -", width * 0.1,height * 0.1)

    textAlign(CENTER);
    textFont(novecentoNormal)
    textSize(12)
    text("(What a Fragile Creature, Your power was wasted in that flesh. Let me make you mine.)", width * 0.5,height * 0.95);

    }