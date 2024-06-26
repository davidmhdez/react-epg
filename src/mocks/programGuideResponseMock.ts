import {ProgramGuideResponse} from "../data/ProgramGuide/apiTypes.ts";
import apiChannelMock from "./apiChannel.ts";

const programGuideResponseMock: ProgramGuideResponse = {
    entry: {
        device_id: '123',
        device_category: 'category',
        device_model: 'model',
        device_type: 'type',
        device_so: 'so',
        format: 'format',
        device_manufacturer: 'manufacturer',
        authpn: 'authpn',
        authpt: 'authpt',
        api_version: 'v1',
        region: 'region',
        HKS: 'HKS',
        user_id: 'user_id',
        date_from: '20240625143010',
        date_to: '20240625153010',
        quantity: '10'
    },
    response: {
        channels: [],
        total: 0
    },
    status: '0',
    msg: 'OK'
};

export const programGuideFilledResponseMock = {
    ...programGuideResponseMock,
    response: {
        channels: [
            apiChannelMock
        ],
        total: 1
    }
}

export default programGuideResponseMock;