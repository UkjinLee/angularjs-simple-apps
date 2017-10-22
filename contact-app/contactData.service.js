angular.module("contactApp")
    .service("ContactDataSvc", function () {

        // random user data from https://api.randomuser.me/
        this.contacts = [
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "marvin",
                    "last": "austin"
                },
                "location": {
                    "street": "4956 plum st",
                    "city": "melbourne",
                    "state": "northern territory",
                    "postcode": 5072
                },
                "email": "marvin.austin@example.com",
                "login": {
                    "username": "tinymouse313",
                    "password": "beaver",
                    "salt": "rOubIGfD",
                    "md5": "ce721643ee45a50dfab1a4758656a349",
                    "sha1": "df949720937c8ebdf4941a38699eafe4c043a3cb",
                    "sha256": "0e348107275e0b31e6bb1b712e1442c29007dc962e72e9d98764a29c754c8921"
                },
                "dob": "1950-11-19 20:48:45",
                "registered": "2008-02-28 06:54:32",
                "phone": "06-3825-6698",
                "cell": "0485-602-641",
                "id": 1,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/86.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
                },
                "nat": "AU"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "magdalena",
                    "last": "cruz"
                },
                "location": {
                    "street": "5925 calle del barquillo",
                    "city": "sevilla",
                    "state": "andalucía",
                    "postcode": 72720
                },
                "email": "magdalena.cruz@example.com",
                "login": {
                    "username": "ticklishmeercat395",
                    "password": "mnbv",
                    "salt": "yV9Z1oI1",
                    "md5": "c2a9b392a3f3fff022d89961c010bf6e",
                    "sha1": "7e7106c8e652dae535d9984a91f4b399ed2f2f05",
                    "sha256": "9b04b9a48e6551d4769bf56498101fb85ce5b42a733a57ae91cf3483c919ecad"
                },
                "dob": "1977-06-17 17:10:52",
                "registered": "2007-01-15 00:38:47",
                "phone": "992-953-560",
                "cell": "676-329-707",
                "id": 2,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/20.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
                },
                "nat": "ES"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "xavier",
                    "last": "thompson"
                },
                "location": {
                    "street": "5022 whakatu drive",
                    "city": "taupo",
                    "state": "waikato",
                    "postcode": 35022
                },
                "email": "xavier.thompson@example.com",
                "login": {
                    "username": "orangelion930",
                    "password": "fitness",
                    "salt": "GIZNwbey",
                    "md5": "c6c32ae4f7ab2cfb06739aeb4221d20d",
                    "sha1": "6a97040ac518b32589258f32dd42dc65f9173241",
                    "sha256": "3204e4a79bc6bdcd75544a015ff88ced7078a7bf0edd1346182b3b57c732731e"
                },
                "dob": "1977-01-02 11:55:19",
                "registered": "2008-03-28 12:11:36",
                "phone": "(255)-813-4055",
                "cell": "(795)-961-2252",
                "id": 3,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/7.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/7.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/7.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "ceciel",
                    "last": "sluiter"
                },
                "location": {
                    "street": "6281 kromme nieuwegracht",
                    "city": "bergen",
                    "state": "flevoland",
                    "postcode": 96904
                },
                "email": "ceciel.sluiter@example.com",
                "login": {
                    "username": "greentiger729",
                    "password": "romance",
                    "salt": "J8vgftsn",
                    "md5": "3a89634d12e6000dac20dc9aeef324b2",
                    "sha1": "7edff57dbe752a6fb381cbeebf70d1f9e93d144c",
                    "sha256": "858a15b6c66604288df278483eaa7243fd6216d7ed8dbc00470da13b729451fc"
                },
                "dob": "1973-12-18 10:56:44",
                "registered": "2004-02-08 15:08:48",
                "phone": "(856)-690-6832",
                "cell": "(517)-527-2345",
                "id": 4,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/66.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
                },
                "nat": "NL"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "eevi",
                    "last": "luoma"
                },
                "location": {
                    "street": "3174 tehtaankatu",
                    "city": "lavia",
                    "state": "finland proper",
                    "postcode": 36136
                },
                "email": "eevi.luoma@example.com",
                "login": {
                    "username": "yellowpeacock744",
                    "password": "lalala",
                    "salt": "q6AuU336",
                    "md5": "7930ca69d04543f642fa91089a83d0ae",
                    "sha1": "f10e06f3e98e7c696327c4f52acab1a0597ad55f",
                    "sha256": "f162714c18ac05bcb15b20986ae0bfd307f67da0f11b0765c2584fdc6b47c823"
                },
                "dob": "1992-11-21 06:59:21",
                "registered": "2007-01-13 19:30:37",
                "phone": "08-925-707",
                "cell": "048-291-56-15",
                "id": 5,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/52.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
                },
                "nat": "FI"
            },
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "evie",
                    "last": "cooper"
                },
                "location": {
                    "street": "9846 main street",
                    "city": "whanganui",
                    "state": "taranaki",
                    "postcode": 25180
                },
                "email": "evie.cooper@example.com",
                "login": {
                    "username": "organiclion721",
                    "password": "pizza",
                    "salt": "ZCn48AnG",
                    "md5": "c4284b45fc69e120a881cb75405aae3b",
                    "sha1": "7c7e54f63f03000963b24628fc8272ee2b2ba956",
                    "sha256": "30ea3e5257880cb517cf1900994cfd4c6ba8449323c9eee77eb95628c6dbbdeb"
                },
                "dob": "1976-02-04 13:32:27",
                "registered": "2011-08-02 04:04:55",
                "phone": "(383)-249-2127",
                "cell": "(405)-123-3826",
                "id": 6,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/89.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "florian",
                    "last": "fernandez"
                },
                "location": {
                    "street": "3010 avenue de la république",
                    "city": "montreuil",
                    "state": "haute-vienne",
                    "postcode": 37450
                },
                "email": "florian.fernandez@example.com",
                "login": {
                    "username": "ticklishgorilla403",
                    "password": "sailboat",
                    "salt": "UgZOFPiX",
                    "md5": "e17a4ff35852ba45e9c1641668b9301f",
                    "sha1": "abd11d5119cc0a71d4dd6bd3cb81c2132266fb64",
                    "sha256": "d4807c7e34a72c7435cd7b8dd53cc8ad7cff0e39ef41bece7db46513074fc2ef"
                },
                "dob": "1960-11-11 18:04:00",
                "registered": "2005-05-02 13:06:31",
                "phone": "05-09-46-80-89",
                "cell": "06-03-68-85-38",
                "id": 7,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/14.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
                },
                "nat": "FR"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "ellis",
                    "last": "spanjaard"
                },
                "location": {
                    "street": "8932 kanaalweg",
                    "city": "hardenberg",
                    "state": "zuid-holland",
                    "postcode": 51069
                },
                "email": "ellis.spanjaard@example.com",
                "login": {
                    "username": "greenelephant445",
                    "password": "flames",
                    "salt": "2AMwBUQN",
                    "md5": "f59b9362089c94f8a13c1fa36c6c80f4",
                    "sha1": "d9a3859650fccd5fda641373250b17981276883f",
                    "sha256": "09679f61ccb1ab4420338a09d04e6e2f0388a5a81670d49ae6def90f79ee9d20"
                },
                "dob": "1973-10-23 06:23:46",
                "registered": "2003-09-19 02:59:33",
                "phone": "(248)-424-6174",
                "cell": "(367)-703-9158",
                "id": 8,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/10.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
                },
                "nat": "NL"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "evan",
                    "last": "jimenez"
                },
                "location": {
                    "street": "4091 eason rd",
                    "city": "rockford",
                    "state": "south dakota",
                    "postcode": 78548
                },
                "email": "evan.jimenez@example.com",
                "login": {
                    "username": "smallgorilla628",
                    "password": "flex",
                    "salt": "feRyjS20",
                    "md5": "28cfb294ab0d4b2c6d1c46cce8b42128",
                    "sha1": "f879e60bed1b89c24a0619595907dacce34253d7",
                    "sha256": "df0dce22462cfa24228fabf9cae9cffced4924cf48069d7bfa9c9931bd1ab486"
                },
                "dob": "1957-08-30 02:10:05",
                "registered": "2008-09-26 22:25:55",
                "phone": "(803)-573-1323",
                "cell": "(194)-738-0059",
                "id": 9,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/9.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
                },
                "nat": "US"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "melanie",
                    "last": "roth"
                },
                "location": {
                    "street": "6648 neue straße",
                    "city": "ostvorpommern",
                    "state": "mecklenburg-vorpommern",
                    "postcode": 49741
                },
                "email": "melanie.roth@example.com",
                "login": {
                    "username": "goldenfish149",
                    "password": "martin1",
                    "salt": "P8MIgUf6",
                    "md5": "a64102a08b07cfe4a29eb96c6c530ede",
                    "sha1": "7c1a4e8becc36467556a9193cb12ef0ae335ebc1",
                    "sha256": "fd264e39392e50e793129ddc37efb46ac591479cd3ca92dcd8d71879fe311721"
                },
                "dob": "1988-05-14 00:36:48",
                "registered": "2014-03-04 10:39:01",
                "phone": "0506-0893332",
                "cell": "0172-7626586",
                "id": 10,
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/92.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
                },
                "nat": "DE"
            }
        ];
    });
