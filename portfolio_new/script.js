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
      { name: "Survey Form", description: " Using Html,css i have created a basic registration page <br><h4>Git hub repo link:", image: "project1.jpg" },
      { name: "QUOTE GENERATOR", description: "Quote generator usinh html,css and javascript...here i used an api to fetch all the quotes to appear randomly,<br><h4>project link:", image: "project2.jpg" },
      { name: "SuperStore Analysis", description: "using a superstore data i have impleted all the data inti pictorial reprentations including Graphs,charts..etx using concepts of DATAANALYTICS <br><h4> project link:", image: "project2.jpg" },
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
