import React from "react";

const compose = (...func) => (component) => func.reduceRight((prevFun,actualFun)=>actualFun(prevFun), component);

export default compose