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
}

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
}

export type ChannelResponseType = {
  response: ChannelType[];
  responseCode: number;
  responseMessage: string
}

export const fetchChannelLists = (): Promise<ChannelResponseType> => fetch(
  'https://contenthub-api.eco.astro.com.my/channel/all.json'
).then((res) => res.json());