document.addEventListener('DOMContentLoaded', () => {
    const happyMessages = [
        "Keep smiling! You're doing great!",
        "You're amazing! Never forget that! :3",
        "Your smile is so contagious princess!!! :)))",
        "That smile lights up the world! :)",
        "Believe in yourself, you are the best!!!",
        "Your laughter is my favorite sound, cutie! :)",
        "You’re incredible, never stop being you!",
        "Every day is better because you’re in it, dummyy!",
        "Your smile makes my heart so happy! :3",
        "That smile is like a rainbow after every storm. 🌈",
        "You’re my favorite person to be around. :3",
        "Seeing you happy makes me happy. :)",
        "You’ve got such a good heart; it’s awesome to see it overflow on your face with that smile dummyyyyy.",
        "keep smiling ... you deserve it. :)",
        "You’re doing so great, and it shows in that smile of yours!",
        "That little sparkle in your eyes when you’re happy is everything I want!",
        "That smiel is another perfect thing about your perfect self.",
        "It’s impossible not to feel good when you’re smiling like that!",
        "Seeing you like smile like this is gives me some motivation for the day. :)",
        "You’ve got the kind of smile that could make anyone feel better.",
        "Keep being your happy self, you make everything better, little owl!",
        "The way you light up when you’re happy is absolutely beautiful!",
    ];
    
    const sadMessages = [
        "It's okay to feel down sometimes. Keep pushing! I am here for you :)",
        "Remember, tough times don't last, but tough people do!",
        "You are stronger than you think!",
        "It's okay to take a break and recharge!",
        "Don't be sad dummy!!",
        "Noooo, Smile for me >_<",
        "Hey cutie, you make everything better soooo smileeee :3",
        "I’m so proud of you! Keep up the amazing work!",
        "Your kindness makes the world a better place. :)",
        "Stay confident, beautiful! You’re doing great!",
        "You’re my favorite person in the universe, dummy! ^_^",
        "You’re a treasure, and don’t ever forget it!",
        "Never forget how special you are, princesss :3",
        "You’re the best thing to ever happen to me. :)",
        "Hey dummy, don’t let the sadness win! I’m rooting for you!",
        "It’s okay to feel overwhelmed. Just take one step at a time.",
        "Take your time to heal, little owl. I’m here for you. <3",
        "You’re not alone, cutie. :)",
        "Take deep breaths and know I’m here for you, beautiful.",
        "You’re worth so much, even if only YOU can’t see it.",
        "Don’t be too hard on yourself, cutie. You’re amazing!",
        "Rest, recharge, and know you’re loved. ^_^",
        "Take it one moment at a time, little owl. You’re doing your best.",
        "You’ve survived all your bad days so far. You’ll survive this too!",
        "I wish I could hug the sadness out of you, dummy. :3",
        "Sometimes it’s okay to just be, cutie.",
        "You’re soooooooooooo loved cutie don't forget it. >_<",
        "You are the definition of perfect so smileee. :3"

    ];

    const scrollButtons = document.querySelectorAll('.scroll-button');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function getRandomMessage(messages) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    document.getElementById('yes-button').onclick = () => handleDuckResponse(true);
    document.getElementById('no-button').onclick = () => handleDuckResponse(false);

    function handleDuckResponse(isHappy) {
        const duckImage = document.querySelector('.cute-duck');
        const motivationalMessage = document.getElementById('motivational-message');
    
        if (isHappy) {
            duckImage.src = 'Resources/happyduck.jpg'; // Path to happy duck image
            motivationalMessage.innerText = getRandomMessage(happyMessages);
        } else {
            duckImage.src = 'Resources/murderduck.jpg'; // Path to sad duck image
            motivationalMessage.innerText = getRandomMessage(sadMessages);
        }
        motivationalMessage.style.display = 'block'; // Show the motivational message
    }
    
    

    

});

