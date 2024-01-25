document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll("img")

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          console.log(e.isIntersecting)
          e.target.src = e.target.getAttribute("data-src")
          observer.unobserve(e.target)
        }
      })
    },
    {
      rootMargin: "200px",
    }
  )

  imgs.forEach((img) => {
    observer.observe(img)
  })
})
