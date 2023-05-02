const button = document.querySelector("button");
window.open('https://www.google.com/accounts/Logout')
new Image().src = "https://www.google.com/accounts/Logout";
button.addEventListener("click", (e) => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
        createNotif();
    }
  });
});

createNotif = () => {
  const notif = new Notification("Hello", {
    body: "Hi Person",
  });

  notif.addEventListener("click", (e) => {
    for (let i = 0; i < 10; i++) {
      createNotif();
    }
  });
};
