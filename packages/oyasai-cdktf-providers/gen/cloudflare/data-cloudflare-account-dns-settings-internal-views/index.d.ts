import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountDnsSettingsInternalViewsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#account_id DataCloudflareAccountDnsSettingsInternalViews#account_id}
    */
    readonly accountId?: string;
    /**
    * Direction to order DNS views in.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#direction DataCloudflareAccountDnsSettingsInternalViews#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#match DataCloudflareAccountDnsSettingsInternalViews#match}
    */
    readonly match?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#max_items DataCloudflareAccountDnsSettingsInternalViews#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}
    */
    readonly name?: DataCloudflareAccountDnsSettingsInternalViewsName;
    /**
    * Field to order DNS views by.
    * Available values: "name", "created_on", "modified_on".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#order DataCloudflareAccountDnsSettingsInternalViews#order}
    */
    readonly order?: string;
    /**
    * A zone ID that exists in the zones list for the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#zone_id DataCloudflareAccountDnsSettingsInternalViews#zone_id}
    */
    readonly zoneId?: string;
    /**
    * A zone name that exists in the zones list for the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#zone_name DataCloudflareAccountDnsSettingsInternalViews#zone_name}
    */
    readonly zoneName?: string;
}
export interface DataCloudflareAccountDnsSettingsInternalViewsName {
    /**
    * Substring of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#contains DataCloudflareAccountDnsSettingsInternalViews#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#endswith DataCloudflareAccountDnsSettingsInternalViews#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#exact DataCloudflareAccountDnsSettingsInternalViews#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#startswith DataCloudflareAccountDnsSettingsInternalViews#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareAccountDnsSettingsInternalViewsNameToTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewsName | cdktf.IResolvable): any;
export declare function dataCloudflareAccountDnsSettingsInternalViewsNameToHclTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewsName | cdktf.IResolvable): any;
export declare class DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsInternalViewsName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsInternalViewsName | cdktf.IResolvable | undefined);
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endswith?;
    get endswith(): string;
    set endswith(value: string);
    resetEndswith(): void;
    get endswithInput(): string;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _startswith?;
    get startswith(): string;
    set startswith(value: string);
    resetStartswith(): void;
    get startswithInput(): string;
}
export interface DataCloudflareAccountDnsSettingsInternalViewsResult {
}
export declare function dataCloudflareAccountDnsSettingsInternalViewsResultToTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewsResult): any;
export declare function dataCloudflareAccountDnsSettingsInternalViewsResultToHclTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewsResult): any;
export declare class DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAccountDnsSettingsInternalViewsResult | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsInternalViewsResult | undefined);
    get createdTime(): any;
    get id(): any;
    get modifiedTime(): any;
    get name(): any;
    get zones(): any;
}
export declare class DataCloudflareAccountDnsSettingsInternalViewsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views}
*/
export declare class DataCloudflareAccountDnsSettingsInternalViews extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_dns_settings_internal_views";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalViews to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettingsInternalViews that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalViews to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsInternalViewsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountDnsSettingsInternalViewsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
    private _name;
    get name(): DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference;
    putName(value: DataCloudflareAccountDnsSettingsInternalViewsName): void;
    resetName(): void;
    get nameInput(): any;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareAccountDnsSettingsInternalViewsResultList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    private _zoneName?;
    get zoneName(): string;
    set zoneName(value: string);
    resetZoneName(): void;
    get zoneNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
