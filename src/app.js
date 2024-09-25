import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomainNames(pronouns, adjectives, nouns, extensionsMap) {
  return pronouns.reduce(
    (domains, pronoun) =>
      domains.concat(
        adjectives.flatMap(adjective =>
          nouns.flatMap(noun => {
            const extension = extensionsMap[noun] || ".com"; // Valor por defecto si no encuentra una extensión
            return [pronoun + adjective + noun + extension];
          })
        )
      ),
    []
  );
}

window.onload = function() {
  const pronouns = ["the", "my"];
  const adjectives = ["great", "small", "funny"];
  const nouns = ["computer", "dog", "camion", "toma", "computado"];

  // Mapeamos cada sustantivo a su extensión correspondiente
  const extensionsMap = {
    camion: ".es",
    toma: ".te",
    computado: ".ra"
  };

  const generatedDomains = generateDomainNames(
    pronouns,
    adjectives,
    nouns,
    extensionsMap
  );

  for (const domain of generatedDomains) {
    console.log(domain);
  }
};
