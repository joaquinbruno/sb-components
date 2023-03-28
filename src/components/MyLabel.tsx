import './mylabel.css';


export interface Props {
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño de la etiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Si quiere todo capitalizado
   */
    allCaps?: boolean;
    /**
   * Colores básicos del botón
   */
    color?: 'primary'|'secondary'|'tertiary';
    /**
   * Colores personalizado de la fuente
   */
    fontColor?: string;
     /**
   * Colores de fondo  personalizado de la fuente
   */
      backgroundColor?: string;
   
}

export const MyLabel = ( {
    label   = 'no label',
    size    = 'normal',
    allCaps = false,
    color   = 'primary',
    fontColor,
    backgroundColor = 'transparent'

}: Props) => {
  return (
    <span className={` label ${size} text-${color} `}
    style={{ color: fontColor , backgroundColor}}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}


