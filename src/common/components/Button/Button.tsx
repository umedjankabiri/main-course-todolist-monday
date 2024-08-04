import {ButtonProps} from "common/types/buttonProps/ButtonProps.ts";

export const Button = (props: ButtonProps) => {
   return (
      <>
         <button className={props.className} onClick={props.onClick}>{props.title}</button>
      </>
   )
}