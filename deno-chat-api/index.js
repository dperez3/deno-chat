addEventListener("fetch", (event) => {
    const response = new Response("I said... HELLO WORLD!", {
      headers: { "content-type": "text/plain" },
    });
    event.respondWith(response);
  });
  