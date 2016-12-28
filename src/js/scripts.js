// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar1 = new ProgressBar.Circle('#progressbar_webdesign', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#30bae7', width: 8 },
  to: { color: '#30bae7', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar1.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
bar1.text.style.fontSize = '40px';

bar1.animate(0.9);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle('#progressbar_HTML', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#d74680', width: 8 },
  to: { color: '#d74680', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar2.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
bar2.text.style.fontSize = '40px';

bar2.animate(0.75);  // Number from 0.0 to 1.0

var bar3 = new ProgressBar.Circle('#progressbar_graphic', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#15c7a8', width: 8 },
  to: { color: '#15c7a8', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar3.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
bar3.text.style.fontSize = '40px';

bar3.animate(0.70);  // Number from 0.0 to 1.0

var bar4 = new ProgressBar.Circle('#progressbar_UI', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#eb7d4b', width: 8 },
  to: { color: '#eb7d4b', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar4.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
bar4.text.style.fontSize = '40px';

bar4.animate(0.85);  // Number from 0.0 to 1.0

//font-family: 'Titillium Web', sans-serif;