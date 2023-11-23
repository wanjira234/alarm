function showNotification() {
    const notificationSound = document.getElementById("notification-sound");
    const gifContainer = document.getElementById("gif-container");
    const notification = document.getElementById("notification");

    // Play the notification sound
    notificationSound.play();

    // Display the GIF
    gifContainer.style.display = "block";

    // Display the notification
    notification.style.display = "block";
}
