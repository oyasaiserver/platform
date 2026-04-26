import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneLockdownConfig extends cdktf.TerraformMetaArguments {
    /**
    * A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#configurations ZoneLockdown#configurations}
    */
    readonly configurations: ZoneLockdownConfigurations[] | cdktf.IResolvable;
    /**
    * An informative summary of the rule. This value is sanitized and any tags will be removed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#description ZoneLockdown#description}
    */
    readonly description?: string;
    /**
    * When true, indicates that the rule is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#paused ZoneLockdown#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#priority ZoneLockdown#priority}
    */
    readonly priority?: number;
    /**
    * The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#urls ZoneLockdown#urls}
    */
    readonly urls: string[];
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#zone_id ZoneLockdown#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZoneLockdownConfigurations {
    /**
    * The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.
    * Available values: "ip", "ip_range".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#target ZoneLockdown#target}
    */
    readonly target?: string;
    /**
    * The IP address to match. This address will be compared to the IP address of incoming requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#value ZoneLockdown#value}
    */
    readonly value?: string;
}
export declare function zoneLockdownConfigurationsToTerraform(struct?: ZoneLockdownConfigurations | cdktf.IResolvable): any;
export declare function zoneLockdownConfigurationsToHclTerraform(struct?: ZoneLockdownConfigurations | cdktf.IResolvable): any;
export declare class ZoneLockdownConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZoneLockdownConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneLockdownConfigurations | cdktf.IResolvable | undefined);
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class ZoneLockdownConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZoneLockdownConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZoneLockdownConfigurationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown cloudflare_zone_lockdown}
*/
export declare class ZoneLockdown extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_lockdown";
    /**
    * Generates CDKTF code for importing a ZoneLockdown resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneLockdown to import
    * @param importFromId The id of the existing ZoneLockdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneLockdown to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_lockdown cloudflare_zone_lockdown} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneLockdownConfig
    */
    constructor(scope: Construct, id: string, config: ZoneLockdownConfig);
    private _configurations;
    get configurations(): ZoneLockdownConfigurationsList;
    putConfigurations(value: ZoneLockdownConfigurations[] | cdktf.IResolvable): void;
    get configurationsInput(): any;
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _urls?;
    get urls(): string[];
    set urls(value: string[]);
    get urlsInput(): string[];
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
