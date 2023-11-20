// eslint-disable-next-line no-restricted-globals
self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("New notification", data);
  const options = {
    body: data.body,
  };
  // eslint-disable-next-line no-restricted-globals
  event.waitUntil(self.registration.showNotification(data.title, options));
});
