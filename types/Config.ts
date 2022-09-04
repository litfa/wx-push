export interface Config {
  wx: Wx;
  day: Day;
}

interface Day {
  cron: string;
  users: string[];
  template: string;
  colors: Colors;
  daoshu: Daoshu[];
}

interface Daoshu {
  date: string;
  key: string;
}

type Colors = object

interface Wx {
  appid: string;
  secret: string;
}