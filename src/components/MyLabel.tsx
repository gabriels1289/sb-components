import './mylabel.css';

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */

  label: string;
  
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3';
  
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  
  /**
   * Colores básicos del label
   */
  color?: 'primary'|'secondary'|'tertiary';
  
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;

  /**
   * Color personalizado del background
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps   = false,
  color     = 'primary',
  label     = 'No Label',
  size      = 'normal',
  fontColor,
  backgroundColor = 'transparent'
}: Props ) => {
  return (
    <span
      className={ `label ${ size } text-${ color }` }
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
