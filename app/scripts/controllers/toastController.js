angular.module('myApp')
    .controller('ToastController', ToastController );
    
    function ToastController($timeout) {
        var vm = this;
        vm.show = false;
        vm.message = 'NA';
        
        vm.showToast = function (message) {
            vm.show = !vm.show;
            vm.message = message;
            $timeout(function() {
                vm.show = false;
            }, 1500);
        };
    };
    
    ToastController.$inject = ['$timeout'];