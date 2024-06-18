import { memo } from "react";
import "./Button.css"

export default memo(({ children, ...rest }:{children:string}) => (
  <button {...rest} className="postButton">
    {children}
  </button>
));