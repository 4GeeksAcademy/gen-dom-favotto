const pronouns = ["the", "my"];
const adjectives = ["great", "small", "funny"];
const nouns = ["computer", "dog", "camion", "toma", "computado"];

const extensionsMap = {
  camion: ".es",
  toma: ".te",
  computado: ".ra"
};

function generateDomainNames(pronouns, adjectives, nouns, extensionsMap) {
  return pronouns.reduce(
    (domains, pronoun) =>
      domains.concat(
        adjectives.flatMap(adjective =>
          nouns.flatMap(noun => {
            const extension = extensionsMap[noun] || ".com";
            return [pronoun + adjective + noun + extension];
          })
        )
      ),
    []
  );
}

const generateButton = document.getElementById("generateButton");
const domainContainer = document.getElementById("domainContainer");

generateButton.addEventListener("click", () => {
  const generatedDomains = generateDomainNames(
    pronouns,
    adjectives,
    nouns,
    extensionsMap
  );

  if (generatedDomains.length === 0) {
    domainContainer.textContent = "No se pudieron generar dominios.";
    return;
  }

  domainContainer.innerHTML = "";

  const domainList = document.createElement("ul");
  generatedDomains.forEach(domain => {
    const listItem = document.createElement("li");
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });

  domainContainer.appendChild(domainList);
});
