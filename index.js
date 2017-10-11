"use strict";

/**
 * Decode URL protected by ProofPoint URL defense.
 * @param {original} original (encoded) URL
 * @return {string} decoded URL or original URL if scheme wasn't recognized
 */
module.exports = function(original) {
  var pattern = /^https:\/\/urldefense.proofpoint.com\/v([0-9])\/.*[?&]u=([^?&#]+)/;
  var match = original.match(pattern);

  if (!match || match.length !== 3)
    return original;

  switch (match[1]) {
    case "1":
      return decodeURIComponent(match[2]);

    case "2":
      return decodeURIComponent(match[2].replace(/-/g, "%").replace(/_/g, "/"));

    default:
      return original;
  }

  return original;
};
