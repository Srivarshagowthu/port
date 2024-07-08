let currentIndex = 0;

function changeSlide(n) {
  currentIndex += n;
  showSlide();
}

function showSlide() {
  const slides = document.querySelector('.carousel');
  const totalSlides = slides.children.length;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const translateValue = -100 * currentIndex + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

function autoSlide() {
  setInterval(() => {
    currentIndex++;
    showSlide();
  }, 3000); // Change slide every 3 seconds
}

autoSlide();
document.addEventListener("DOMContentLoaded", function () {
  const projectContainer = document.getElementById("projects");

  const projects = [
      // Your project data goes here (name, description, image, etc.)
      // Example:
      { name: "CloudML Sentiment Analysis", description: "• Orchestrated sentiment analysis using AWS Comprehend and Lambda for scalable serverless computing, ensuring precise insights and Managed integration of sentiment analysis models with AWS S3 and IAM roles, optimizing data storage, access control", image: "project1.jpg" },
      { name: "Chrome Extension", description: "Engineered a robust Chrome extension using HTML, CSS, and JavaScript to generate secure passwords.Seamlessly integrated manifest.json for enhanced functionality, streamlined configuration, and optimized user interaction", image: "project2.jpg" },
      { name: "Dictionary Application", description: "Crafted a Dictionary application using HTML, CSS, and JavaScript, integrated API fetching to retrieve word meanings,implemented audio functionality for pronunciation assistance,Deployed application using GitHub Actions for automated server deploymen:", image: "project2.jpg" },
  ];

  projects.forEach((project) => {
      const projectItem = createProjectItem(project);
      projectContainer.appendChild(projectItem);
  });
});

function createProjectItem(project) {
  const item = document.createElement("div");
  item.classList.add("project-item");

  item.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
  `;

  // Add a click event listener to show project details
  item.addEventListener("click", function () {
      showProjectDetails(project);
  });

  return item;
}

function showProjectDetails(project) {
  // Customize this function to display project details however you like
  alert(`Details for ${project.name}:\n${project.description}`);
}
