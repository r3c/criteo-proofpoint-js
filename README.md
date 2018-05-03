Criteo JS API for ProofPoint URL defense [![Build Status](https://travis-ci.org/r3c/criteo-proofpoint-js.svg?branch=master)](https://travis-ci.org/r3c/criteo-proofpoint-js)
========================================

Install
-------

    npm install criteo-proofpoint

Usage
-----

    var proofPointDecode = require('criteo-proofpoint');

    // Returns decoded URL if protected by ProofPoint, original URL otherwise
    var decodedUrl = proofPointDecode('http://some-url');

License
-------

MIT
