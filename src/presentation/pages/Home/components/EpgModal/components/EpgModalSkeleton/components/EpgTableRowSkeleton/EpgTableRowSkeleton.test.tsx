import {render} from "@testing-library/react";
import EpgTableRowSkeleton from "./EpgTableRowSkeleton.tsx";

describe('EpgTableRowSkeleton test', () => {
    test('should match with snapshot', () => {
        const { container } = render(<EpgTableRowSkeleton programColsWidth={[100, 50, 30]}/>);
        expect(container).toMatchSnapshot()
    })
})