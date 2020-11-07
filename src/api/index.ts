export type CurrentScheduleType = {
  datetime: string;
  datetimeInUtc: string;
  detailUrl: string;
  duration: string;
  episodeId: null;
  eventId: string;
  programmeId: null;
  siTrafficKey: string;
  title: string;
};

export type ChannelType = {
  backupImage: string;
  category: string;
  currentSchedule: CurrentScheduleType[];
  description: string;
  detailUrl: string;
  filters: string[];
  id: number;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  isHd: boolean;
  language: string;
  originalImage: string;
  stbNumber: string;
  title: string;
};

export type ChannelResponseType = {
  response: ChannelType[];
  responseCode: number;
  responseMessage: string
};

export type ScheduleDetail = {
  dateTime: string;
  dateTimeInUtc: string;
  detailUrl: string;
  duration: string;
  episodeId: string;
  eventId: string;
  programmeId: string;
  siTrafficKey: string;
  title: string;
}

export type ChannelDetailSchedule = {
  [key: string]: ScheduleDetail[]
}

export type ChannelDetResType = {
  backupImage: string;
  category: string;
  description: string;
  filters: string[];
  id: number;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  isHd: boolean;
  language: string;
  originalImage: string;
  schedule: ChannelDetailSchedule;
  stbNumber: string;
  title: string;
};

export type ChannelDetailType = {
  response: ChannelDetResType;
  responseCode: number;
  responseMessage: string;
};

export const fetchChannelLists = (): Promise<ChannelResponseType> => fetch(
  'https://contenthub-api.eco.astro.com.my/channel/all.json'
).then((res) => res.json());

export const fetchChannelDetails = (id: string): Promise<ChannelDetailType> => fetch(
  `https://contenthub-api.eco.astro.com.my/channel/${id}.json`
).then((res) => res.json());