const arr = [
    {
        id: 1,
        name: 'MERCEDES',
        secondName: 'Benz',
        price: 25000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfjZ-DWIqLw2OMeyH2A3P7Q1-l7dzgPDFhkOqtlpGMQrRrTEkQg'
    },
    {
        id: 2,
        name: 'BMW',
        secondName: '440i',
        price: 42000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QHko1SAWXwY9-LniKVIedWAump45j-QSPSYR9gvEMr9bmGtm'
    },
    {
        id: 3,
        name: 'WOLKSVAGEN',
        secondName: 'Arteon',
        price: 18000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuneAOaiqFgzrUCFUr7I0B29wnwQTUSismiXbrkdEUPhg8ooB'
    },
    {
        id: 4,
        name: 'MERCEDES',
        secondName: 'Benz',
        price: 21000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7qpRGSof5GAWTFCVPquw0rLJHp5mciXFsCAsErYDXnr88YtV'
    },
    {
        id: 5,
        name: 'WOLKSVAGEN',
        secondName: 'Tauareg',
        price: 10000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGg91lcC3nhMS28QQ4KhQq0Qz1u4tkBvhm5DuJW3k2xNCSWZs'
    },
    {
        id: 6,
        name: 'MERCEDES',
        secondName: 'Benz',
        price: 16000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhvu6AakEfbNEv9htAbtZuGmW56eRuuW6u5yoVjU1YR-9lfdA'
    },
    {
        id: 7,
        name: 'MERCEDES',
        secondName: 'Benz',
        price: 50000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHQVJk2CHqw2JfWnTrpu52FrC0TRDte403EIsTZ2fKLH-CJcI7A'
    },
    {
        id: 8,
        name: 'BMW',
        secondName: '507',
        price: 31000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23X4QpgnkUvhLxBm9jaLSdd8LMmKsSGyiR6d7W9T4T_OUu6HGRA'
    },
    {
        id: 9,
        name: 'CHEVROLET',
        secondName: 'Camaro',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWNGlje24OgcWQ77ckCWt3pMMk-cZI2g3rdObTM3qrER9KHwu'
    },
    {
        id: 10,
        name: 'BMW',
        secondName: 'GT 630',
        price: 39000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqBYXnpz4Bn0-Y7ahs1qLj4Fdp04iOHw6ZGEmU0qt1S05OfjZYw'
    },
    {
        id: 11,
        name: 'MERCEDES',
        secondName: 'Benz',
        price: 25000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtjRhNrrxW6Cs7LjMZYpdo5EKndx2VpOm61J0nagXrgrnSwnRYA'
    },
    {
        id: 12,
        name: 'PORSCHE',
        secondName: 'Panamera',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OjSGmwbmos8R89uwIASOTeMkRYIpWD4gUDTr-IDiwhLwpHmG'
    },
    {
        id: 13,
        name: 'MERCEDES',
        secondName: 'AMG GT',
        price: 19000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbW7ukZgQSBXYfO1aw2ZaNUJNfMxxxbblnlkkO3rSmP7VC3w6'
    },
    {
        id: 14,
        name: 'BMW',
        secondName: '420i',
        price: 38000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6JsT78SawzF730TJ-3wxJv1efKVwRtyox12O4bExTThTlhjp'
    },
    {
        id: 15,
        name: 'WOLKSVAGEN',
        secondName: 'Passat GT',
        price: 19000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8arL8aGo4tKPsbvEEDkvb5b5DqePnXNKdnBN8RoLkh9KtsoEeUw'
    },
    {
        id: 16,
        name: 'BMW',
        secondName: 'M4',
        price: 35000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQe298lB9MlPrZujljpsfAU9o5ixyQx6lSrVoDaUwgncWuLr4'
    },
    {
        id: 17,
        name: 'MERCEDES',
        secondName: 'ML63',
        price: 23000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbLNf1eNmjj1bXCDv7juM6t6twPZ-rZXIdbcvqoh2KPlDuL48'
    },
    {
        id: 18,
        name: 'WOLKSVAGEN',
        secondName: 'Passat',
        price: 27000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoWQPv1nvnIdYLp0s62Y1n0jiUQLNhfGOsZ_sWTSr2udk2kel1A'
    },
    {
        id: 19,
        name: 'WOLKSVAGEN',
        secondName: 'T Ptime',
        price: 27000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a29_fwgt3-XMr4tm-CnflR6tqrbfmkTJQ8XIikkOfgh2dm-hYA'
    },
    {
        id: 20,
        name: 'CHEVROLET',
        secondName: 'Camaro',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhl9pZd5MbIzD4ZPM9VbpViKgymu-6CcE7a64CskQySPBTe6eXg'
    },
    {
        id: 21,
        name: 'PORSCHE',
        secondName: 'Cayman',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIHGMERZl1fMKFGwQbo-EnkxHakyOIa3loc_FG0HBKMoYyPya'
    },
    {
        id: 22,
        name: 'PORSCHE',
        secondName: '912',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVFhsmm_OhOamhtrlRfm5v2ndB3a9qxxGIhnq2p6i4oJ4SGwZfw'
    },
    {
        id: 23,
        name: 'CHEVROLET',
        secondName: 'Corvette',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mNerjBgEXghSOemEFJCO6CsGBGMoNJ2W5AiX83GqiLWF5zO_eg'
    },
    {
        id: 24,
        name: 'PORSCHE',
        secondName: 'Cayenne',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1C-Ko4sMpYdEu20DW5KOQ1uhYTB3AuyHAlgF5RmixilukOnnL'
    },
    {
        id: 25,
        name: 'CHEVROLET',
        secondName: 'Corvette',
        price: 28000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVPbQ5w7IRK8pQXJnZoT7nB1znjqIjKPrqGEOXeY9JEBKWNtAwg'
    }
];

const initialState = arr.sort(function() {return 0.8 - Math.random()});
console.log(initialState);

export default function cars(state = initialState) {
    return state;
}