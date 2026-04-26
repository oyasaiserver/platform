import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccessRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#account_id DataCloudflareAccessRule#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#filter DataCloudflareAccessRule#filter}
    */
    readonly filter?: DataCloudflareAccessRuleFilter;
    /**
    * Unique identifier for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#rule_id DataCloudflareAccessRule#rule_id}
    */
    readonly ruleId?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#zone_id DataCloudflareAccessRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareAccessRuleConfiguration {
}
export declare function dataCloudflareAccessRuleConfigurationToTerraform(struct?: DataCloudflareAccessRuleConfiguration): any;
export declare function dataCloudflareAccessRuleConfigurationToHclTerraform(struct?: DataCloudflareAccessRuleConfiguration): any;
export declare class DataCloudflareAccessRuleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRuleConfiguration | undefined;
    set internalValue(value: DataCloudflareAccessRuleConfiguration | undefined);
    get target(): any;
    get value(): any;
}
export interface DataCloudflareAccessRuleFilterConfiguration {
    /**
    * Defines the target to search in existing rules.
    * Available values: "ip", "ip_range", "asn", "country".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#target DataCloudflareAccessRule#target}
    */
    readonly target?: string;
    /**
    * Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`.
    * Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#value DataCloudflareAccessRule#value}
    */
    readonly value?: string;
}
export declare function dataCloudflareAccessRuleFilterConfigurationToTerraform(struct?: DataCloudflareAccessRuleFilterConfiguration | cdktf.IResolvable): any;
export declare function dataCloudflareAccessRuleFilterConfigurationToHclTerraform(struct?: DataCloudflareAccessRuleFilterConfiguration | cdktf.IResolvable): any;
export declare class DataCloudflareAccessRuleFilterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRuleFilterConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccessRuleFilterConfiguration | cdktf.IResolvable | undefined);
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
export interface DataCloudflareAccessRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#configuration DataCloudflareAccessRule#configuration}
    */
    readonly configuration?: DataCloudflareAccessRuleFilterConfiguration;
    /**
    * Defines the direction used to sort returned rules.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#direction DataCloudflareAccessRule#direction}
    */
    readonly direction?: string;
    /**
    * Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#match DataCloudflareAccessRule#match}
    */
    readonly match?: string;
    /**
    * The action to apply to a matched request.
    * Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#mode DataCloudflareAccessRule#mode}
    */
    readonly mode?: string;
    /**
    * Defines the string to search for in the notes of existing IP Access rules.
    * Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#notes DataCloudflareAccessRule#notes}
    */
    readonly notes?: string;
    /**
    * Defines the field used to sort returned rules.
    * Available values: "configuration.target", "configuration.value", "mode".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#order DataCloudflareAccessRule#order}
    */
    readonly order?: string;
}
export declare function dataCloudflareAccessRuleFilterToTerraform(struct?: DataCloudflareAccessRuleFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAccessRuleFilterToHclTerraform(struct?: DataCloudflareAccessRuleFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAccessRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccessRuleFilter | cdktf.IResolvable | undefined);
    private _configuration;
    get configuration(): DataCloudflareAccessRuleFilterConfigurationOutputReference;
    putConfiguration(value: DataCloudflareAccessRuleFilterConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): any;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _match?;
    get match(): string;
    set match(value: string);
    resetMatch(): void;
    get matchInput(): string;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _notes?;
    get notes(): string;
    set notes(value: string);
    resetNotes(): void;
    get notesInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
}
export interface DataCloudflareAccessRuleScope {
}
export declare function dataCloudflareAccessRuleScopeToTerraform(struct?: DataCloudflareAccessRuleScope): any;
export declare function dataCloudflareAccessRuleScopeToHclTerraform(struct?: DataCloudflareAccessRuleScope): any;
export declare class DataCloudflareAccessRuleScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRuleScope | undefined;
    set internalValue(value: DataCloudflareAccessRuleScope | undefined);
    get email(): any;
    get id(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule cloudflare_access_rule}
*/
export declare class DataCloudflareAccessRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_access_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccessRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccessRule to import
    * @param importFromId The id of the existing DataCloudflareAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccessRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule cloudflare_access_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccessRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccessRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowedModes(): any;
    private _configuration;
    get configuration(): DataCloudflareAccessRuleConfigurationOutputReference;
    get createdOn(): any;
    private _filter;
    get filter(): DataCloudflareAccessRuleFilterOutputReference;
    putFilter(value: DataCloudflareAccessRuleFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get mode(): any;
    get modifiedOn(): any;
    get notes(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    resetRuleId(): void;
    get ruleIdInput(): string;
    private _scope;
    get scope(): DataCloudflareAccessRuleScopeOutputReference;
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
