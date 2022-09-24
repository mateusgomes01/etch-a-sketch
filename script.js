const board = document.getElementById("board");
board.style.textAlign = "center";

for( let i = 0 ; i < 16 ; i++ ){
    for( let j = 0 ; j < 16 ; j++ ){
        const pixel = document.createElement("div");
        pixel.textContent = `${i+j}`;
        pixel.classList.add("pixel")
        board.appendChild(pixel);
    }
}