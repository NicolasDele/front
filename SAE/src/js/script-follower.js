const followerContainer = document.getElementById('followerContainer');
const displayedFollowersIds = [];

function getFollowers(usersIdList, callback) {
    socket.emit('follower', { users_id: usersIdList,token });

    socket.once('reponsefollower', (response) => {
      const followersList = response.response || [];
        console.log(response.response);
        callback(response.response);
    });
}

function loadFollowersBatch() {
    getFollowers(displayedFollowersIds, (followersFromSocket) => {
        console.log(followersFromSocket);
      const ulElement = document.querySelector('.followers-list');

  if (followersFromSocket && followersFromSocket.length > 0) {
          // Génère et affiche les éléments <li> pour chaque follower
          for (const followerInfo of followersFromSocket) {
              // Vérifie si l'ID du follower a déjà été affiché
              if (!displayedFollowersIds.includes(followerInfo._id)) {
                  const liElement = document.createElement('li');
                  liElement.className = 'follower';

                  // Crée un élément d'ancre (<a>) pour l'ensemble du <li>
                  const listItemLink = document.createElement('a');
                  listItemLink.href = `/user/${followerInfo.nickname}`;

                  const imgHumain = document.createElement('img');
                  imgHumain.src = followerInfo.picture || 'includes/default-profile-picture.jpg'; // Image par défaut
                  imgHumain.className = 'imgAbonnes';

                  const usernameSpan = document.createElement('span');
                  usernameSpan.textContent = followerInfo.nickname;

                  liElement.appendChild(imgHumain);
                  liElement.appendChild(usernameSpan);
                  listItemLink.appendChild(liElement);
                  ulElement.appendChild(listItemLink);

                  // Ajoute l'ID du follower à la liste des IDs déjà affichés
                  displayedFollowersIds.push(followerInfo._id);
              }
          }
      } else {
          // La liste est vide, affiche un message approprié
          const noContactMessage = document.createElement('li');
          noContactMessage.textContent = 'Aucun abonnés';
          noContactMessage.classList.add('no-contact-message'); // Ajoute la classe pour le style
          ulElement.appendChild(noContactMessage);
      }
  });
}

// Appel initial pour charger les premiers followers
loadFollowersBatch();


