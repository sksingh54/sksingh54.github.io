'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6109da6a0249c60ec4f4b479097acae",
".git/config": "a92ace76573da0af2404d14cfec07bc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "55c28fde4525f85fb34c2d238f2f6c10",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "77fe5bd61b44f0e32fc026fb1b33daa8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "220f146bf33338ed2d82bd18c63c57c6",
".git/logs/refs/heads/main": "220f146bf33338ed2d82bd18c63c57c6",
".git/logs/refs/remotes/origin/HEAD": "338d2b8fc59bfd964c5f9cc960742216",
".git/logs/refs/remotes/origin/main": "99182e4373e791c4cc9f95999bc38a86",
".git/objects/00/1f3a6ec059ab22519aced591a060c8a5a3cb3e": "866f5c0b746fb66ac2a5624ebaa4a375",
".git/objects/00/5e31c92697dc61ea786d701e6218933fffd635": "e0de50166ba692fc3d7d39fea3698e5f",
".git/objects/01/ea949128635807b6b72e34825bbc4239b811f2": "edab77ff522333e3f991ae57f6247038",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/0a/b9688452fda172992bb75f10bc9537f7a5263c": "8371daeb9862235c78c8d0749eecff2c",
".git/objects/0b/248855158b788100e271fceccc8014b3b6bf5b": "15532a796a4f715c32f926a5556067bd",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0f/a0ec07790606308946697c3bd14ca9d769bd1c": "f38eae90a5fd7c54f2502ec00ed5a986",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/12/870a3d160c370cf7d96e94a4bfe93f94d563fd": "7f2d7d89d282314456f265c05c482593",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/1026b91bc928ad167b6168bf5aabdb4be8ce90": "1e86af25eb532d403b2c1f8a75ea4712",
".git/objects/17/3c2a96e2cf4cd6aadf0b299e74f4d7e780c836": "6722c5fb5e649679b4c23f07d2ae0036",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/19/4ff99629929be013b928ce3391ca1dde5a6ebb": "aa134e62bec1c2a59fca1b5f800cd969",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/24/7f5694ce6ce339f35bb58a657960ba9b26a6bc": "26ea2621da751d7b92d3f1984d54851b",
".git/objects/24/dcf4d1eaf148686eed2249a9e477273f1787d9": "5682207b28b35fd2280606f28ab9d3ea",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/2a/b568917279b3219d463067358c6174cdc184a6": "c7ccf44710bc79930970460eff63dc9f",
".git/objects/2b/14b8688e910be3aaf162243d5f2c208a6f8291": "723b1caaf38fd473dd8a0bcaa49bee94",
".git/objects/2c/64349cbcacc71120a62b5eff3c0e906426bb13": "9fac20876369059514e1d921e1f42d7c",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2f/dc4ae38e09630e57565805c16a94e70c028b8b": "5a02cc563f085c563751d22fc3bdfd2e",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/0de81db2cf6ba04d10f798cf87767b297290cf": "c5a3ce2f789fa213e7fc2dafca19c917",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/3c/35b5de8612090478d038dae94675af4f07c2c4": "8636f005f630eb9c27b4d43d5aba5e7d",
".git/objects/3c/377e484b179983f5e40e34915891b0d00ce7c2": "72d6322b30485bdb8887b499465609d4",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/41/74d98aa15770a05bf4c68011b21af871d65620": "c62dfea828a35f15de729e2646e6ff6c",
".git/objects/41/ce5e807e9677d9c926c19ac92cf3e81e12a6e1": "30a2efed2dbe54fd6163f0b5c98da29b",
".git/objects/44/61a00f4da1e2ea0ad860d5852da3d2c809ab6d": "20125d07372f0bc63bf0fe73221958b0",
".git/objects/44/63b0e9624da39eacf92d20e7bc7c087c64f03a": "51d879ece7fa7be5ad7faba5a87c6cea",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/45/303f9958e638faf87374486d0e96b89023351d": "7aaa290d8b5e7f86e33d4bffbaf2bf32",
".git/objects/46/26b9cca043607ada5156ecb39bf5f7935739ce": "ba2d195dc2760c345bc84a17e7d4fe30",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/46/e92a1c17a62e92463c8d77399757ef30c74cf7": "bc95e7337b1738124c30e4f3647eb196",
".git/objects/4a/cf63e212ab2d21bc2127fc8d1f6d6e6b05286b": "d934ad83cfb186e151bf15999a6caad4",
".git/objects/4b/ceadc07b8bddd783493aaf9019a3f4517486c8": "a0d7940ac692390db05620cb6febd782",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/51/844381922f3a87eb93d27f441b9e6259c92f3f": "77fdc4edd375afa9e24a26eb694ecd3b",
".git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
".git/objects/56/0cfdcdf356336ef19ca03a0bad03ce4d372057": "57bc731fc0259be8e9798f9250515fcc",
".git/objects/56/bfc2c4d6be0e426d957ef6df37b2b4ca09b58c": "1370f0b39f45c23c28f5f0682dc47990",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5e/77497d45f1066a49214b9cef3bfef3756f702f": "3845c8b0ddb2c069e742aa01f00be8e1",
".git/objects/63/43431ba493e1723dc4aeca380819033323f065": "20513d47227a0d9f4364e3f3c57e329b",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/ab600ccb5a72adbbd3fa088a731d23775eab63": "8f812575a8d5cd768782e2ea0c72c8e8",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/e611d5af14f5964367ffe57de82ab1b68adf4a": "6450dd48e66d4deea2bc4ca0179e88b2",
".git/objects/71/2d993aaacc22cf7dc018a94244cf5fefb0b008": "786ff10bb0e666d204626f8acbd45574",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/77/d0d8d003853cac473069ee39b29c73abd80a14": "45eafb7a1041161d48a9f06b23e89404",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/39c65162e6f0a9182d31edd1d1c993d1bbff17": "38b8e9368e713fe0f21250345c29382d",
".git/objects/7c/b00c03f6f3d1d4215d5afedd4bb629e4f4ed40": "d365b3e98eed212589f762a5a5d973f7",
".git/objects/7f/e1f1868e8f89f406c0707ec7d46393ea1fb850": "2e94d3b8c89f850c1fd93cbfc9ed8f44",
".git/objects/7f/fced4eebeca25784332cb9b6eb544e521610fc": "b79a334e9dc1cb2f1961e3a7cea7346d",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/81/831a0986f9b533de22fc9af2ef02fdcae864a6": "3cef1e5fb44bb6e92a2c325f35896eeb",
".git/objects/84/09d80451d5d7ba17ccc1ad15d86201dc273d45": "6695d4401c2f41f8b4169d368e7621e2",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/86/ab07529b7577d2dce7315ea9cd43655b38b3a3": "b508e00168e2b4fa77711089d587c04d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8985b4e1d73059a02a87f561ac3741039aa9ea": "eafbefd2248229991550b91d67a21049",
".git/objects/8d/6cd3eed3cd2cfdbc013dd3b4ca2049d92d6a94": "e1846b8f546b5b6470ca6e066cb6e892",
".git/objects/90/10eaa24109b9b6b6b353c9302db1b952623f8e": "90b489212d10df75e89d705532fb1943",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/93/3c557b1dc72a9dcc6449327c9ffaa693589983": "a1ff0d5c948cdcf59bf3c5c3d69b2e97",
".git/objects/93/67d483e44e14a7b58321035967961ed024d732": "ec5e9adea8ee35ee79c9613b26a34286",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/97/b182c34678d37eecb1d71df08f4bdf394d584d": "d8cbd47c5c72e57c32f49639f67c8535",
".git/objects/98/6131bbedb1136210dff02cfdb5b2e2624c9928": "d42a282484b628189bf8981c45d5939c",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/9fa6257bd58f3fa90054b996968c9296521e06": "59c18ce79f7761397248bbecb04e9ea4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/6adf81e018fbe58c32a4e4e07b2da9a89776fe": "ba97ca1c6b37354828e4dbc07edd8a97",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/370cac0dad03fdaee5ac9f23ed01c9968b879e": "8f4e79fac5b4cea818cff088fd2b1ee1",
".git/objects/af/7f7f1ad3b2d84a3c1c9ee7eeb7ba0f88d6c716": "606990aba46a1c50f8888867994b5b16",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5bf96ae7468129329d3d2e9b467af99e1f3479": "b2812dd56177c0cc240c517e1512bebd",
".git/objects/bc/6a58afdda22a443c752eaae3d60c2480511a9f": "d86646f2e9abb9d77e2e8346ade8749b",
".git/objects/bc/7d4b574b9553893470634bfd6a144327ac8c92": "1fa7830004eca0aed212b89632652f60",
".git/objects/be/abd2b24cbc6c868490dba2ac921d82f2080d6c": "96ab1e9607ce8b836cebaac2b2ee68f6",
".git/objects/c1/41ac2865f0e175fa5c1624c9593e6fc2c99fc7": "c4be427ebdf4359b82726e39dbeb008f",
".git/objects/c2/0afe46e12855a5f72c96ca2ba4a5c9824a35ff": "61c73bbca745e396b8a55bbc410908d2",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c7/418817439b2f071c93a4a6cee831e996123c0b": "a973381dec3e0988db3e91122a03c303",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/ce/b6246204c682977310209471eeb7c3579342a5": "f8731b297bb69566a128324aeb11105b",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d3/41b6f55a656d8fb73e0a3750e1dd0ad1d54aeb": "2687b71ff655cf81b04f6c989dd2a158",
".git/objects/d3/530f67d5476a163eafda140d6df8d1af13835f": "9e1f07600757b58bebecf8683b9a3fb3",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/7d2b0d1efd74c898d4d636c94d58acca4c370e": "6f54e3c8a8b3df2c1eeb2810c04cd001",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/b4d827a598f74511cc3c7835eba34f87e0dc47": "a7389414413e8700981abff7193a24d5",
".git/objects/d7/4aa35c28261a8e78264252be7f0f6f9406ec35": "f6d907a3303a508436779980f9fb2dfd",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/d5ec1e708b317e618e9238f13b805fb6bfb7ef": "a7c4baae28687fce0ab11b180c6c0847",
".git/objects/ea/37e786bda4aea5cb1b3df98c094a5f5b24275a": "927e712ee6d2077efdb764b103f6fb9b",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f2/5b1f3abfa0ffded932ff9bc9e458893d0c1bf7": "e6704b6c5bdcc434fec42a838a38519d",
".git/objects/f2/9e1c054fbb05b6551ce5cf7c26f5fd1f6016bb": "54fa8cd7978eec79074546936ac3bfbd",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/pack/pack-091f29f44f1bec0422347446b25ed6d8a18f5fbd.idx": "4d619e039e41f39e6b1f2d21175def5d",
".git/objects/pack/pack-091f29f44f1bec0422347446b25ed6d8a18f5fbd.pack": "f2edddb0a1d79151808d5b47d5f9ed6d",
".git/ORIG_HEAD": "c91a818f8483759190d987f06e384256",
".git/packed-refs": "17e31b9fa4e38678db4fb782c9518a6c",
".git/refs/heads/main": "d6f107c908f2eed8940ad60f1120aca2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d6f107c908f2eed8940ad60f1120aca2",
"assets/AssetManifest.json": "c2a1da682e1caaa36eaa9e9de46f4e26",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bf328af45d8ccfe1c5631edeb13f5744",
"/": "bf328af45d8ccfe1c5631edeb13f5744",
"main.dart.js": "6aa4c72edde268be61d542c5f83275e6",
"manifest.json": "daa33ec3a0c896e8ace673969db4b663",
"README.md": "f6984909880a32d7c1e2b58ba26f1103",
"version.json": "b431c5b457611d1623f5de8d5762f884"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
