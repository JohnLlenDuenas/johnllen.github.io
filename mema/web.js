function showOverlayAndPlayVideo() {
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('overlay2').style.display = 'none';
      document.getElementById('displayVideo').play();
    }

    document.getElementById('submitButton1').addEventListener('click', function() {
      if (checkFields2()) {
      clearFields2();
      showOverlayAndPlayVideo();
      } else {
          alert('Please fill in all fields.');
      }
      
    });

    function checkFields2() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var citizenship = document.getElementById('citizenship').value;
    var program = document.getElementById('program').value;
    if (name === '' || email === '' || address === '' || citizenship === ''|| program === '') {
        return false;
    }
    return true;
    }
    function clearFields2() {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('address').value = '';
      document.getElementById('citizenship').value = '';
      document.getElementById('program').value = '';
    }



    document.getElementById('submitButton2').addEventListener('click', function() {
    if (checkFields()) {
      clearFields();
      var audio = document.getElementById('backgroundAudio');
      audio.play();
      } else {
          alert('Please fill in all fields.');
      }
    });


    function checkFields() {
    var name = document.getElementById('name2').value;
    var age = document.getElementById('age').value;
    var advertDatetime = document.getElementById('advert_datetime').value;
    var cityAddress = document.getElementById('cityaddress').value;
    if (name === '' || age === '' || advertDatetime === '' || cityAddress === '') {
        return false;
    }
    return true;
    }

    function clearFields() {
      document.getElementById('name2').value = '';
      document.getElementById('age').value = '';
      document.getElementById('advert_datetime').value = '';
      document.getElementById('cityaddress').value = '';
      var radio = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
      });
    }