// Edited from https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
import { Dimensions } from "react-native";

module.exports = {
  /** @param {ScaledSize} dim the dimensions object
   ** @param {*} limit the limit on the scaled dimension */
  msp (dim, limit) {
    return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
  },

  // Returns true if the screen is in portrait mode
  isPortrait () {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  },

  // Returns true if the screen is in landscape mode
  isLandscape () {
    const dim = Dimensions.get("screen");
    return dim.width >= dim.height;
  },

  // Returns true if the device is a tablet
  isTablet () {
    const dim = Dimensions.get("screen");
    return dim.scale < 2 && this.msp(dim, 1000) || dim.scale >= 2 && this.msp(dim, 1900);
  },

  // Returns true if the device is a phone
  isPhone () {
    return !this.isTablet();
  },
};
