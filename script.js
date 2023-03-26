
const aboutBtn = document.getElementById('info1');
const whyFacBtn = document.getElementById('info2');
const whySdBtn = document.getElementById('info3');

const ProjectsBtn = document.getElementById("projects");
const GitHubBtn = document.getElementById("git-logo")

const aboutDiv = document.getElementById('about');
const whyFacDiv = document.getElementById('why-fac');
const whySdDiv = document.getElementById('why-sd');

ProjectsBtn.addEventListener("click", () => {
    GoToProjectGallery();
});

function GoToProjectGallery() {
    window.location = "https://lucfercas.github.io/Project-Gallery/";
}

GitHubBtn.addEventListener("click", () => {
    GoToRepos();
});

function GoToRepos() {
    window.open("https://github.com/lucfercas", '_blank');
}

aboutBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'block';
    whyFacDiv.style.display = 'none';
    whySdDiv.style.display = 'none';
});

whyFacBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'none';
    whyFacDiv.style.display = 'block';
    whySdDiv.style.display = 'none';
});

whySdBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'none';
    whyFacDiv.style.display = 'none';
    whySdDiv.style.display = 'block';
});