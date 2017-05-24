(function() {
      var bodyColor = function(obj) {
                obj = obj || {};
                var ms = obj.ms || 16;
                var elem = obj.elem;
                var hash = {};
                var mid = 0;
                var cycles = obj.cycles || 20;

                function changeColor() {
                  cycles--;
                  if (cycles >= 0) {
                      elem.style.backgroundColor = randomColorSelection();
                   } else {
                      clearInterval(mid);
                   }
                }

                function randomColorSelection() {
                       var x = Math.floor(Math.random() * 256);
                       var y = Math.floor(Math.random() * 256);
                       var z = Math.floor(Math.random() * 256);
                       var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                       if (!hash[bgColor]) {
                          hash[bgColor] = 1;
                       } else {
                          bgColor = randomColorSelection();
                       }
                       return bgColor;
                }

                mid = setInterval(changeColor, ms);
      };

      var body = document.body;
      if (body) {
        bodyColor({ ms: 1000, elem: body, cycles: 10 });
      }
  })();
