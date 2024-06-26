import {render} from "@testing-library/react";
import EpgHoursHeader from "./EpgHoursHeaderContainer.tsx";

describe('EpgHoursHeader test', () => {
    test('should match with snapshot', () => {
        const fromDate = new Date(2024, 6, 25, 14, 0, 0);
        const toDate = new Date(2024, 6, 25, 23, 59, 59);
        const { container } = render(<EpgHoursHeader startDate={fromDate} endDate={toDate}/>)
        expect(container).toMatchSnapshot();
    })
})