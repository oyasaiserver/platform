import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountDnsSettingsInternalViewConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#account_id DataCloudflareAccountDnsSettingsInternalView#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}
    */
    readonly filter?: DataCloudflareAccountDnsSettingsInternalViewFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#view_id DataCloudflareAccountDnsSettingsInternalView#view_id}
    */
    readonly viewId?: string;
}
export interface DataCloudflareAccountDnsSettingsInternalViewFilterName {
    /**
    * Substring of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#contains DataCloudflareAccountDnsSettingsInternalView#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#endswith DataCloudflareAccountDnsSettingsInternalView#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#exact DataCloudflareAccountDnsSettingsInternalView#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS view name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#startswith DataCloudflareAccountDnsSettingsInternalView#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewFilterName | cdktf.IResolvable): any;
export declare function dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewFilterName | cdktf.IResolvable): any;
export declare class DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsInternalViewFilterName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsInternalViewFilterName | cdktf.IResolvable | undefined);
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
export interface DataCloudflareAccountDnsSettingsInternalViewFilter {
    /**
    * Direction to order DNS views in.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#direction DataCloudflareAccountDnsSettingsInternalView#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#match DataCloudflareAccountDnsSettingsInternalView#match}
    */
    readonly match?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}
    */
    readonly name?: DataCloudflareAccountDnsSettingsInternalViewFilterName;
    /**
    * Field to order DNS views by.
    * Available values: "name", "created_on", "modified_on".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#order DataCloudflareAccountDnsSettingsInternalView#order}
    */
    readonly order?: string;
    /**
    * A zone ID that exists in the zones list for the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#zone_id DataCloudflareAccountDnsSettingsInternalView#zone_id}
    */
    readonly zoneId?: string;
    /**
    * A zone name that exists in the zones list for the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#zone_name DataCloudflareAccountDnsSettingsInternalView#zone_name}
    */
    readonly zoneName?: string;
}
export declare function dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform(struct?: DataCloudflareAccountDnsSettingsInternalViewFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountDnsSettingsInternalViewFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAccountDnsSettingsInternalViewFilter | cdktf.IResolvable | undefined);
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
    private _name;
    get name(): DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference;
    putName(value: DataCloudflareAccountDnsSettingsInternalViewFilterName): void;
    resetName(): void;
    get nameInput(): any;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}
*/
export declare class DataCloudflareAccountDnsSettingsInternalView extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_dns_settings_internal_view";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalView to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettingsInternalView that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalView to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsInternalViewConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountDnsSettingsInternalViewConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdTime(): any;
    private _filter;
    get filter(): DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference;
    putFilter(value: DataCloudflareAccountDnsSettingsInternalViewFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get modifiedTime(): any;
    get name(): any;
    private _viewId?;
    get viewId(): string;
    set viewId(value: string);
    resetViewId(): void;
    get viewIdInput(): string;
    get zones(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
