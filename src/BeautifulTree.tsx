export type BeautifulTreeProps = {
    id: string
    width: number
    height: number
  }
  
  export function BeautifulTree({ id, width, height }: BeautifulTreeProps): JSX.Element {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id={id}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={'beautiful-tree-react'}
      >
      {/* replace with real code to draw a tree */}
      <circle
        cx={width * 0.5}
        cy={height * 0.5}
        r={Math.min(width, height) * 0.5}
      />
      </svg>
    )
  }