import {render} from "@testing-library/react";
import Button from "./Button.tsx";
import '@testing-library/jest-dom'

describe('Button tests', () => {
    it('should render children correctly', () => {
        const { getByText } = render(<Button>Click Me</Button>);
        expect(getByText('Click Me')).toBeInTheDocument();
    });
})