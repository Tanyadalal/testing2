const WAIT_TIME = 2000;
const LETTER_DURATION = 100;

const noop = () => {};

function onLoad() {
  const text = ["Nothing can describe me better than", "- A little bit of nerdy and a whole lot of bibliophile"];

  write(text[0], () => {
    wait(() => {
      erase(text[0], () => {
        write(text[1], noop);
      });
    });
  });
}

function wait(onCompletion) {
  setTimeout(onCompletion, WAIT_TIME);
}

function write(text, onCompletion) {
  let currentIndex = 0;

  function run() {
    const animatedText = document.querySelector(".animated_text");
    animatedText.innerHTML = text.substring(0, currentIndex);

    if (currentIndex === text.length) {
      onCompletion();
      return;
    }

    currentIndex++;

    setTimeout(run, LETTER_DURATION);
  }

  run();
}

function erase(text, onCompletion) {
  let currentIndex = text.length - 1;

  function run() {
    const animatedText = document.querySelector(".animated_text");
    animatedText.innerHTML = text.substring(0, currentIndex);

    if (currentIndex === 0) {
      onCompletion();
      return;
    }

    currentIndex--;

    setTimeout(run, LETTER_DURATION);
  }

  run();
}

window.addEventListener("load", onLoad);
