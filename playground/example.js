function Vue() {
  this.logText = function () {
    console.log("hello");
  };
}

var vm = new Vue();
vm.logText();
