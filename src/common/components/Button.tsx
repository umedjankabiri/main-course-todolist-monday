import {ButtonProps} from "common/types/ButtonProps";

export const Button = (props: ButtonProps) => {
   return (
      <>
         <button>{props.title}</button>
      </>
   )
}