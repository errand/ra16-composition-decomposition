/**
 * return formatted current Date
 */

export default function CurrentDate() {
  const currentDate = new Date().toLocaleDateString()
  return (
    <div className="currentDate">
      {currentDate}
    </div>
  )
}
