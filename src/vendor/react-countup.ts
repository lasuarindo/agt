import CountUpModule from "react-countup";

const CountUp = (CountUpModule as unknown as { default?: typeof CountUpModule }).default ?? CountUpModule;
export default CountUp;