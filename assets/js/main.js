// ============================================================
//  main.js — renders posts list + handles tag filtering
// ============================================================

(function () {
  const list = document.getElementById("posts-list");
  const countEl = document.getElementById("posts-count");
  const tagBtns = document.querySelectorAll(".tag");
  if (!list) return;

  let activeTag = "all";

  function formatDate(str) {
    const d = new Date(str);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function render(tag) {
    const filtered = tag === "all" ? POSTS : POSTS.filter(p => p.tag === tag);
    countEl.textContent = `— ${filtered.length} ${filtered.length === 1 ? "essay" : "essays"}`;

    list.innerHTML = "";
    filtered.forEach((post, i) => {
      const item = document.createElement("a");
      item.href = post.file;
      item.className = "post-item";
      item.style.animationDelay = `${i * 60}ms`;
      item.innerHTML = `
        <div class="post-item-meta">
          <span class="post-item-date">${formatDate(post.date)}</span>
          <span class="post-item-tag">${post.tag}</span>
        </div>
        <div class="post-item-body">
          <h2 class="post-item-title">${post.title}</h2>
          <p class="post-item-excerpt">${post.excerpt}</p>
        </div>
        <span class="post-item-arrow">→</span>
      `;
      list.appendChild(item);
    });
  }

  tagBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tagBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTag = btn.dataset.tag;
      render(activeTag);
    });
  });

  render("all");
})();
