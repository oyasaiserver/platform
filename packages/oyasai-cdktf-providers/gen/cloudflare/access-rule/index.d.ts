import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccessRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#account_id AccessRule#account_id}
    */
    readonly accountId?: string;
    /**
    * The rule configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#configuration AccessRule#configuration}
    */
    readonly configuration: AccessRuleConfiguration;
    /**
    * The action to apply to a matched request.
    * Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#mode AccessRule#mode}
    */
    readonly mode: string;
    /**
    * An informative summary of the rule, typically used as a reminder or explanation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#notes AccessRule#notes}
    */
    readonly notes?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#zone_id AccessRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface AccessRuleConfiguration {
    /**
    * The configuration target. You must set the target to `ip` when specifying an IP address in the rule.
    * Available values: "ip", "ip6", "ip_range", "asn", "country".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#target AccessRule#target}
    */
    readonly target?: string;
    /**
    * The IP address to match. This address will be compared to the IP address of incoming requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#value AccessRule#value}
    */
    readonly value?: string;
}
export declare function accessRuleConfigurationToTerraform(struct?: AccessRuleConfiguration | cdktf.IResolvable): any;
export declare function accessRuleConfigurationToHclTerraform(struct?: AccessRuleConfiguration | cdktf.IResolvable): any;
export declare class AccessRuleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccessRuleConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: AccessRuleConfiguration | cdktf.IResolvable | undefined);
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
export interface AccessRuleScope {
}
export declare function accessRuleScopeToTerraform(struct?: AccessRuleScope): any;
export declare function accessRuleScopeToHclTerraform(struct?: AccessRuleScope): any;
export declare class AccessRuleScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccessRuleScope | undefined;
    set internalValue(value: AccessRuleScope | undefined);
    get email(): any;
    get id(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule cloudflare_access_rule}
*/
export declare class AccessRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_access_rule";
    /**
    * Generates CDKTF code for importing a AccessRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccessRule to import
    * @param importFromId The id of the existing AccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccessRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/access_rule cloudflare_access_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessRuleConfig
    */
    constructor(scope: Construct, id: string, config: AccessRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowedModes(): any;
    private _configuration;
    get configuration(): AccessRuleConfigurationOutputReference;
    putConfiguration(value: AccessRuleConfiguration): void;
    get configurationInput(): any;
    get createdOn(): any;
    get id(): any;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    get modifiedOn(): any;
    private _notes?;
    get notes(): string;
    set notes(value: string);
    resetNotes(): void;
    get notesInput(): string;
    private _scope;
    get scope(): AccessRuleScopeOutputReference;
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
