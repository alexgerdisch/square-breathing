let counter = document.getElementById("counter");
let instruction = document.getElementById("instruction");
let cycleCount = 1;
let globalCount = document.getElementById("total");
let totalCount = 1;
let view = document.getElementById("view");

let startMeditating = setInterval(updateCounter, 1000);

function updateCounter() {
    let tempCount = parseInt(counter.innerHTML, 10);
    totalCount++;
    
    // Changing Instruction text
    if (cycleCount < 4) {
        instruction.innerHTML=`Inhale`;
        counter.style.transform = "scale(1.5)";
        instruction.style.transform = "scale(1.5)";
        view.style.backgroundColor = "#39204e";
        cycleCount++;
    } else if (cycleCount >= 4 && cycleCount < 8) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount >= 8 && cycleCount < 12) {
        instruction.innerHTML=`Exhale`;
        instruction.style.transform = "scale(1)";
        counter.style.transform = "scale(1)";
        view.style.backgroundColor = "#052a30";
        cycleCount++;
    } else if (cycleCount >= 12 && cycleCount < 16) {
        instruction.innerHTML=`Hold`;
        cycleCount++;
    } else if (cycleCount == 16) {
        cycleCount = 1;
        instruction.innerHTML=`Inhale`;
        instruction.style.transform = "scale(1.5)";
        counter.style.transform = "scale(1.5)";
        view.style.backgroundColor = "#39204e";
    }

    // Updating Main Counter
    if (tempCount < 4) {
        tempCount++;
    } else if (tempCount == 4) {
        tempCount = 1;
    }

    // Updating Total Meditation Time
    
   numMinutes = Math.floor(totalCount / 60);
   numSeconds = totalCount % 60;
   

    if (numMinutes >= 1 && numMinutes < 10 && numSeconds < 10) {
        globalCount.innerHTML= `0${numMinutes}:0${numSeconds}`;
    } else if (numMinutes >= 1 && numMinutes < 10 && numSeconds >= 10) {
        globalCount.innerHTML= `0${numMinutes}:${numSeconds}`;
    } else if (numMinutes >= 10 && numSeconds < 10) {
        globalCount.innerHTML= `${numMinutes}:0${numSeconds}`;
    } else if (numMinutes == 0 && numSeconds < 10) {
        globalCount.innerHTML = `00:0${numSeconds}`;
    } else if (numMinutes == 0 && numSeconds >= 10) {
        globalCount.innerHTML = `00:${numSeconds}`;
    }

    counter.innerHTML=`${tempCount}`;

}


function toggleMeditation() {
    
    if (view.classList.contains("active")) {
        clearInterval(startMeditating);
        view.classList.toggle("active");
    } else {
        startMeditating = setInterval(updateCounter, 1000);
        view.classList.toggle("active");
        
    }
}

view.addEventListener("click", toggleMeditation);







