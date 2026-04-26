import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules#waiting_room_id DataCloudflareWaitingRoomRules#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules#zone_id DataCloudflareWaitingRoomRules#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules cloudflare_waiting_room_rules}
*/
export declare class DataCloudflareWaitingRoomRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_room_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomRules to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules cloudflare_waiting_room_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomRulesConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomRulesConfig);
    get action(): any;
    get description(): any;
    get enabled(): any;
    get expression(): any;
    get id(): any;
    get lastUpdated(): any;
    get version(): any;
    private _waitingRoomId?;
    get waitingRoomId(): string;
    set waitingRoomId(value: string);
    get waitingRoomIdInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
