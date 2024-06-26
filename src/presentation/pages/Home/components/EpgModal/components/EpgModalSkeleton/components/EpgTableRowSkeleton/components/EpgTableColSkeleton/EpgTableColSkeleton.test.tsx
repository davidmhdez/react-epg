import EpgTableColSkeleton from "./EpgTableColSkeleton.tsx";
import {render} from "@testing-library/react";

describe('EpgTableColSkeleton test', () => {
    test('should match with snapshot', () => {
        const { container } = render(<EpgTableColSkeleton width={30}/>);
        expect(container).toMatchSnapshot()
    })
})