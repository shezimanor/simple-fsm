var Light = function() {
    this.currState = FSM.off;
    this.button = null;
    this.lightId = 'myLight';
};

Light.prototype.init = function() {
    var button = document.createElement('button'),
        self = this;

    button.innerHTML = 'OFF';
    this.button = document.body.appendChild(button);

    this.button.onclick = function() {
        self.currState.buttonWasPressed.call(self); // 把請求委託給FSM狀態機
    };
};

var FSM = {
    off: {
        buttonWasPressed: function() {
            // console.log('ON');
            document.getElementById(this.lightId).className = 'light-style light-on';
            this.button.innerHTML = 'ON';
            this.currState = FSM.on;
        }
    },

    on: {
        buttonWasPressed: function() {
            // console.log('OFF');
            document.getElementById(this.lightId).className = 'light-style light-off';
            this.button.innerHTML = 'OFF';
            this.currState = FSM.off;
        }
    },
};

var light = new Light();
light.init();