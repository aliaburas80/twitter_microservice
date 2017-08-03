let virtualConsole = {
    // lines: [],
    // currentLine: 0,
    // log:  (msg, appendToCurrentLine)=> {
    //     if (!appendToCurrentLine) virtualConsole.currentLine++;
    //     if (appendToCurrentLine && virtualConsole.lines[virtualConsole.currentLine]) {
    //         virtualConsole.lines[virtualConsole.currentLine] += msg;
    //     } else {
    //         virtualConsole.lines[virtualConsole.currentLine] = msg;
    //     }
    //
    //       process.stdout.clearLine();  // clear current text
    //       process.stdout.cursorTo(0);  // move cursor to beginning of line
    //
    //     virtualConsole.lines.forEach(function (line) {
    //         process.stdout.write(line);  // write text
    //     });
    // },
    // clear:  ()=> {
    //   process.stdout.clearLine();  // clear current text
    //   process.stdout.cursorTo(0);  // move cursor to beginning of line
    //   virtualConsole.currentLine = 0;
    // }
}

// =================================================
// Little demo to demonstrate how it looks.
// =================================================

// Write an initial console entry.
// virtualConsole.log("Wait");

// Append to last line a few times.

let doWait = ()=>{
  // virtualConsole.log(".", true); // <- Append.
}

// Write a new line.
let doFinish= ()=>{
  // virtualConsole.clear();
  // virtualConsole.log("\nFinished.\n"); // <- New line.
}

module.exports = {
doWait,doFinish
};
