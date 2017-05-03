
import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public items = [];
  public firstTime=true;
  public brand="BRAND";
  public output_max=0;
  public rooms=0;
  public response={
  "inputs": {
    "lat": "8.5",
    "lon": "76",
    "azimuth": "180",
    "system_capacity": "1",
    "tilt": "0",
    "array_type": "0",
    "module_type": "0",
    "losses": "14",
    "dataset": "intl"
  },
  "errors": [],
  "warnings": [],
  "version": "1.3.0",
  "ssc_info": {
    "version": 45,
    "build": "Linux 64 bit GNU/C++ Jul  7 2015 14:24:09"
  },
  "station_info": {
    "lat": 8.479999542236328,
    "lon": 76.94999694824219,
    "elev": 64,
    "tz": 5.5,
    "location": "433710",
    "city": "Trivandrum",
    "state": "IND",
    "solar_resource_file": "433710.tm3",
    "distance": 114521
  },
  "outputs": {
    "ac_monthly": [
      126.9081802368164,
      125.87897491455078,
      149.2945556640625,
      133.4813995361328,
      130.64923095703125,
      109.4272689819336,
      120.03885650634766,
      128.8160400390625,
      130.1540985107422,
      123.72819519042969,
      109.74020385742188,
      117.03374481201172
    ],
    "poa_monthly": [
      176.60507202148438,
      177.11668395996094,
      207.49468994140625,
      183.8797149658203,
      177.07809448242188,
      145.89340209960938,
      160.345947265625,
      173.1267547607422,
      174.78524780273438,
      168.70419311523438,
      149.83721923828125,
      161.2097930908203
    ],
    "solrad_monthly": [
      5.6969380378723145,
      6.325595855712891,
      6.6933770179748535,
      6.129323959350586,
      5.7121968269348145,
      4.8631134033203125,
      5.172450065612793,
      5.584733963012695,
      5.826174736022949,
      5.442070960998535,
      4.994574069976807,
      5.200315952301025
    ],
    "dc_monthly": [
      132.44564819335938,
      131.3542022705078,
      155.8161163330078,
      139.38677978515625,
      136.4912872314453,
      114.48934173583984,
      125.52415466308594,
      134.6021728515625,
      135.91204833984375,
      129.20684814453125,
      114.69783782958984,
      122.27252960205078
    ],
    "ac_annual": 1505.1507568359375,
    "solrad_annual": 5.636738300323486,
    "capacity_factor": 17.182086944580078
  }
};
  public specs={'brand':0,'output_max':0,'rooms':0};
  public location={'lat':0,'lon':0};
  public object={'array_type':"0",'azimuth':"0",'api_key':'LGAK2a4oDwS8mXHxhHHmTRGKZSXOZLxdHURFJF6g',
      'lat':0,'lon':0,'tilt':"0",'system_capacity':"0",'module_type':"0",'losses':"0"
  };
}