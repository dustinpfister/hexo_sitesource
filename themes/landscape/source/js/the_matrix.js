var Matrix = (function() {

  var api = {

    points: [],
    w: 16

  };

  api.setup = function(forPoint) {

    var i = this.w * this.w,
      x, y;

    forPoint = forPoint || function() {

      var pt = {},
        op,
        roll = Math.random();

      if (roll < .3) {

        op = Number(Math.random() * 200 + 55) / 255;

        pt.color = 'rgba(255,255,255,' + op.toFixed(1) + ')';

      }

      return pt;

    };

    this.points = [];

    while (i--) {

      y = Math.floor(i / this.w);
      x = i % this.w;

      this.points[i] = forPoint(x, y);
      this.points[i].i = i;
      this.points[i].x = x;
      this.points[i].y = y;

    }

  };

  api.getPoint = function(ix, y) {

    if (y === undefined) {

      return this.points[ix];

    } else {

      return this.points[y * this.w + ix];

    }

  };

  api.setup();

  return api;


}());

var Canvas = (function() {

    // create and inject a canvas
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),

      setup = function() {

        // append to header
        var header = document.getElementById('banner');
        
        header.insertBefore(canvas, header.firstChild);
        
 
        // set actual matrix size of the canvas
        canvas.width = 240;
        canvas.height = 240;

        canvas.style.width = header.scrollHeight + 'px';
        canvas.style.height = header.scrollHeight + 'px';
        
        //canvas.style.position = 'absolute';
        canvas.style.display = 'block';
        canvas.style.marginRight = 'auto';
        canvas.style.marginLeft = 'auto';
        //canvas.style.top = '0px';
        //canvas.style.left = '0px';



      };

    setup();



    return {

      // the single draw function
      draw: function() {

        this.cls();

        // draw a cirlce
        ctx.strokeStyle = '#ffffff';
        
        var sizeW = canvas.width / Matrix.w,
        sizeH = canvas.height / Matrix.w;

        Matrix.points.forEach(function(pt) {

          if (pt.color) {

            ctx.fillStyle = pt.color;
            ctx.fillRect(pt.x * sizeW , pt.y * sizeH, sizeW, sizeH);

          }

        });


      },

      // clear screen
      cls: function() {

        // default the canvas to a solid back background
        ctx.fillStyle = '#000000';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      }

    };

  }
  ());

Canvas.draw();
