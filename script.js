(function () {
    'use strict';

    angular.module('ProductApp', [])
        .controller('Controller1', Controller1)
        .controller('Controller2', Controller2)
        .service('Serv', Serv);

    Controller1.$inject = ['Serv'];

    function Controller1(Serv) {
        const list = this;
        list.BuyList = Serv.getBuyList();

        list.addToBoughtList = function (index) {
            Serv.addToBoughtList(index);
        }

    }

    Controller2.$inject = ['Serv'];

    function Controller2(Serv) {
        const list2 = this;

        list2.boughtList = Serv.getBoughtList();

    }

    function Serv() {
        const service = this;

        let BuyList = [
            {
                mark: "Йогурт №1",
                quantity: "3"
            },
            {
                mark: "Йогурт №2",
                quantity: "8"
            },
            {
                mark: "Йогурт №3",
                quantity: "4"
            },
            {
                mark: "Йогурт №4",
                quantity: "3"
            },
            {
                mark: "Йогурт №5",
                quantity: "2"
            },
            {
                mark: "Йогурт №6",
                quantity: "9"
            },
            {
                mark: "Йогурт №7",
                quantity: "7"
            }
        ];

        let boughtList = [];

        service.addToBoughtList = function (BuyListIndex) {
            boughtList.push(BuyList[BuyListIndex]);
            BuyList.splice(BuyListIndex, 1);
        };
        service.getBuyList = function () {
            return BuyList;
        };
        service.getBoughtList = function () {
            return boughtList;
        };

    }
})();
