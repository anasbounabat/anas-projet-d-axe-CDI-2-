document.addEventListener("DOMContentLoaded", function () {
  /*Se sert au navigateur de lancer une fonction une fois que le chargement initial du document HTML est terminé*/

  fetch("https://hp-api.lainocs.fr/characters")
    .then((response) => response.json())
    .then((data) => {
      /*Le fetch sert à faire des requêtes réseau avec l'API d'Harry potter  ensuite le .then va traiter la donnée et elle va la transformer en format JSON*/

      const charactersList = document.getElementById("characters-list");
      const charactersToShow = data.slice(0, 6);

      /* Ici on va recouper 6 premiers éléments de l'API avec l'Id "characters-liste */

      charactersToShow.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        /* CharactersToShow va montrer tous les informations qui sont dans l'API ensuite il va créé une div pour afficher et mettre les informations qui sont récuperer   */

        characterDiv.innerHTML = `
          <h3>${character.name}</h3>
          <img src="${character.image}" alt="${character.name}">
        <p>House: ${character.house}</p>
          <p>Role: ${character.role}</p>
          <p>Eyes: ${character.eyes}</p>
          <p>Birthday: ${character.birthday} </p>
          <p>Hairs: ${character.hairs}</p>
          <p>Blood: ${character.blood}</p>
          <p>Wand: ${character.wand}</p>
        `;

        /* ici on va mettre tous les donnés dont nous avons besoin en reprenant les données dans l'API */
        charactersList.appendChild(characterDiv);

        /* ici on va mettre c'est donné dans une div 'characterDiv' */
      });
    })
    .catch((error) => console.error("Error fetching characters:", error));
  /*ici le .catch va fonctionner s'il y aura une erreur et après s'il y en a une ça va affichererror fetching caractères  */
});


