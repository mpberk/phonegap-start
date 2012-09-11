var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function{
        document.getElementById("ForceGPScoorduse").disabled = false;
        document.getElementById("AccelEnable").disabled = false;
        document.getElementById("GyroEnable").disabled = false;
        document.getElementById("CompassEnable").disabled = false;
        document.getElementById("GPSEnable").disabled = false;
    }
};
