import "./css/Footer.css";

export default function Footer({ selected }) {
  return(
    <div className={ `footer page-${selected}` } />
  )
}
