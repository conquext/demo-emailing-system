import * as React from 'react'

export interface Props {
  className?: string | Record<string, unknown>
  ordered?: boolean
  item?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = (ref || defaultRef) as React.RefObject<HTMLInputElement>

  React.useEffect(() => {
    if (resolvedRef && resolvedRef.current)
      resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  )
})
export default Checkbox
