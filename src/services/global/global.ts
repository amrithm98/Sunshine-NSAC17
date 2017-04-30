
import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public items = [];
  public firstTime=true;
  public brand="BRAND";
  public output_max=0;
  public rooms=0;
  public specs={'brand':0,'output_max':0,'rooms':0};
  public location={'lat':0,'lon':0};
  public object={'array_type':0,'azimuth':0,'api_key':'LGAK2a4oDwS8mXHxhHHmTRGKZSXOZLxdHURFJF6g',
      'lat':0,'lon':0,'tilt':0,'system_capacity':0,'module_type':0,'losses':0
  };
}