const btnnav = document.querySelector("nav #btn-nav");
const btnvss = document.querySelector("nav #btn-vss");
const btnhtml = document.querySelector("nav #btn-html");
const btncss = document.querySelector("nav #btn-css");
const btnjs = document.querySelector("nav #btn-js");
const btngit = document.querySelector("nav #btn-git");
const sectionnav = document.querySelector("#section-nav");
const sectionvss = document.querySelector("#section-vss");
const sectionhtml = document.querySelector("#section-html");
const sectioncss = document.querySelector("#section-css");
const sectionjs = document.querySelector("#section-js");
const sectiongit = document.querySelector("#section-git");

btnnav.addEventListener("click", () => {
  sectionnav.style.border = "5px solid var(--colorNAV)";
  sectionnav.style.display = "block";
  sectionvss.style.display = "none";
  sectionhtml.style.display = "none";
  sectioncss.style.display = "none";
  sectionjs.style.display = "none";
  sectiongit.style.display = "none";
});

btnvss.addEventListener("click", () => {
  sectionvss.style.border = "5px solid var(--colorVSS)";
  sectionnav.style.display = "none";
  sectionvss.style.display = "block";
  sectionhtml.style.display = "none";
  sectioncss.style.display = "none";
  sectionjs.style.display = "none";
  sectiongit.style.display = "none";
});

btnhtml.addEventListener("click", () => {
  sectionhtml.style.border = "5px solid var(--colorHTML)";
  sectionnav.style.display = "none";
  sectionvss.style.display = "none";
  sectionhtml.style.display = "block";
  sectioncss.style.display = "none";
  sectionjs.style.display = "none";
  sectiongit.style.display = "none";
});

btncss.addEventListener("click", () => {
  sectioncss.style.border = "5px solid var(--colorCSS)";
  sectionnav.style.display = "none";
  sectionvss.style.display = "none";
  sectionhtml.style.display = "none";
  sectioncss.style.display = "block";
  sectionjs.style.display = "none";
  sectiongit.style.display = "none";
});

btnjs.addEventListener("click", () => {
  sectionjs.style.border = "5px solid var(--colorJS)";
  sectionnav.style.display = "none";
  sectionvss.style.display = "none";
  sectionhtml.style.display = "none";
  sectioncss.style.display = "none";
  sectionjs.style.display = "block";
  sectiongit.style.display = "none";
});

btngit.addEventListener("click", () => {
  sectiongit.style.border = "5px solid var(--colorGIT)";
  sectionnav.style.display = "none";
  sectionvss.style.display = "none";
  sectionhtml.style.display = "none";
  sectioncss.style.display = "none";
  sectionjs.style.display = "none";
  sectiongit.style.display = "block";
});
