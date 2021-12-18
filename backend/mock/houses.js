const mockHouses = [
    {
        "url": "https://anapioficeandfire.com/api/houses/378",
        "name": "House Targaryen of King's Landing",
        "region": "The Crownlands",
        "coatOfArms": "Sable, a dragon thrice-headed gules",
        "words": "Fire and Blood",
        "titles": [
            "King of the Andals, the Rhoynar and the First Men",
            "Lord of the Seven Kingdoms",
            "Prince of Summerhall"
        ],
        "seats": [
            "Red Keep (formerly)",
            "Summerhall (formerly)"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/1303",
        "image": "houseTargaryen",
        "createdAt": "2021-12-15T16:41:48.329Z",
        "updatedAt": "2021-12-15T22:40:49.042Z",
        "swornMembers": [
            "https://anapioficeandfire.com/api/characters/33",
            "https://anapioficeandfire.com/api/characters/42",
            "https://anapioficeandfire.com/api/characters/43",
            "https://anapioficeandfire.com/api/characters/44",
            "https://anapioficeandfire.com/api/characters/45",
            "https://anapioficeandfire.com/api/characters/48",
            "https://anapioficeandfire.com/api/characters/49",
            "https://anapioficeandfire.com/api/characters/55",
            "https://anapioficeandfire.com/api/characters/58",
            "https://anapioficeandfire.com/api/characters/59",
            "https://anapioficeandfire.com/api/characters/76",
            "https://anapioficeandfire.com/api/characters/91",
            "https://anapioficeandfire.com/api/characters/93",
            "https://anapioficeandfire.com/api/characters/109",
            "https://anapioficeandfire.com/api/characters/110",
            "https://anapioficeandfire.com/api/characters/154",
            "https://anapioficeandfire.com/api/characters/155",
            "https://anapioficeandfire.com/api/characters/156",
            "https://anapioficeandfire.com/api/characters/157",
            "https://anapioficeandfire.com/api/characters/161",
            "https://anapioficeandfire.com/api/characters/168",
            "https://anapioficeandfire.com/api/characters/169",
            "https://anapioficeandfire.com/api/characters/195",
            "https://anapioficeandfire.com/api/characters/239",
            "https://anapioficeandfire.com/api/characters/265",
            "https://anapioficeandfire.com/api/characters/266",
            "https://anapioficeandfire.com/api/characters/269",
            "https://anapioficeandfire.com/api/characters/270",
            "https://anapioficeandfire.com/api/characters/271",
            "https://anapioficeandfire.com/api/characters/272",
            "https://anapioficeandfire.com/api/characters/275",
            "https://anapioficeandfire.com/api/characters/276",
            "https://anapioficeandfire.com/api/characters/330",
            "https://anapioficeandfire.com/api/characters/334",
            "https://anapioficeandfire.com/api/characters/361",
            "https://anapioficeandfire.com/api/characters/488",
            "https://anapioficeandfire.com/api/characters/546",
            "https://anapioficeandfire.com/api/characters/560",
            "https://anapioficeandfire.com/api/characters/576",
            "https://anapioficeandfire.com/api/characters/610",
            "https://anapioficeandfire.com/api/characters/611",
            "https://anapioficeandfire.com/api/characters/696",
            "https://anapioficeandfire.com/api/characters/709",
            "https://anapioficeandfire.com/api/characters/729",
            "https://anapioficeandfire.com/api/characters/759",
            "https://anapioficeandfire.com/api/characters/767",
            "https://anapioficeandfire.com/api/characters/779",
            "https://anapioficeandfire.com/api/characters/797",
            "https://anapioficeandfire.com/api/characters/865",
            "https://anapioficeandfire.com/api/characters/867",
            "https://anapioficeandfire.com/api/characters/868",
            "https://anapioficeandfire.com/api/characters/869",
            "https://anapioficeandfire.com/api/characters/870",
            "https://anapioficeandfire.com/api/characters/871",
            "https://anapioficeandfire.com/api/characters/872",
            "https://anapioficeandfire.com/api/characters/873",
            "https://anapioficeandfire.com/api/characters/874",
            "https://anapioficeandfire.com/api/characters/875",
            "https://anapioficeandfire.com/api/characters/876",
            "https://anapioficeandfire.com/api/characters/951",
            "https://anapioficeandfire.com/api/characters/971",
            "https://anapioficeandfire.com/api/characters/1067",
            "https://anapioficeandfire.com/api/characters/1070",
            "https://anapioficeandfire.com/api/characters/1079",
            "https://anapioficeandfire.com/api/characters/1114",
            "https://anapioficeandfire.com/api/characters/1142",
            "https://anapioficeandfire.com/api/characters/1205",
            "https://anapioficeandfire.com/api/characters/1242",
            "https://anapioficeandfire.com/api/characters/1302",
            "https://anapioficeandfire.com/api/characters/1303",
            "https://anapioficeandfire.com/api/characters/1340",
            "https://anapioficeandfire.com/api/characters/1358",
            "https://anapioficeandfire.com/api/characters/1445",
            "https://anapioficeandfire.com/api/characters/1450",
            "https://anapioficeandfire.com/api/characters/1469",
            "https://anapioficeandfire.com/api/characters/1520",
            "https://anapioficeandfire.com/api/characters/1523",
            "https://anapioficeandfire.com/api/characters/1527",
            "https://anapioficeandfire.com/api/characters/1528",
            "https://anapioficeandfire.com/api/characters/1548",
            "https://anapioficeandfire.com/api/characters/1549",
            "https://anapioficeandfire.com/api/characters/1560",
            "https://anapioficeandfire.com/api/characters/1589",
            "https://anapioficeandfire.com/api/characters/1608",
            "https://anapioficeandfire.com/api/characters/1709",
            "https://anapioficeandfire.com/api/characters/1739",
            "https://anapioficeandfire.com/api/characters/1826",
            "https://anapioficeandfire.com/api/characters/1856",
            "https://anapioficeandfire.com/api/characters/1867",
            "https://anapioficeandfire.com/api/characters/1872",
            "https://anapioficeandfire.com/api/characters/1873",
            "https://anapioficeandfire.com/api/characters/1874",
            "https://anapioficeandfire.com/api/characters/1897",
            "https://anapioficeandfire.com/api/characters/1944",
            "https://anapioficeandfire.com/api/characters/1948",
            "https://anapioficeandfire.com/api/characters/1978",
            "https://anapioficeandfire.com/api/characters/1981",
            "https://anapioficeandfire.com/api/characters/2071",
            "https://anapioficeandfire.com/api/characters/2086",
            "https://anapioficeandfire.com/api/characters/2124",
            "https://anapioficeandfire.com/api/characters/2128"
        ],
        "id": "61ba1acc4bebfc4eceaea979"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/362",
        "name": "House Stark of Winterfell",
        "region": "The North",
        "coatOfArms": "A running grey direwolf, on an ice-white field",
        "words": "Winter is Coming",
        "titles": [
            "King in the North",
            "Lord of Winterfell",
            "Warden of the North",
            "King of the Trident"
        ],
        "seats": [
            "Scattered (formerly Winterfell)"
        ],
        "currentLord": "",
        "image": "houseStark",
        "createdAt": "2021-12-15T16:43:26.974Z",
        "updatedAt": "2021-12-15T22:41:56.797Z",
        "swornMembers": [
            "https://www.anapioficeandfire.com/api/characters/2",
            "https://www.anapioficeandfire.com/api/characters/20",
            "https://www.anapioficeandfire.com/api/characters/97",
            "https://www.anapioficeandfire.com/api/characters/98",
            "https://www.anapioficeandfire.com/api/characters/136",
            "https://www.anapioficeandfire.com/api/characters/143",
            "https://www.anapioficeandfire.com/api/characters/148",
            "https://www.anapioficeandfire.com/api/characters/170",
            "https://www.anapioficeandfire.com/api/characters/181",
            "https://www.anapioficeandfire.com/api/characters/192",
            "https://www.anapioficeandfire.com/api/characters/206",
            "https://www.anapioficeandfire.com/api/characters/207",
            "https://www.anapioficeandfire.com/api/characters/208",
            "https://www.anapioficeandfire.com/api/characters/209",
            "https://www.anapioficeandfire.com/api/characters/210",
            "https://www.anapioficeandfire.com/api/characters/212",
            "https://www.anapioficeandfire.com/api/characters/216",
            "https://www.anapioficeandfire.com/api/characters/232",
            "https://www.anapioficeandfire.com/api/characters/259",
            "https://www.anapioficeandfire.com/api/characters/324",
            "https://www.anapioficeandfire.com/api/characters/339",
            "https://www.anapioficeandfire.com/api/characters/340",
            "https://www.anapioficeandfire.com/api/characters/349",
            "https://www.anapioficeandfire.com/api/characters/351",
            "https://www.anapioficeandfire.com/api/characters/354",
            "https://www.anapioficeandfire.com/api/characters/389",
            "https://www.anapioficeandfire.com/api/characters/461",
            "https://www.anapioficeandfire.com/api/characters/561",
            "https://www.anapioficeandfire.com/api/characters/583",
            "https://www.anapioficeandfire.com/api/characters/584",
            "https://www.anapioficeandfire.com/api/characters/589",
            "https://www.anapioficeandfire.com/api/characters/591",
            "https://www.anapioficeandfire.com/api/characters/593",
            "https://www.anapioficeandfire.com/api/characters/603",
            "https://www.anapioficeandfire.com/api/characters/648",
            "https://www.anapioficeandfire.com/api/characters/668",
            "https://www.anapioficeandfire.com/api/characters/716",
            "https://www.anapioficeandfire.com/api/characters/737",
            "https://www.anapioficeandfire.com/api/characters/777",
            "https://www.anapioficeandfire.com/api/characters/887",
            "https://www.anapioficeandfire.com/api/characters/891",
            "https://www.anapioficeandfire.com/api/characters/911",
            "https://www.anapioficeandfire.com/api/characters/912",
            "https://www.anapioficeandfire.com/api/characters/916",
            "https://www.anapioficeandfire.com/api/characters/917",
            "https://www.anapioficeandfire.com/api/characters/918",
            "https://www.anapioficeandfire.com/api/characters/957",
            "https://www.anapioficeandfire.com/api/characters/1101",
            "https://www.anapioficeandfire.com/api/characters/1111",
            "https://www.anapioficeandfire.com/api/characters/1148",
            "https://www.anapioficeandfire.com/api/characters/1158",
            "https://www.anapioficeandfire.com/api/characters/1175",
            "https://www.anapioficeandfire.com/api/characters/1185",
            "https://www.anapioficeandfire.com/api/characters/1190",
            "https://www.anapioficeandfire.com/api/characters/1254",
            "https://www.anapioficeandfire.com/api/characters/1260",
            "https://www.anapioficeandfire.com/api/characters/1326",
            "https://www.anapioficeandfire.com/api/characters/1336",
            "https://www.anapioficeandfire.com/api/characters/1383",
            "https://www.anapioficeandfire.com/api/characters/1396",
            "https://www.anapioficeandfire.com/api/characters/1407",
            "https://www.anapioficeandfire.com/api/characters/1488",
            "https://www.anapioficeandfire.com/api/characters/1489",
            "https://www.anapioficeandfire.com/api/characters/1499",
            "https://www.anapioficeandfire.com/api/characters/1515",
            "https://www.anapioficeandfire.com/api/characters/1526",
            "https://www.anapioficeandfire.com/api/characters/1565",
            "https://www.anapioficeandfire.com/api/characters/1602",
            "https://www.anapioficeandfire.com/api/characters/1620",
            "https://www.anapioficeandfire.com/api/characters/1649",
            "https://www.anapioficeandfire.com/api/characters/1650",
            "https://www.anapioficeandfire.com/api/characters/1706",
            "https://www.anapioficeandfire.com/api/characters/1737",
            "https://www.anapioficeandfire.com/api/characters/1749",
            "https://www.anapioficeandfire.com/api/characters/1787",
            "https://www.anapioficeandfire.com/api/characters/1796",
            "https://www.anapioficeandfire.com/api/characters/1816",
            "https://www.anapioficeandfire.com/api/characters/1819",
            "https://www.anapioficeandfire.com/api/characters/1843",
            "https://www.anapioficeandfire.com/api/characters/1946",
            "https://www.anapioficeandfire.com/api/characters/1950",
            "https://www.anapioficeandfire.com/api/characters/1979",
            "https://www.anapioficeandfire.com/api/characters/2019",
            "https://www.anapioficeandfire.com/api/characters/2020",
            "https://www.anapioficeandfire.com/api/characters/2037",
            "https://www.anapioficeandfire.com/api/characters/2068",
            "https://www.anapioficeandfire.com/api/characters/2089",
            "https://www.anapioficeandfire.com/api/characters/2119"
        ],
        "id": "61ba1b2e4bebfc4eceaea97c"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/15",
        "name": "House Baratheon of Dragonstone",
        "region": "The Crownlands",
        "coatOfArms": "Or, a heart gules enflamed proper charged with a stag's head sable crowned of the field",
        "words": "",
        "titles": [
            "Lord of Dragonstone",
            "King of Westeros"
        ],
        "seats": [
            "Dragonstone"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/1963",
        "image": "houseBaratheon",
        "createdAt": "2021-12-15T16:48:34.829Z",
        "updatedAt": "2021-12-15T22:42:35.672Z",
        "swornMembers": [
            "https://anapioficeandfire.com/api/characters/3",
            "https://anapioficeandfire.com/api/characters/7",
            "https://anapioficeandfire.com/api/characters/220",
            "https://anapioficeandfire.com/api/characters/243",
            "https://anapioficeandfire.com/api/characters/308",
            "https://anapioficeandfire.com/api/characters/369",
            "https://anapioficeandfire.com/api/characters/430",
            "https://anapioficeandfire.com/api/characters/601",
            "https://anapioficeandfire.com/api/characters/795",
            "https://anapioficeandfire.com/api/characters/881",
            "https://anapioficeandfire.com/api/characters/908",
            "https://anapioficeandfire.com/api/characters/925",
            "https://anapioficeandfire.com/api/characters/975",
            "https://anapioficeandfire.com/api/characters/1285",
            "https://anapioficeandfire.com/api/characters/1312",
            "https://anapioficeandfire.com/api/characters/1319",
            "https://anapioficeandfire.com/api/characters/1325",
            "https://anapioficeandfire.com/api/characters/1467",
            "https://anapioficeandfire.com/api/characters/1516",
            "https://anapioficeandfire.com/api/characters/1535",
            "https://anapioficeandfire.com/api/characters/1623",
            "https://anapioficeandfire.com/api/characters/1680",
            "https://anapioficeandfire.com/api/characters/1777",
            "https://anapioficeandfire.com/api/characters/1797",
            "https://anapioficeandfire.com/api/characters/1925",
            "https://anapioficeandfire.com/api/characters/1935",
            "https://anapioficeandfire.com/api/characters/2100"
        ],
        "id": "61ba1c624bebfc4eceaea97e"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/169",
        "name": "House Greyjoy of Pyke",
        "region": "Iron Islands",
        "coatOfArms": "Sable, a kraken Or",
        "words": "We Do Not Sow",
        "titles": [
            "King of Salt and Rock",
            "Son of the Sea Wind",
            "Lord Reaper of Pyke"
        ],
        "seats": [
            "Pyke"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/385",
        "image": "houseGreyjoy",
        "createdAt": "2021-12-15T16:50:31.004Z",
        "updatedAt": "2021-12-15T22:43:59.838Z",
        "swornMembers": [
            "https://www.anapioficeandfire.com/api/characters/60",
            "https://www.anapioficeandfire.com/api/characters/66",
            "https://www.anapioficeandfire.com/api/characters/150",
            "https://www.anapioficeandfire.com/api/characters/278",
            "https://www.anapioficeandfire.com/api/characters/316",
            "https://www.anapioficeandfire.com/api/characters/469",
            "https://www.anapioficeandfire.com/api/characters/718",
            "https://www.anapioficeandfire.com/api/characters/836",
            "https://www.anapioficeandfire.com/api/characters/839",
            "https://www.anapioficeandfire.com/api/characters/904",
            "https://www.anapioficeandfire.com/api/characters/913",
            "https://www.anapioficeandfire.com/api/characters/1022",
            "https://www.anapioficeandfire.com/api/characters/1062",
            "https://www.anapioficeandfire.com/api/characters/1072",
            "https://www.anapioficeandfire.com/api/characters/1074",
            "https://www.anapioficeandfire.com/api/characters/1141",
            "https://www.anapioficeandfire.com/api/characters/1226",
            "https://www.anapioficeandfire.com/api/characters/1250",
            "https://www.anapioficeandfire.com/api/characters/1292",
            "https://www.anapioficeandfire.com/api/characters/1306",
            "https://www.anapioficeandfire.com/api/characters/1345",
            "https://www.anapioficeandfire.com/api/characters/1372",
            "https://www.anapioficeandfire.com/api/characters/1416",
            "https://www.anapioficeandfire.com/api/characters/1461",
            "https://www.anapioficeandfire.com/api/characters/1495",
            "https://www.anapioficeandfire.com/api/characters/1595",
            "https://www.anapioficeandfire.com/api/characters/1765",
            "https://www.anapioficeandfire.com/api/characters/1829",
            "https://www.anapioficeandfire.com/api/characters/1853",
            "https://www.anapioficeandfire.com/api/characters/1893",
            "https://www.anapioficeandfire.com/api/characters/1919",
            "https://www.anapioficeandfire.com/api/characters/1947",
            "https://www.anapioficeandfire.com/api/characters/1960",
            "https://www.anapioficeandfire.com/api/characters/1971",
            "https://www.anapioficeandfire.com/api/characters/1974",
            "https://www.anapioficeandfire.com/api/characters/2042",
            "https://www.anapioficeandfire.com/api/characters/2046",
            "https://www.anapioficeandfire.com/api/characters/2049",
            "https://www.anapioficeandfire.com/api/characters/2061",
            "https://www.anapioficeandfire.com/api/characters/2093",
            "https://www.anapioficeandfire.com/api/characters/2096",
            "https://www.anapioficeandfire.com/api/characters/2117"
        ],
        "id": "61ba1cd74bebfc4eceaea980"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/229",
        "name": "House Lannister of Casterly Rock",
        "region": "The Westerlands",
        "coatOfArms": "A gold lion, on a crimson field(Gules, a lion or)",
        "words": "Hear Me Roar!",
        "titles": [
            "King of the Rock (formerly) Lord of Casterly Rock",
            "Shield of Lannisport",
            "Warden of the West"
        ],
        "seats": [
            "Casterly Rock"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/238",
        "image": "houseLannister",
        "createdAt": "2021-12-15T16:51:30.196Z",
        "updatedAt": "2021-12-15T22:44:58.535Z",
        "swornMembers": [
            "https://www.anapioficeandfire.com/api/characters/27",
            "https://www.anapioficeandfire.com/api/characters/101",
            "https://www.anapioficeandfire.com/api/characters/115",
            "https://www.anapioficeandfire.com/api/characters/177",
            "https://www.anapioficeandfire.com/api/characters/235",
            "https://www.anapioficeandfire.com/api/characters/236",
            "https://www.anapioficeandfire.com/api/characters/238",
            "https://www.anapioficeandfire.com/api/characters/282",
            "https://www.anapioficeandfire.com/api/characters/283",
            "https://www.anapioficeandfire.com/api/characters/284",
            "https://www.anapioficeandfire.com/api/characters/292",
            "https://www.anapioficeandfire.com/api/characters/294",
            "https://www.anapioficeandfire.com/api/characters/363",
            "https://www.anapioficeandfire.com/api/characters/367",
            "https://www.anapioficeandfire.com/api/characters/377",
            "https://www.anapioficeandfire.com/api/characters/382",
            "https://www.anapioficeandfire.com/api/characters/415",
            "https://www.anapioficeandfire.com/api/characters/418",
            "https://www.anapioficeandfire.com/api/characters/422",
            "https://www.anapioficeandfire.com/api/characters/529",
            "https://www.anapioficeandfire.com/api/characters/531",
            "https://www.anapioficeandfire.com/api/characters/538",
            "https://www.anapioficeandfire.com/api/characters/556",
            "https://www.anapioficeandfire.com/api/characters/562",
            "https://www.anapioficeandfire.com/api/characters/568",
            "https://www.anapioficeandfire.com/api/characters/605",
            "https://www.anapioficeandfire.com/api/characters/613",
            "https://www.anapioficeandfire.com/api/characters/615",
            "https://www.anapioficeandfire.com/api/characters/616",
            "https://www.anapioficeandfire.com/api/characters/662",
            "https://www.anapioficeandfire.com/api/characters/708",
            "https://www.anapioficeandfire.com/api/characters/725",
            "https://www.anapioficeandfire.com/api/characters/773",
            "https://www.anapioficeandfire.com/api/characters/778",
            "https://www.anapioficeandfire.com/api/characters/955",
            "https://www.anapioficeandfire.com/api/characters/973",
            "https://www.anapioficeandfire.com/api/characters/984",
            "https://www.anapioficeandfire.com/api/characters/1025",
            "https://www.anapioficeandfire.com/api/characters/1026",
            "https://www.anapioficeandfire.com/api/characters/1044",
            "https://www.anapioficeandfire.com/api/characters/1048",
            "https://www.anapioficeandfire.com/api/characters/1049",
            "https://www.anapioficeandfire.com/api/characters/1050",
            "https://www.anapioficeandfire.com/api/characters/1051",
            "https://www.anapioficeandfire.com/api/characters/1052",
            "https://www.anapioficeandfire.com/api/characters/1057",
            "https://www.anapioficeandfire.com/api/characters/1116",
            "https://www.anapioficeandfire.com/api/characters/1207",
            "https://www.anapioficeandfire.com/api/characters/1233",
            "https://www.anapioficeandfire.com/api/characters/1251",
            "https://www.anapioficeandfire.com/api/characters/1272",
            "https://www.anapioficeandfire.com/api/characters/1275",
            "https://www.anapioficeandfire.com/api/characters/1309",
            "https://www.anapioficeandfire.com/api/characters/1338",
            "https://www.anapioficeandfire.com/api/characters/1349",
            "https://www.anapioficeandfire.com/api/characters/1430",
            "https://www.anapioficeandfire.com/api/characters/1442",
            "https://www.anapioficeandfire.com/api/characters/1483",
            "https://www.anapioficeandfire.com/api/characters/1504",
            "https://www.anapioficeandfire.com/api/characters/1550",
            "https://www.anapioficeandfire.com/api/characters/1570",
            "https://www.anapioficeandfire.com/api/characters/1573",
            "https://www.anapioficeandfire.com/api/characters/1619",
            "https://www.anapioficeandfire.com/api/characters/1647",
            "https://www.anapioficeandfire.com/api/characters/1652",
            "https://www.anapioficeandfire.com/api/characters/1665",
            "https://www.anapioficeandfire.com/api/characters/1724",
            "https://www.anapioficeandfire.com/api/characters/1822",
            "https://www.anapioficeandfire.com/api/characters/1826",
            "https://www.anapioficeandfire.com/api/characters/1848",
            "https://www.anapioficeandfire.com/api/characters/1891",
            "https://www.anapioficeandfire.com/api/characters/1892",
            "https://www.anapioficeandfire.com/api/characters/1936",
            "https://www.anapioficeandfire.com/api/characters/1945",
            "https://www.anapioficeandfire.com/api/characters/1989",
            "https://www.anapioficeandfire.com/api/characters/2029",
            "https://www.anapioficeandfire.com/api/characters/2072",
            "https://www.anapioficeandfire.com/api/characters/2085",
            "https://www.anapioficeandfire.com/api/characters/2091"
        ],
        "id": "61ba1d124bebfc4eceaea982"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/285",
        "name": "House Nymeros Martell of Sunspear",
        "region": "Dorne",
        "coatOfArms": "Tenny, a sun in splendour gules transfixed by a spear bendwise Or",
        "words": "Unbowed, Unbent, Unbroken",
        "titles": [
            "Lord of the Sandship",
            "Lord of Sunspear",
            "Prince of Dorne"
        ],
        "seats": [
            "Old Palace within Sunspear"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/326",
        "image": "houseMartell",
        "createdAt": "2021-12-15T16:52:10.998Z",
        "updatedAt": "2021-12-15T22:45:54.515Z",
        "swornMembers": [
            "https://anapioficeandfire.com/api/characters/130",
            "https://anapioficeandfire.com/api/characters/271",
            "https://anapioficeandfire.com/api/characters/326",
            "https://anapioficeandfire.com/api/characters/361",
            "https://anapioficeandfire.com/api/characters/364",
            "https://anapioficeandfire.com/api/characters/631",
            "https://anapioficeandfire.com/api/characters/705",
            "https://anapioficeandfire.com/api/characters/709",
            "https://anapioficeandfire.com/api/characters/719",
            "https://anapioficeandfire.com/api/characters/763",
            "https://anapioficeandfire.com/api/characters/782",
            "https://anapioficeandfire.com/api/characters/844",
            "https://anapioficeandfire.com/api/characters/1043",
            "https://anapioficeandfire.com/api/characters/1166",
            "https://anapioficeandfire.com/api/characters/1197",
            "https://anapioficeandfire.com/api/characters/1230",
            "https://anapioficeandfire.com/api/characters/1253",
            "https://anapioficeandfire.com/api/characters/1261",
            "https://anapioficeandfire.com/api/characters/1339",
            "https://anapioficeandfire.com/api/characters/1362",
            "https://anapioficeandfire.com/api/characters/1414",
            "https://anapioficeandfire.com/api/characters/1632",
            "https://anapioficeandfire.com/api/characters/1697",
            "https://anapioficeandfire.com/api/characters/1698",
            "https://anapioficeandfire.com/api/characters/1718",
            "https://anapioficeandfire.com/api/characters/1723",
            "https://anapioficeandfire.com/api/characters/1725",
            "https://anapioficeandfire.com/api/characters/1743",
            "https://anapioficeandfire.com/api/characters/1766",
            "https://anapioficeandfire.com/api/characters/1768",
            "https://anapioficeandfire.com/api/characters/1769",
            "https://anapioficeandfire.com/api/characters/1770",
            "https://anapioficeandfire.com/api/characters/1876",
            "https://anapioficeandfire.com/api/characters/1930",
            "https://anapioficeandfire.com/api/characters/2011",
            "https://anapioficeandfire.com/api/characters/2041"
        ],
        "id": "61ba1d3a4bebfc4eceaea984"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/395",
        "name": "House Tully of Riverrun",
        "region": "The Riverlands",
        "coatOfArms": "A leaping silver trout on a field of blue and mud red(Paly wavy azure and gules, a trout embowed argent)",
        "words": "Family, Duty, Honor",
        "titles": [
            "Lord of Riverrun",
            "Lord Paramount of the Trident"
        ],
        "seats": [
            "Scattered (formerly Riverrun)"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/346",
        "image": "houseTully",
        "createdAt": "2021-12-15T16:52:57.539Z",
        "updatedAt": "2021-12-15T22:46:26.978Z",
        "swornMembers": [
            "https://www.anapioficeandfire.com/api/characters/223",
            "https://www.anapioficeandfire.com/api/characters/232",
            "https://www.anapioficeandfire.com/api/characters/346",
            "https://www.anapioficeandfire.com/api/characters/347",
            "https://www.anapioficeandfire.com/api/characters/503",
            "https://www.anapioficeandfire.com/api/characters/688",
            "https://www.anapioficeandfire.com/api/characters/733",
            "https://www.anapioficeandfire.com/api/characters/755",
            "https://www.anapioficeandfire.com/api/characters/909",
            "https://www.anapioficeandfire.com/api/characters/937",
            "https://www.anapioficeandfire.com/api/characters/1063",
            "https://www.anapioficeandfire.com/api/characters/1321",
            "https://www.anapioficeandfire.com/api/characters/1364",
            "https://www.anapioficeandfire.com/api/characters/1371",
            "https://www.anapioficeandfire.com/api/characters/1621",
            "https://www.anapioficeandfire.com/api/characters/1744",
            "https://www.anapioficeandfire.com/api/characters/1818"
        ],
        "id": "61ba1d694bebfc4eceaea986"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/397",
        "name": "House Tyrell of Brightwater Keep",
        "region": "The Reach",
        "coatOfArms": "",
        "words": "",
        "titles": [
            "Lord of Brightwater Keep"
        ],
        "seats": [
            "Brightwater Keep (disputed by House Florent)"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/401",
        "image": "houseTyrell",
        "createdAt": "2021-12-15T16:53:49.511Z",
        "updatedAt": "2021-12-15T22:47:17.539Z",
        "swornMembers": [
            "https://anapioficeandfire.com/api/characters/401",
            "https://anapioficeandfire.com/api/characters/1618"
        ],
        "id": "61ba1d9d4bebfc4eceaea988"
    },
    {
        "url": "https://anapioficeandfire.com/api/houses/7",
        "name": "House Arryn of the Eyrie",
        "region": "The Vale",
        "coatOfArms": "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
        "words": "As High as Honor",
        "titles": [
            "King of Mountain and Vale (formerly)",
            "Lord of the Eyrie",
            "Defender of the Vale",
            "Warden of the East"
        ],
        "seats": [
            "The Eyrie (summer)",
            "Gates of the Moon (winter)"
        ],
        "currentLord": "https://anapioficeandfire.com/api/characters/894",
        "image": "houseArryn",
        "swornMembers": [
            "https://anapioficeandfire.com/api/characters/49",
            "https://anapioficeandfire.com/api/characters/92",
            "https://anapioficeandfire.com/api/characters/93",
            "https://anapioficeandfire.com/api/characters/107",
            "https://anapioficeandfire.com/api/characters/223",
            "https://anapioficeandfire.com/api/characters/265",
            "https://anapioficeandfire.com/api/characters/300",
            "https://anapioficeandfire.com/api/characters/356",
            "https://anapioficeandfire.com/api/characters/477",
            "https://anapioficeandfire.com/api/characters/508",
            "https://anapioficeandfire.com/api/characters/540",
            "https://anapioficeandfire.com/api/characters/548",
            "https://anapioficeandfire.com/api/characters/558",
            "https://anapioficeandfire.com/api/characters/572",
            "https://anapioficeandfire.com/api/characters/688",
            "https://anapioficeandfire.com/api/characters/894",
            "https://anapioficeandfire.com/api/characters/1068",
            "https://anapioficeandfire.com/api/characters/1193",
            "https://anapioficeandfire.com/api/characters/1280",
            "https://anapioficeandfire.com/api/characters/1443",
            "https://anapioficeandfire.com/api/characters/1655",
            "https://anapioficeandfire.com/api/characters/1693",
            "https://anapioficeandfire.com/api/characters/1715",
            "https://anapioficeandfire.com/api/characters/1884"
        ],
        "createdAt": "2021-12-17T09:07:06.641Z",
        "updatedAt": "2021-12-17T09:07:06.641Z",
        "id": "61bc533acb48a70e8c4387ea"
    }
];

module.exports = mockHouses;
