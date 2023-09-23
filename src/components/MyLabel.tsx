import "./MyLabel.css"

export interface Props {
  /**
   * Texto que se mostrará en la etiqueta
   */
  label: string;
  /**
   * tamaño de la etiqueta   
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * toda la etiqueta en mayusculas
   */
  allCaps?: boolean;
  /**
   * color de la etiqueta 
   */
  color?: "text-primary" | "text-secondary " | "text-tertiary";
  /**
   * fontColor texto del span
   */
  fontColor?: string;
  /**
   * fondo del span
   */
  backgroundColor?: string;
}
export const MyLabel = ({ backgroundColor = "transpatent", allCaps = false, color = "text-primary", fontColor, label, size = "normal" }: Props) => {
  return (
    <span
      className={` 
      ${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
