const colors = {
  html: "#E34C26",
  css: "#563D7C",
  java: "#B07219",
  typescript: "#2B7489",
  javascript: "#F1E05A",
  csharp: "#178600",
  sass: "#C6538C",
  other: "#FFF"
}

function getGitHubApi() {
  const url = `https://api.github.com/users/faeelcardoso/repos`;

  fetch(url).then(res => res.json()).then(datas => {

    datas.forEach(data => {

      //Creating all the structure, find a way to do it fast
      insert.innerHTML += `
        <div class="section-projects-each-project">
          <a href="${data.html_url}" target="_blank"><img src="./assets/folder.svg" alt="Folder icon">${data.name}</a>
          <p>${data.description == null ? 'Sem descrição' : data.description}</p>
          <div class="section-projects-each-project-icons">
            <div>
              <img src="./assets/star.svg" alt="Star Icon">
              <span>${data.stargazers_count}</span>
              <img src="./assets/git-branch.svg" alt="Git branch icon">
              <span>${data.forks_count}</span>
            </div>
            <div class="section-projects-each-project-icons-tech">
              <div class="circle"></div>
              <span>${data.language == null ? 'Other' : data.language}</span>
            </div>
          </div>
        </div>
      `;
      
      // Changing the color of the circle 
      if(data.language === null) {
        changeColor("other")
      } else if(data.language === "C#") {
        changeColor("csharp")
      } else {
        changeColor(data.language.toLowerCase());
      }
    });
  });
}

function changeColor(language) {
  const currentElement = document.getElementById("insert").lastElementChild;
  const currentCircle = currentElement.querySelectorAll(".circle")[0];

  for(const color in colors) {
    if(language === color) {
      currentCircle.style.backgroundColor = colors[color];
    } 
  }
}

function init() {
  getGitHubApi();
}

init();