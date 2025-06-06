
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const ticketSpan = document.querySelector("span");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Generate a mock UUID for demonstration
    const uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );

    // Show the generated ticket
    ticketSpan.textContent = uuid;
  });

  document.querySelector("button[type='button']").addEventListener("click", function () {
    // Refresh action: Reset form and ticket display
    form.reset();
    ticketSpan.textContent = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  });
});
