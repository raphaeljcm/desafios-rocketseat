function getGitHubApi() {
  const url = `https://api.github.com/users/faeelcardoso/repos`;

  fetch(url).then(res => res.json()).then(datas => {

    datas.forEach(data => {
      //Creating all the structure, find a way to do it fast

      console.log(data.name);
      console.log(data.html_url);
      console.log(data.description);
      console.log(data.stargazers_count);
      console.log(data.forks_count);
      console.log(data.language);
    });

    /*
      <div class="section-projects-each-project">
            <a href="#"><img src="./assets/folder.svg" alt="Folder icon"> my-onix</a>
            <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
            <div class="section-projects-each-project-icons">
              <div>
                <img src="./assets/star.svg" alt="Star Icon">
                <span>100</span>
                <img src="./assets/git-branch.svg" alt="Git branch icon">
                <span>100</span>
              </div>
              <div class="section-projects-each-project-icons-tech">
                <div class="circle"></div>
                <span>Javascript</span>
              </div>
            </div>
    */
  });
}

function init() {
  getGitHubApi();
}

init();