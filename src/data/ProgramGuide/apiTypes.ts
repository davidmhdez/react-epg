export interface ProgramGuideResponse {
  entry: Entry;
  response: ApiTypes;
  status: string;
  msg: string;
}

interface ApiTypes {
  channels: ApiChannel[];
  total: number;
}

export interface ApiChannel {
  id: string;
  number: string;
  name: string;
  hd: boolean;
  image: string;
  group_id: string;
  liveref: string;
  epg_url: null | string;
  source_uri: string;
  provider_metadata_id: number;
  provider_metadata_name: string;
  group: Group;
  events: Event[];
}

interface Event {
  channel_id: string;
  source_uri: string;
  id: string;
  name: string;
  description: string;
  talent: null | null | string | string;
  date_begin: string;
  date_end: string;
  unix_begin: number;
  unix_end: number;
  duration: string;
  language: string;
  type: string;
  group_id: null;
  confirmado: null;
  id_empleado: null;
  tms_id: null;
  event_alf_id: string;
  ext_ncont_id: string;
  ext_nevt_id: string;
  ext_actors: null;
  ext_director: null | null | string | string;
  ext_year: null | null | string | string;
  ext_country: null | null | string | string;
  ext_original_name: string;
  ext_ep_original_name: null;
  ext_series_id: null | null | string | string;
  ext_season_id: null | null | string | string;
  ext_episode_id: null | null | string | string;
  ext_language: string;
  ext_serie_short_desc: null;
  ext_serie_desc: null;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  ext_eventimage_name: string;
  ext_eventimage_name_base: string;
  ext_catchup: string;
  ext_startover: string;
  ext_recordable: string;
  parental_rating: string;
  aud_stereo: string;
  aud_dolby: string;
  vid_black_and_white: string;
  dvb_content: null | null | string | string;
  user_content: null;
  group_rel: null;
  gmt: number;
}

interface Group {
  common: Common;
}

interface Common {
  id: string;
  title: string;
  title_episode: null;
  title_uri: string;
  title_original: string;
  description: string;
  description_large: string;
  short_description: null;
  image_large: string;
  image_medium: string;
  image_small: string;
  image_still: null;
  image_background: string;
  url_imagen_t1: string;
  url_imagen_t2: string;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  image_clean_horizontal: string;
  image_clean_vertical: string;
  image_clean_square: string;
  image_sprites: string;
  image_frames: string;
  image_trickplay: string;
  image_external: null;
  duration: null;
  date: string;
  year: null;
  preview: string;
  season_number: null;
  episode_number: null;
  format_types: string;
  live_enabled: string;
  live_type: string;
  live_ref: string;
  source_uri: string;
  timeshift: null | string;
  votes_average: number;
  rating_code: string;
  proveedor_name: string;
  proveedor_code: string;
  encoder_tecnology: Encodertecnology;
  recorder_technology: Recordertechnology;
  resource_name: null;
  rollingcreditstime: null;
  rollingcreditstimedb: null;
  is_series: boolean;
  channel_number: string;
}

interface Recordertechnology {
  id: null | string;
  desc: null | string;
}

interface Encodertecnology {
  id: string;
  desc: string;
}

interface Entry {
  device_id: string;
  device_category: string;
  device_model: string;
  device_type: string;
  device_so: string;
  format: string;
  device_manufacturer: string;
  authpn: string;
  authpt: string;
  api_version: string;
  region: string;
  HKS: string;
  user_id: string;
  date_from: string;
  date_to: string;
  quantity: string;
}