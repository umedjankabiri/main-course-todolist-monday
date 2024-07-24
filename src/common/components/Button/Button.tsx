import {ButtonProps} from "common/types/buttonProps/ButtonProps.ts";

export const Button = (props: ButtonProps) => {
   return (
      <>
         <button onClick={props.onClick}>{props.title}</button>
      </>
   )
}