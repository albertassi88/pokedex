export function setupPagination({ page, setPage, loadPokemons, limit }) {

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const pagesContainer = document.querySelector(".pages");

  function renderPagination() {

    const totalPages = Math.ceil(1300 / limit);

    pagesContainer.innerHTML = "";

    let start = Math.max(1, page.value - 2);
    let end = Math.min(totalPages, page.value + 2);

    for (let i = start; i <= end; i++) {

      const span = document.createElement("span");
      span.textContent = i;

      if (i === page.value) {
        span.classList.add("active");
      }

      span.addEventListener("click", () => {
        setPage(i);
        loadPokemons();
      });

      pagesContainer.appendChild(span);
    }
  }

  prevBtn.addEventListener("click", () => {
    if (page.value > 1) {
      setPage(page.value - 1);
      loadPokemons();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(1300 / limit);

    if (page.value < totalPages) {
      setPage(page.value + 1);
      loadPokemons();
    }
  });

  return { renderPagination };
}
