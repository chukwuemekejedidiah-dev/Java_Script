// let height = 5;

// for (let i = height; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }



function startNokia() {
  let currentMenu = 0;
  let running = true;

  while (running) {
    switch (currentMenu) {

      // ===== MAIN MENU =====
      case 0:
        let main = prompt(
          "NOKIA 3310\n\n" +
          "1. Phone book\n" +
          "2. Messages\n" +
          "3. Chat\n" +
          "4. Call register\n" +
          "5. Tones\n" +
          "6. Settings\n" +
          "7. Call divert\n" +
          "8. Games\n" +
          "9. Calculator\n" +
          "10. Reminders\n" +
          "11. Clock\n" +
          "12. Profiles\n" +
          "13. SIM services\n\n" +
          "-1. Exit"
        );

        main = Number(main);

        switch (main) {
          case -1: running = false; break;
          case 1: currentMenu = 1; break;
          case 2: currentMenu = 2; break;
          case 3: alert("CHAT\n\n0. Back"); currentMenu = 0; break;
          case 4: currentMenu = 4; break;
          case 5: currentMenu = 5; break;
          case 6: currentMenu = 6; break;
          case 7: alert("CALL DIVERT\n\n0. Back"); currentMenu = 0; break;
          case 8: alert("GAMES\n\n0. Back"); currentMenu = 0; break;
          case 9: alert("CALCULATOR\n\n0. Back"); currentMenu = 0; break;
          case 10: alert("REMINDERS\n\n0. Back"); currentMenu = 0; break;
          case 11: alert("CLOCK\n\n0. Back"); currentMenu = 0; break;
          case 12: alert("PROFILES\n\n0. Back"); currentMenu = 0; break;
          case 13: alert("SIM SERVICES\n\n0. Back"); currentMenu = 0; break;
          default: alert("Invalid option");
        }
        break;

      // ===== PHONE BOOK =====
      case 1:
        let phoneBook = prompt(
          "PHONE BOOK\n\n" +
          "1. Search\n" +
          "2. Service Nos.\n" +
          "3. Add name\n" +
          "4. Erase\n" +
          "5. Edit\n" +
          "6. Assign tone\n" +
          "7. Send b'card\n" +
          "8. Options\n" +
          "9. Speed dials\n" +
          "10. Voice tags\n\n" +
          "0. Back"
        );

        phoneBook = Number(phoneBook);

        switch (phoneBook) {
          case 0: currentMenu = 0; break;
          case 1: alert("Search\n\n0. Back"); break;
          case 2: alert("Service Nos.\n\n0. Back"); break;
          case 3: alert("Add name\n\n0. Back"); break;
          case 4: alert("Erase\n\n0. Back"); break;
          case 5: alert("Edit\n\n0. Back"); break;
          case 6: alert("Assign tone\n\n0. Back"); break;
          case 7: alert("Send b'card\n\n0. Back"); break;
          case 8: alert("Options\n\n0. Back"); break;
          case 9: alert("Speed dials\n\n0. Back"); break;
          case 10: alert("Voice tags\n\n0. Back"); break;
          default: alert("Invalid option");
        }
        break;

      // ===== MESSAGES =====
      case 2:
        let messages = prompt(
          "MESSAGES\n\n" +
          "1. Write message\n" +
          "2. Inbox\n" +
          "3. Outbox\n" +
          "4. Picture messages\n" +
          "5. Templates\n" +
          "6. Smileys\n" +
          "7. Message settings\n" +
          "8. Info service\n" +
          "9. Voice mailbox number\n" +
          "10. Service command editor\n\n" +
          "0. Back"
        );

        messages = Number(messages);

        switch (messages) {
          case 0: currentMenu = 0; break;
          case 1: alert("Write message\n\n0. Back"); break;
          case 2: alert("Inbox\n\n0. Back"); break;
          case 3: alert("Outbox\n\n0. Back"); break;
          case 4: alert("Picture messages\n\n0. Back"); break;
          case 5: alert("Templates\n\n0. Back"); break;
          case 6: alert("Smileys\n\n0. Back"); break;
          case 7: alert("Message settings\n\n0. Back"); break;
          case 8: alert("Info service\n\n0. Back"); break;
          case 9: alert("Voice mailbox number\n\n0. Back"); break;
          case 10: alert("Service command editor\n\n0. Back"); break;
          default: alert("Invalid option");
        }
        break;

      // ===== CALL REGISTER =====
      case 4:
        let callReg = prompt(
          "CALL REGISTER\n\n" +
          "1. Missed calls\n" +
          "2. Received calls\n" +
          "3. Dialled numbers\n" +
          "4. Erase recent call lists\n" +
          "5. Show call duration\n\n" +
          "0. Back"
        );

        callReg = Number(callReg);

        switch (callReg) {
          case 0: currentMenu = 0; break;
          case 1: alert("Missed calls\n\n0. Back"); break;
          case 2: alert("Received calls\n\n0. Back"); break;
          case 3: alert("Dialled numbers\n\n0. Back"); break;
          case 4: alert("Erase recent call lists\n\n0. Back"); break;
          case 5: alert("Show call duration\n\n0. Back"); break;
          default: alert("Invalid option");
        }
        break;

      default:
        currentMenu = 0;
    }
  }

  alert("Goodbye 👋");
}

// START PHONE
startNokia();