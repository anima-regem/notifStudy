const button = document.querySelector("button");
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

  notif.addEventListener("show", (e) => {
    for (let i = 0; i < 10; i++) {
      createNotif();
    }
  });
};
