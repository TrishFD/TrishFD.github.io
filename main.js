function selectCharacter(className) {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a character name.');
        return;
    }

    const characterData = {
        username: username,
        className: className,
        level: 1,
        gold: 0,
        stats: {
            strength: 10,
            agility: 10,
            intelligence: 10,
            stamina: 10,
            charisma: 10
        },
        profession: 'None',
        options: 'None'
    };

    localStorage.setItem('characterData', JSON.stringify(characterData));
    window.location.href = 'profile.html';
}

function loadProfile() {
    const characterData = JSON.parse(localStorage.getItem('characterData'));
    if (!characterData) {
        alert('No character found.');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('characterName').textContent = `${characterData.username} - Level ${characterData.level} ${characterData.className}`;
    document.getElementById('goldAmount').textContent = `Gold: ${characterData.gold}`;
    document.getElementById('characterImage').src = `${characterData.className}.jpg`;

    let statsHTML = '';
    for (const [stat, value] of Object.entries(characterData.stats)) {
        statsHTML += `${stat}: ${value}<br>`;
    }
    document.getElementById('characterStats').innerHTML = statsHTML;

    document.getElementById('characterOptions').textContent = `Profession: ${characterData.profession}\nOptions: ${characterData.options}`;
}

function checkUserExists() {
    const characterData = JSON.parse(localStorage.getItem('characterData'));
    if (characterData) {
        window.location.href = 'profile.html';
    }
}
