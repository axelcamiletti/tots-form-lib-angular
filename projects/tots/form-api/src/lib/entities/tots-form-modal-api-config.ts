import { TotsBaseHttpService } from "@tots/core";
import { TotsModalConfig } from "@tots/form";

export class TotsFormModalApiConfig extends TotsModalConfig {
    service?: TotsBaseHttpService<any>
}