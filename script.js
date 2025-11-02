const ideaForm = document.getElementById("ideaForm");
const ideaInput = document.getElementById("ideaInput");
const ideaList = document.getElementById("ideaList");

let ideas = JSON.parse(localStorage.getItem("ideas")) || [];

function renderIdeas() {
  ideaList.innerHTML = "";
  ideas.forEach((idea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${idea}</span> <button onclick="deleteIdea(${index})">🗑️</button>`;
    ideaList.appendChild(li);
  });
}

function deleteIdea(index) {
  ideas.splice(index, 1);
  localStorage.setItem("ideas", JSON.stringify(ideas));
  renderIdeas();
}

ideaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newIdea = ideaInput.value.trim();
  if (newIdea) {
    ideas.push(newIdea);
    localStorage.setItem("ideas", JSON.stringify(ideas));
    ideaInput.value = "";
    renderIdeas();
  }
});

renderIdeas();
