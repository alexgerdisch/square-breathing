let counter = document.getElementById("counter");
let instruction = document.getElementById("instruction");
let cycleCount = 1;

// remove initial 1sec input delay from transition
instruction.style.fontSize = "5rem";
counter.style.fontSize = "7rem";

function updateCounter() {
    let tempCount = parseInt(counter.innerHTML, 10);
    
    // Every 4 seconds, change instruction
    if (cycleCount < 4) {
        instruction.innerHTML=`Inhale`;
        instruction.style.fontSize = "5rem";
        counter.style.fontSize = "7rem";
        cycleCount++;
    } else if (cycleCount >= 4 && cycleCount < 8) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount >= 8 && cycleCount < 12) {
        instruction.innerHTML=`Exhale`;
        instruction.style.fontSize = "3rem";
        counter.style.fontSize = "5rem";
        cycleCount++;
    } else if (cycleCount >= 12 && cycleCount < 16) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount == 16) {
        cycleCount = 1;
        instruction.innerHTML=`Inhale`;
        instruction.style.fontSize = "5rem";
        counter.style.fontSize = "7rem";
    }

    if (tempCount < 4) {
        tempCount++;
    } else if (tempCount == 4) {
        tempCount = 1;
    }

    document.getElementById("counter").innerHTML=`${tempCount}`;
    return tempCount;
}



setInterval(updateCounter, 1000);
// clearInterval();s