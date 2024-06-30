function toggleContent() {
    var contentDiv = document.getElementById("content");
    if (contentDiv.innerHTML.trim() === "This is the default content.") {
      contentDiv.innerHTML = "<p>This is the updated content.</p>";
    } else {
      contentDiv.innerHTML = "<p>This is the default content.</p>";
    }
  }
  