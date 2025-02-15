    import SimplexNoise from '../simplex-noise';
    
    function visualize(title, fn) {
      var canvas = document.createElement('canvas');
      var s = 512;
      canvas.width = s;
      canvas.height = s;
      var ctx = canvas.getContext('2d');
      var imageData = ctx.getImageData(0, 0, s, s);
      for (var i = 0; i < imageData.data.length; i++) {
        var x = (fn(i % 512, ~~(i / 512)) + 1) * 128;
        imageData.data[i * 4] = x;
        imageData.data[i * 4 + 1] = x;
        imageData.data[i * 4 + 2] = x;
        imageData.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      var h2 = document.createElement('h2');
      h2.innerHTML = title;
      document.body.appendChild(h2);
      document.body.appendChild(canvas);
    }

    var simplex = new SimplexNoise();
    visualize('noise2D x1', function (x, y) {
      return simplex.noise2D(x, y);
    });
    visualize('noise2D x20', function (x, y) {
      return simplex.noise2D(x / 20, y / 20);
    });

    visualize('noise2D x256', function (x, y) {
      return simplex.noise2D(x / 256, y / 256);
    });

    visualize('noise3D z0 x256', function (x, y) {
      return simplex.noise3D(x / 256, y / 256, 0);
    });

    visualize('noise3D z0 x20', function (x, y) {
      return simplex.noise3D(x / 20, y / 20, 0);
    });

    visualize('noise3D z0.01 x20', function (x, y) {
      return simplex.noise3D(x / 20, y / 20, 0.01);
    });

    visualize('noise3D z1 x20', function (x, y) {
      return simplex.noise3D(x / 20, y / 20, 1);
    });

    visualize('noise4D z1 w1 x20', function (x, y) {
      return simplex.noise4D(x / 20, y / 20, 1, 1);
    });

    simplex = new SimplexNoise('seed');
    visualize('seed noise2D', function (x, y) {
      return simplex.noise2D(x / 20, y / 20);
    });
    simplex = new SimplexNoise('seed');
    visualize('same seed noise2D', function (x, y) {
      return simplex.noise2D(x / 20, y / 20);
    });
    simplex = new SimplexNoise('different seed');
    visualize('different seed noise2D', function (x, y) {
      return simplex.noise2D(x / 20, y / 20);
    });