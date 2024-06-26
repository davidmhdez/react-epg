import React from "react";
import {StyledButton} from "./styles.ts";
import '@testing-library/jest-dom'

type Props = React.HTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({children, ...rest}) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;
