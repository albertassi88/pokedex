export function setupPagination({ page, setPage, loadPokemons, limit }) {

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const prevIcon = document.querySelector(".arrow-left");
  const nextIcon = document.querySelector(".arrow-right");
  const pagesContainer = document.querySelector(".pages");
  const searchInput = document.getElementById("search");

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
        updateButtons();
        resetSearch();
      });

      pagesContainer.appendChild(span);
    }
    updateButtons();
  }

  function updateButtons() {
    const totalPages = Math.ceil(1300 / limit);

    if (page.value === 1) {
      prevBtn.classList.add("disabled");
      prevIcon.src = "assets/arrow-left-off.png"; 
    } else {
      prevIcon.src = "assets/arrow-left.png"; 
      prevBtn.classList.remove("disabled");
    }

    if (page.value === totalPages) {
      nextBtn.classList.add("disabled");
      nextIcon.src = "assets/arrow-right-off.png"; 
    } else {
      nextBtn.classList.remove("disabled");
      nextIcon.src = "assets/arrow-right.png"; 
    }
  }

  prevBtn.addEventListener("click", () => {
    if (page.value > 1) {
      setPage(page.value - 1);
      loadPokemons();
      renderPagination();
      updateButtons();
      resetSearch();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(1300 / limit);

    if (page.value < totalPages) {
      setPage(page.value + 1);
      loadPokemons();
      renderPagination();
      updateButtons();
      resetSearch();
    }
  });  

  function resetSearch() {
    searchInput.value = "";
  }

  return { renderPagination };
}
