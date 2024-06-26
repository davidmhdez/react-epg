import IProgramGuideRepository from "../domain/repository/IProgramGuideRepository.ts";
import ProgramGuide from "../domain/entity/ProgramGuide.ts";
import {injectable} from "inversify";
import "reflect-metadata"

@injectable()
export default class ProgramGuideRepositoryMock implements IProgramGuideRepository{
    getProgramGuide(fromDate: Date, toDate: Date): Promise<ProgramGuide> {
        return new Promise((resolve) => {
            resolve({
                from: fromDate,
                end: toDate,
                channels: [
                    {
                        id: "1",
                        name: "Test channel",
                        number: "3",
                        image: "",
                        events: [
                            {
                                id: "11",
                                name: "Test event",
                                duration: "01:30:00",
                                dateBegin: fromDate,
                                description: "Test description",
                                durationInMinutes: 90,
                                dateEnd: new Date(fromDate.getTime() + (90 * 60 * 1000))
                            }
                        ]
                    }
                ]
            })
        })
    }
}