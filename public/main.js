const form = document.getElementById('form');

function addSubscriber(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  console.log(name, email);
  axios
    .post('https://bound-signup-form.onrender.com/api/subscribe', {
      name: name,
      email: email,
    })
    .then((res) => res.json())
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        // showError(err);
      } else if (err.request) {
        // request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// function showError(err) {
//   var x = document.getElementById('err');

//   // Add the "show" class to DIV
//   x.className = 'show';

//   // After 3 seconds, remove the show class from DIV
//   setTimeout(function () {
//     x.className = x.className.replace('show', '');
//   }, 3000);

//   document.getElementById('err').innerHTML = `
//       <div class="mx-auto col-4 mb-4 p-3" style="background-color: #ff6888;">
//         <p class="pt-2">${err.response.data.message}</p>
//       </div>
//     `;
// }

// form.addEventListener('submit', addSubscriber);

AOS.init({
  duration: 1200,
});

$(function () {
  var $navBanner = $('.nav-banner');
  if ($navBanner.offset().top > 0) {
    $navBanner.addClass('scrolled');
  }

  $(document).scroll(function () {
    if ($(this).scrollTop() > 0) {
      console.log('scrolled past height');
      $navBanner.addClass('scrolled');
      $navBanner.removeClass('scrolled-top');
    } else {
      console.log('scrolled below height');
      $navBanner.addClass('scrolled-top');
      $navBanner.removeClass('scrolled');
    }
  });
});
