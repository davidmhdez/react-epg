import {render} from "@testing-library/react";
import EpgModalSkeleton from "./EpgModalSkeleton.tsx";

describe('EpgModalSkeleton test', () => {
    test('should match with snapshot', () => {
        const { container } = render(<EpgModalSkeleton/>)
        expect(container).toMatchSnapshot()
    })
})