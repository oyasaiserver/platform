import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccessRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#account_id DataCloudflareAccessRules#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#configuration DataCloudflareAccessRules#configuration}
    */
    readonly configuration?: DataCloudflareAccessRulesConfiguration;
    /**
    * Defines the direction used to sort returned rules.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#direction DataCloudflareAccessRules#direction}
    */
    readonly direction?: string;
    /**
    * Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#match DataCloudflareAccessRules#match}
    */
    readonly match?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#max_items DataCloudflareAccessRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * The action to apply to a matched request.
    * Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#mode DataCloudflareAccessRules#mode}
    */
    readonly mode?: string;
    /**
    * Defines the string to search for in the notes of existing IP Access rules.
    * Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#notes DataCloudflareAccessRules#notes}
    */
    readonly notes?: string;
    /**
    * Defines the field used to sort returned rules.
    * Available values: "configuration.target", "configuration.value", "mode".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#order DataCloudflareAccessRules#order}
    */
    readonly order?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#zone_id DataCloudflareAccessRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareAccessRulesConfiguration {
    /**
    * Defines the target to search in existing rules.
    * Available values: "ip", "ip_range", "asn", "country".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#target DataCloudflareAccessRules#target}
    */
    readonly target?: string;
    /**
    * Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`.
    * Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#value DataCloudflareAccessRules#value}
    */
    readonly value?: string;
}
export declare function dataCloudflareAccessRulesConfigurationToTerraform(struct?: DataCloudflareAccessRulesConfiguration | cdktf.IResolvable): any;
export declare function dataCloudflareAccessRulesConfigurationToHclTerraform(struct?: DataCloudflareAccessRulesConfiguration | cdktf.IResolvable): any;
export declare class DataCloudflareAccessRulesConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRulesConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccessRulesConfiguration | cdktf.IResolvable | undefined);
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
export interface DataCloudflareAccessRulesResultConfiguration {
}
export declare function dataCloudflareAccessRulesResultConfigurationToTerraform(struct?: DataCloudflareAccessRulesResultConfiguration): any;
export declare function dataCloudflareAccessRulesResultConfigurationToHclTerraform(struct?: DataCloudflareAccessRulesResultConfiguration): any;
export declare class DataCloudflareAccessRulesResultConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRulesResultConfiguration | undefined;
    set internalValue(value: DataCloudflareAccessRulesResultConfiguration | undefined);
    get target(): any;
    get value(): any;
}
export interface DataCloudflareAccessRulesResultScope {
}
export declare function dataCloudflareAccessRulesResultScopeToTerraform(struct?: DataCloudflareAccessRulesResultScope): any;
export declare function dataCloudflareAccessRulesResultScopeToHclTerraform(struct?: DataCloudflareAccessRulesResultScope): any;
export declare class DataCloudflareAccessRulesResultScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccessRulesResultScope | undefined;
    set internalValue(value: DataCloudflareAccessRulesResultScope | undefined);
    get email(): any;
    get id(): any;
    get type(): any;
}
export interface DataCloudflareAccessRulesResult {
}
export declare function dataCloudflareAccessRulesResultToTerraform(struct?: DataCloudflareAccessRulesResult): any;
export declare function dataCloudflareAccessRulesResultToHclTerraform(struct?: DataCloudflareAccessRulesResult): any;
export declare class DataCloudflareAccessRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccessRulesResult | undefined;
    set internalValue(value: DataCloudflareAccessRulesResult | undefined);
    get allowedModes(): any;
    private _configuration;
    get configuration(): DataCloudflareAccessRulesResultConfigurationOutputReference;
    get createdOn(): any;
    get id(): any;
    get mode(): any;
    get modifiedOn(): any;
    get notes(): any;
    private _scope;
    get scope(): DataCloudflareAccessRulesResultScopeOutputReference;
}
export declare class DataCloudflareAccessRulesResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareAccessRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules cloudflare_access_rules}
*/
export declare class DataCloudflareAccessRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_access_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccessRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccessRules to import
    * @param importFromId The id of the existing DataCloudflareAccessRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccessRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules cloudflare_access_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccessRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccessRulesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _configuration;
    get configuration(): DataCloudflareAccessRulesConfigurationOutputReference;
    putConfiguration(value: DataCloudflareAccessRulesConfiguration): void;
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
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
    private _result;
    get result(): DataCloudflareAccessRulesResultList;
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
