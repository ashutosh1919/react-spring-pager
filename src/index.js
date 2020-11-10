import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './pager_style.css'

function PagerComponent(props) {
  const width = props.width;
  const pages = props.pages
  const index = useRef(0)
  const [props_pages, set] = useSprings(pages.length, i => ({ x: i * width, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > width / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      // if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (down ? xDelta : 0)
      const sc = down ? 1 - distance / width / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  return props_pages.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    </animated.div>
  ));
}

function SpringPager(props) {
  const [width, setWidth] = useState(0);
  const parent_id = props.parent_id;
  window.onload = function () {
    setWidth(document.getElementById(parent_id).offsetWidth);
  };

  if (width === 0) {
    return <p>Not Loaded</p>
  }
  else {
    return (
      <div id="sprint-pager-parent-id">
        <PagerComponent {...props} width={width} />
      </div>
    )
  }
}

module.exports.SpringPager = SpringPager;
