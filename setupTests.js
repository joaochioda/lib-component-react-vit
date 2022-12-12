/* eslint-disable @typescript-eslint/no-empty-function */
import "@testing-library/jest-dom"

window.matchMedia = window.matchMedia || function() {
  return {
     matches : false,
     addListener : function() {},
     removeListener: function() {}
  };
};