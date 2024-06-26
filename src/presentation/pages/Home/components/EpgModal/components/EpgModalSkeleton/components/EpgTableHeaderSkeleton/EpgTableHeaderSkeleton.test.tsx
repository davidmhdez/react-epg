import EpgTableHeaderSkeleton from "./EpgTableHeaderSkeleton.tsx";
import {render} from "@testing-library/react";

describe('EpgTableHeaderSkeleton', () => {
    test('should match with snapshot', () => {
        const { container } = render(<EpgTableHeaderSkeleton />);
        expect(container).toMatchSnapshot();
    })
})