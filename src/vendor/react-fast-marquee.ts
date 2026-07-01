import MarqueeModule from 'react-fast-marquee'

const Marquee = (MarqueeModule as unknown as { default?: typeof MarqueeModule }).default ?? MarqueeModule

export default Marquee
