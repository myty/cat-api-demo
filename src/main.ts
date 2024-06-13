import "./style.css";

function setup() {
  const showRandomCat = document.querySelector<HTMLButtonElement>(
    "#showRandomCat",
  );
  if (!showRandomCat) {
    throw new Error("Missing button element");
  }

  const cat = document.querySelector<HTMLImageElement>("#cat");
  if (!cat) {
    throw new Error("Missing cat image element");
  }

  showRandomCat.addEventListener("click", async () => {
    cat.classList.add("hidden");

    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const [firstCat] = await res.json();

    const catImg = document.createElement("img");
    catImg.src = firstCat.url;
    catImg.onload = () => {
      cat.classList.remove("hidden");
      cat.src = firstCat.url;
    };
  });
}

setup();
