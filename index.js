window.onload = function () {
    var messageButton = document.getElementById('messageButton');
    var messageOutput = document.getElementById('messageOutput');

    var messages = [
        "Love you, Dajia!",
        "Miss you, Dajia!",
        "You are my queen.",
        "Xabiibti, you are my everything."
    ];

    messageButton.onclick = function () {
        var randomIndex = Math.floor(Math.random() * messages.length);
        var randomMessage = messages[randomIndex];
        messageOutput.textContent = randomMessage;
    };
};
