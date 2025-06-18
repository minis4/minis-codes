const button = document.getElementById("interactBtn") as HTMLButtonElement;

button?.addEventListener("click", () => {
  const featureList = [
    "Typed DOM interaction ✅",
    "Type-safe development ✨",
    "Easy debugging 🔍",
    "Compile-time checks 🔐"
  ];

  const randomFeature = featureList[Math.floor(Math.random() * featureList.length)];
  alert(`TypeScript Feature: ${randomFeature}`);
});
