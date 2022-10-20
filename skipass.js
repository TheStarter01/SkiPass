function Stepper(BOXNUM) {
    switch (BOXNUM) {
      case 1:
        document.getElementById('dot1').style.backgroundColor = '#004777';
        document.getElementById('line1').style.backgroundColor = '#004777';
        document.getElementById('text1').style.visibility = 'inherit';

        

        // disable other
        document.getElementById('dot2').style.backgroundColor = '#D9D9D9';
        document.getElementById('dot3').style.backgroundColor = '#D9D9D9';
        document.getElementById('line2').style.backgroundColor = '#D9D9D9';
        document.getElementById('text2').style.visibility = 'hidden';
        document.getElementById('text3').style.visibility = 'hidden';

        break;

      case 2:
        document.getElementById('dot2').style.backgroundColor = '#004777';
        document.getElementById('text2').style.visibility = 'inherit';

        // disable other
        document.getElementById('line1').style.backgroundColor = '#D9D9D9';
        document.getElementById('line2').style.backgroundColor = '#D9D9D9';
        document.getElementById('dot1').style.backgroundColor = '#D9D9D9';
        document.getElementById('dot3').style.backgroundColor = '#D9D9D9';
        document.getElementById('text1').style.visibility = 'hidden';
        document.getElementById('text3').style.visibility = 'hidden';
        break;

      case 3:
        document.getElementById('dot3').style.backgroundColor = '#004777';
        document.getElementById('line2').style.backgroundColor = '#004777';
        document.getElementById('text3').style.visibility = 'inherit';

        // disable other
        document.getElementById('dot1').style.backgroundColor = '#D9D9D9';
        document.getElementById('dot2').style.backgroundColor = '#D9D9D9';
        document.getElementById('line1').style.backgroundColor = '#D9D9D9';
        document.getElementById('text1').style.visibility = 'hidden';
        document.getElementById('text2').style.visibility = 'hidden';
        break;

      default:
        alert('Default case triggered');
        break;
    }
  }


 