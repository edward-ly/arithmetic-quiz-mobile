// Edited from https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
import { Dimensions } from "react-native";

/** @param {ScaledSize} dim the dimensions object
 ** @param {*} limit the limit on the scaled dimension */
function msp (dim, limit) {
  return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
}

// Returns true if the screen is in portrait mode
function isPortrait () {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
}

// Returns true if the screen is in landscape mode
function isLandscape () {
  const dim = Dimensions.get("screen");
  return dim.width >= dim.height;
}

// Returns true if the device is a tablet
function isTablet () {
  const dim = Dimensions.get("screen");
  return dim.scale < 2 && msp(dim, 1000) || dim.scale >= 2 && msp(dim, 1900);
}

// Returns true if the device is a phone
function isPhone () {
  return !isTablet();
}

module.exports = {
  isPortrait,
  isLandscape,
  isTablet,
  isPhone,
};
