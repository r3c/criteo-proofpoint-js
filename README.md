Criteo JS API for ProofPoint URL defense
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
