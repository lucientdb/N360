/**
 * BrandName — affiche "N360" avec N en blanc et 360 en vert #00C97A
 * Utilisé dans les titres et éléments de marque proéminents.
 */
export default function BrandName({ suffix = "" }: { suffix?: string }) {
  return (
    <>
      <span className="text-white">N</span>
      <span style={{ color: "#00C97A" }}>360</span>
      {suffix && <span className="text-white">{suffix}</span>}
    </>
  )
}
