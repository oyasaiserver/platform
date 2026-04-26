import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#account Zone#account}
    */
    readonly account: ZoneAccount;
    /**
    * The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#name Zone#name}
    */
    readonly name: string;
    /**
    * Indicates whether the zone is only using Cloudflare DNS services. A
    * true value means the zone will not receive security or performance
    * benefits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#paused Zone#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
    * typically a partner-hosted zone or a CNAME setup.
    * Available values: "full", "partial", "secondary", "internal".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#type Zone#type}
    */
    readonly type?: string;
    /**
    * An array of domains used for custom name servers. This is only
    * available for Business and Enterprise plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#vanity_name_servers Zone#vanity_name_servers}
    */
    readonly vanityNameServers?: string[];
}
export interface ZoneAccount {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#id Zone#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function zoneAccountToTerraform(struct?: ZoneAccount | cdktf.IResolvable): any;
export declare function zoneAccountToHclTerraform(struct?: ZoneAccount | cdktf.IResolvable): any;
export declare class ZoneAccountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneAccount | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneAccount | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
export interface ZoneMeta {
}
export declare function zoneMetaToTerraform(struct?: ZoneMeta): any;
export declare function zoneMetaToHclTerraform(struct?: ZoneMeta): any;
export declare class ZoneMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneMeta | undefined;
    set internalValue(value: ZoneMeta | undefined);
    get cdnOnly(): any;
    get customCertificateQuota(): any;
    get dnsOnly(): any;
    get foundationDns(): any;
    get pageRuleQuota(): any;
    get phishingDetected(): any;
    get step(): any;
}
export interface ZoneOwner {
}
export declare function zoneOwnerToTerraform(struct?: ZoneOwner): any;
export declare function zoneOwnerToHclTerraform(struct?: ZoneOwner): any;
export declare class ZoneOwnerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneOwner | undefined;
    set internalValue(value: ZoneOwner | undefined);
    get id(): any;
    get name(): any;
    get type(): any;
}
export interface ZonePlan {
}
export declare function zonePlanToTerraform(struct?: ZonePlan): any;
export declare function zonePlanToHclTerraform(struct?: ZonePlan): any;
export declare class ZonePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZonePlan | undefined;
    set internalValue(value: ZonePlan | undefined);
    get canSubscribe(): any;
    get currency(): any;
    get externallyManaged(): any;
    get frequency(): any;
    get id(): any;
    get isSubscribed(): any;
    get legacyDiscount(): any;
    get legacyId(): any;
    get name(): any;
    get price(): any;
}
export interface ZoneTenant {
}
export declare function zoneTenantToTerraform(struct?: ZoneTenant): any;
export declare function zoneTenantToHclTerraform(struct?: ZoneTenant): any;
export declare class ZoneTenantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneTenant | undefined;
    set internalValue(value: ZoneTenant | undefined);
    get id(): any;
    get name(): any;
}
export interface ZoneTenantUnit {
}
export declare function zoneTenantUnitToTerraform(struct?: ZoneTenantUnit): any;
export declare function zoneTenantUnitToHclTerraform(struct?: ZoneTenantUnit): any;
export declare class ZoneTenantUnitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneTenantUnit | undefined;
    set internalValue(value: ZoneTenantUnit | undefined);
    get id(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone}
*/
export declare class Zone extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone";
    /**
    * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Zone to import
    * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Zone to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone cloudflare_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneConfig
    */
    constructor(scope: Construct, id: string, config: ZoneConfig);
    private _account;
    get account(): ZoneAccountOutputReference;
    putAccount(value: ZoneAccount): void;
    get accountInput(): any;
    get activatedOn(): any;
    get cnameSuffix(): any;
    get createdOn(): any;
    get developmentMode(): any;
    get id(): any;
    private _meta;
    get meta(): ZoneMetaOutputReference;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nameServers(): any;
    get originalDnshost(): any;
    get originalNameServers(): any;
    get originalRegistrar(): any;
    private _owner;
    get owner(): ZoneOwnerOutputReference;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    get permissions(): any;
    private _plan;
    get plan(): ZonePlanOutputReference;
    get status(): any;
    private _tenant;
    get tenant(): ZoneTenantOutputReference;
    private _tenantUnit;
    get tenantUnit(): ZoneTenantUnitOutputReference;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _vanityNameServers?;
    get vanityNameServers(): string[];
    set vanityNameServers(value: string[]);
    resetVanityNameServers(): void;
    get vanityNameServersInput(): string[];
    get verificationKey(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
