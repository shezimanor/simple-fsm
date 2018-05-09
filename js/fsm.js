var Light = function() {
    this.currState = FSM.off;
    this.btn = null;
    this.lightId = 'myLight';
};

Light.prototype.init = function() {
    var btn = document.createElement('button'),
        self = this;

    button.innerHTML = 'OFF';
    this.btn = document.body.appendChild(btn);

    this.btn.onclick = function() {
        self.currState.btnBePress.call(self); // 把請求委託給FSM狀態機
    };
};

var FSM = {
    off: {
        btnBePress: function() {
            console.log('ON');
            document.getElementById(this.lightId).className = 'light-style light-on';
            this.btn.innerHTML = 'ON';
            this.currState = FSM.on;
        }
    },

    on: {
        btnBePress: function() {
            console.log('OFF');
            document.getElementById(this.lightId).className = 'light-style light-off';
            this.btn.innerHTML = 'OFF';
            this.currState = FSM.off;
        }
    },
};

var light = new Light();
light.init();