
function func1(callbacks) {
    setTimeout(() => {
        console.log("Task 1");
        callbacks()}, 3000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);