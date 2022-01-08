import DrumPad from '../../atoms/DrumPad/DrumPad'

export default function DrumGrid({ gridSize = 4 }) {
  const pads = [...Array(gridSize * gridSize)].map((e, i) => {
    return <DrumPad key={i} />
  })
  return (
    <div
      className={` grid  gap-2`}
      style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
    >
      {pads}
    </div>
  )
}
