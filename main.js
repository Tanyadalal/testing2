function toggle() {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
  
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
  }
  
  function onLoad() {
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.innerHTML = hamburgerSVG();
    

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    const observer = new IntersectionObserver(handleIntersect, options);
  
    const space = document.querySelector(".space");
    const text = document.querySelector(".text");
    observer.observe(space);
    observer.observe(text);
  
  }

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);
       if (entry.intersectionRatio >= 0.1) {
        entry.target.classList.add("active");
       }
    });
  }

  
  window.addEventListener("load", onLoad);
  function hamburgerSVG() {
    return `<svg height='50px' width='50px'  fill="#231f20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" x="0px" y="0px"><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="#231f20" fill-rule="evenodd"><g fill="#231f20"><path d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L5,8 C4.44771525,8 4,7.55228475 4,7 C4,6.44771525 4.44771525,6 5,6 Z M5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 Z M5,16 L19,16 C19.5522847,16 20,16.4477153 20,17 C20,17.5522847 19.5522847,18 19,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 Z"></path></g></g></svg>`;
  }
  
  function switchTheme() {
  
    document.body.classList.toggle("dark-mode");
   
  }


