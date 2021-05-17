let counter = document.getElementById("counter");
let instruction = document.getElementById("instruction");
let cycleCount = 1;



function updateCounter() {
    let tempCount = parseInt(counter.innerHTML, 10);
    
    // Every 4 seconds, change instruction
    if (cycleCount < 4) {
        instruction.innerHTML=`Inhale`;
        
        counter.style.transform = "scale(1.5)";
        instruction.style.transform = "scale(1.5)";
        cycleCount++;
    } else if (cycleCount >= 4 && cycleCount < 8) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount >= 8 && cycleCount < 12) {
        instruction.innerHTML=`Exhale`;
        
        instruction.style.transform = "scale(1)";
        counter.style.transform = "scale(1)";
        cycleCount++;
    } else if (cycleCount >= 12 && cycleCount < 16) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount == 16) {
        cycleCount = 1;
        instruction.innerHTML=`Inhale`;
        instruction.style.transform = "scale(1.5)";
        counter.style.transform = "scale(1.5)";
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