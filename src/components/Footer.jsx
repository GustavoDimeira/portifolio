import "./css/Footer.css";

export default function Footer({ selected }) {
  return(
    <div className={ `footer page-${selected}` }>
      <div className={ `dotCorrection page-${selected}` }></div>
    </div>
  )
}
