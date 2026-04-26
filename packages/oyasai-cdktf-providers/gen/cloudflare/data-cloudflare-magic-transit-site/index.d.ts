import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#account_id DataCloudflareMagicTransitSite#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#filter DataCloudflareMagicTransitSite#filter}
    */
    readonly filter?: DataCloudflareMagicTransitSiteFilter;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#site_id DataCloudflareMagicTransitSite#site_id}
    */
    readonly siteId?: string;
}
export interface DataCloudflareMagicTransitSiteFilter {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#connectorid DataCloudflareMagicTransitSite#connectorid}
    */
    readonly connectorid?: string;
}
export declare function dataCloudflareMagicTransitSiteFilterToTerraform(struct?: DataCloudflareMagicTransitSiteFilter | cdktf.IResolvable): any;
export declare function dataCloudflareMagicTransitSiteFilterToHclTerraform(struct?: DataCloudflareMagicTransitSiteFilter | cdktf.IResolvable): any;
export declare class DataCloudflareMagicTransitSiteFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteFilter | cdktf.IResolvable | undefined);
    private _connectorid?;
    get connectorid(): string;
    set connectorid(value: string);
    resetConnectorid(): void;
    get connectoridInput(): string;
}
export interface DataCloudflareMagicTransitSiteLocation {
}
export declare function dataCloudflareMagicTransitSiteLocationToTerraform(struct?: DataCloudflareMagicTransitSiteLocation): any;
export declare function dataCloudflareMagicTransitSiteLocationToHclTerraform(struct?: DataCloudflareMagicTransitSiteLocation): any;
export declare class DataCloudflareMagicTransitSiteLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteLocation | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteLocation | undefined);
    get lat(): any;
    get lon(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site cloudflare_magic_transit_site}
*/
export declare class DataCloudflareMagicTransitSite extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSite to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site cloudflare_magic_transit_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareMagicTransitSiteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get connectorId(): any;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareMagicTransitSiteFilterOutputReference;
    putFilter(value: DataCloudflareMagicTransitSiteFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get haMode(): any;
    get id(): any;
    private _location;
    get location(): DataCloudflareMagicTransitSiteLocationOutputReference;
    get name(): any;
    get secondaryConnectorId(): any;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
