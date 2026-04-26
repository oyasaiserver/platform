import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneHoldConfig extends cdktf.TerraformMetaArguments {
    /**
    * If `hold_after` is provided and future-dated, the hold will be temporarily disabled,
    * then automatically re-enabled by the system at the time specified
    * in this RFC3339-formatted timestamp. A past-dated `hold_after` value will have
    * no effect on an existing, enabled hold. Providing an empty string will set its value
    * to the current time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold#hold_after ZoneHold#hold_after}
    */
    readonly holdAfter?: string;
    /**
    * If `true`, the zone hold will extend to block any subdomain of the given zone, as well
    * as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname
    * 'example.com' and include_subdomains=true will block 'example.com',
    * 'staging.example.com', 'api.staging.example.com', etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold#include_subdomains ZoneHold#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold#zone_id ZoneHold#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold cloudflare_zone_hold}
*/
export declare class ZoneHold extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_hold";
    /**
    * Generates CDKTF code for importing a ZoneHold resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneHold to import
    * @param importFromId The id of the existing ZoneHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneHold to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_hold cloudflare_zone_hold} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneHoldConfig
    */
    constructor(scope: Construct, id: string, config: ZoneHoldConfig);
    get hold(): any;
    private _holdAfter?;
    get holdAfter(): string;
    set holdAfter(value: string);
    resetHoldAfter(): void;
    get holdAfterInput(): string;
    get id(): any;
    private _includeSubdomains?;
    get includeSubdomains(): boolean | cdktf.IResolvable;
    set includeSubdomains(value: boolean | cdktf.IResolvable);
    resetIncludeSubdomains(): void;
    get includeSubdomainsInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
