import {injectable} from "inversify";
import 'reflect-metadata'
import IProgramGuideRepository from "../../domain/repository/IProgramGuideRepository.ts";
import ProgramGuide from "../../domain/entity/ProgramGuide.ts";
import axios from "axios";
import {getCompactDateFormat, getProgramGuideAdapter} from "./programGuideAdapter.ts";

@injectable()
export default class ProgramGuideRepository implements IProgramGuideRepository{
    async getProgramGuide(fromDate: Date, toDate: Date): Promise<ProgramGuide> {
        const dateFrom = getCompactDateFormat(fromDate);
        const dateTo = getCompactDateFormat(toDate);
        const url =`https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${dateFrom}&date_to=${dateTo}&quantity=200`
        const { data } = await axios.get(url);
        return getProgramGuideAdapter(data)
    }
}