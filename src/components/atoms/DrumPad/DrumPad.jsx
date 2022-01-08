import { useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import useMeasure from 'react-use-measure'

export default function DrumPad(params) {
  const [ref, bounds] = useMeasure({ scroll: false })

  const [isPress, setIsPress] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const transition = {
    type: 'spring',
    duration: 0.7,
    bounce: 0.2,
  }
  const variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    press: { scale: 0.95 },
  }
  const pressButton = () => {
    if (!pressed) {
      setIsPress(true)
      setTimeout(() => {
        setIsPress(false)
      }, 300)
    } else {
      setIsPress(false)
    }
  }
  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        whileTap='press'
        animate={isHover ? 'hover' : 'rest'}
        variants={variants}
        onHoverStart={() => {
          setIsHover(true)
        }}
        onHoverEnd={() => {
          setIsHover(false)
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        className={`w-24 h-24 ${
          isPress ? 'bg-yellow-200' : 'bg-gray-300'
        } rounded-sm`}
      ></motion.button>
    </MotionConfig>
  )
}
