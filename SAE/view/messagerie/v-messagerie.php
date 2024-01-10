<div id="chat-container">
  <div id="sidebar">
      <label style="color: black;">Sélectionnez un salon :</label>
      <div id="room-buttons">
          <button class ="active" data-room="general" class="active" onclick="changeRoom('general')">Général</button>
          <button data-room="programming" onclick="changeRoom('programming')">Programmation</button>
          <button data-room="random" onclick="changeRoom('random')">Discussion aléatoire</button>
      </div>
      <button id="load-more-button">Charger plus d'utilisateurs</button>

  </div>

  <div id="main-content">
    <div id="messages-container"></div>
    <div id="input-container">
      <input type="text" id="message-input" placeholder="Ecris un message...">
      <button onclick="sendMessage()" id="send-button">
        <img src="includes/send.png" alt="Send">
      </button>
    </div>
  </div>
</div>
<script src="/src/js/messagerie.js" defer></script>