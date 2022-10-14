quickDrawDataset = ["pen","paper","book","bottle"]
randomNo = Math.floor((Math.random() * quickDrawDataset.length)+1) -1
sketch = quickDrawDataset[randomNo]
console.log(randomNo)
console.log(sketch)

document.getElementById("desenhar").innerHTML = "Esboço a Ser Desenhado: "+sketch

timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;