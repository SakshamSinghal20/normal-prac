///tic tac
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Only allow click if box is empty
        if (box.innerText === "") {
            console.log("box was clicked");
            if (turnO) {
                box.innerText = "O";  // Fixed: was "0"
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Fixed: Check if all 3 are the SAME AND NOT EMPTY
        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val !== "") {
            console.log("Winner:", pos1Val);
            alert(`Player ${pos1Val} Wins! 🎉`);
            disableAllBoxes();
            return; // Stop checking other patterns
        }
    }
    
    // Check for Draw (all boxes filled, no winner)
    let isDraw = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });
    
    if (isDraw) {
        console.log("It's a Draw!");
        alert("It's a Draw! 🤝");
    }
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";      // Clear text
        box.disabled = false;    // Re-enable clicking
    });
    turnO = true;                // O starts first
    console.log("Game Reset!");
};

// Connect reset button
reset.addEventListener("click", resetGame);