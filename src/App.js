import React from 'react';
import './App.css';
// import './social-style.css';
import facebook from 'C:/Users/simon/my-app/src/facebook.jpg';
import twitter from 'C:/Users/simon/my-app/src/twitter-pic.png'
import linkedin from 'C:/Users/simon/my-app/src/Linkedin.png'
import snapchat from 'C:/Users/simon/my-app/src/snapchat.jpg'

// reddit image wasn't free to use on google images
import reddit from 'C:/Users/simon/my-app/src/reddit.png'



  // Load the SDK asynchronously
(function (d, s, id) {
  var js,
    sjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://sdk.snapkit.com/js/v1/create.js";
  sjs.parentNode.insertBefore(js, sjs);
})(document, "script", "snapkit-creative-kit-sdk");

window.snapKitInit = function () {
  snap.creativekit.initalizeShareButtons(
    document.getElementsByClassName("snapchat-share-button")
  );
};

function App() {
  return (
    <div>
      <div class="snapchat-creative-kit-share" data-share-url='https://stanforddaily.com' data-text='false'></div>
      <div>
        <a
          href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fstanforddaily.com%2F"
          target="blank"
        >
          <img src={facebook} />
        </a>
        <a
          href="https://twitter.com/share?url=https://stanforddaily.com/&text=Check out this article from%20@stanforddaily"
          target="blank"
        >
          <img src={twitter} />
        </a>
        <a
          href="https://reddit.com/submit?url=https://stanforddaily.com&title=Check out this article from the Stanford Daily!!"
          target="blank"
        >
          <img src={reddit} />
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?url=https://stanforddaily.com&title=Look at this cool article&summary=I need to figure out how to add a short summary&source=https://stanforddaily.com"
          target="blank"
        >
          <img src={linkedin} />
        </a>
        <a
          className='snapchat-share-button'
          data-share-url="https://www.stanforddaily.com"
          target="blank"
        >
          <img src={snapchat} />
        </a>
      </div>
     </div>
  );
}

export default App;
