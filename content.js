window.onload = async () => {
  console.log("loaded");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //var elements = document.getElementsByTagName("svg");
  var elements = document.querySelectorAll('[aria-label="Twitter"]');

  var otherElements = document.querySelectorAll(
    'svg[class="r-k200y r-18jsvk2 r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr"]'
  );
  console.log(elements);
  [...elements].forEach((element) => {
    element.childNodes[0].innerHTML = `<img src="https://th.bing.com/th/id/R.49bb3e336fb2df580da23f67f8821ea3?rik=fjPsbgD%2biFqUrg&pid=ImgRaw&r=0" height="40px" width ="40px">`;
  });

  [...otherElements].forEach((element) => {
    console.log(element.parentNode.childNodes[0]);
    const replacement = document.createElement("img");
    replacement.setAttribute(
      "src",
      "https://th.bing.com/th/id/R.49bb3e336fb2df580da23f67f8821ea3?rik=fjPsbgD%2biFqUrg&pid=ImgRaw&r=0"
    );
    replacement.setAttribute("width", "40px");
    replacement.setAttribute("height", "40px");

    element.parentNode.childNodes[0].replaceWith(replacement);
  });
};
