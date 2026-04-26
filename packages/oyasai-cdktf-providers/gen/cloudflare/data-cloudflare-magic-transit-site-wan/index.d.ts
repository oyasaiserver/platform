import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicTransitSiteWanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan#account_id DataCloudflareMagicTransitSiteWan#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan#site_id DataCloudflareMagicTransitSiteWan#site_id}
    */
    readonly siteId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan#wan_id DataCloudflareMagicTransitSiteWan#wan_id}
    */
    readonly wanId: string;
}
export interface DataCloudflareMagicTransitSiteWanStaticAddressing {
}
export declare function dataCloudflareMagicTransitSiteWanStaticAddressingToTerraform(struct?: DataCloudflareMagicTransitSiteWanStaticAddressing): any;
export declare function dataCloudflareMagicTransitSiteWanStaticAddressingToHclTerraform(struct?: DataCloudflareMagicTransitSiteWanStaticAddressing): any;
export declare class DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicTransitSiteWanStaticAddressing | undefined;
    set internalValue(value: DataCloudflareMagicTransitSiteWanStaticAddressing | undefined);
    get address(): any;
    get gatewayAddress(): any;
    get secondaryAddress(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
export declare class DataCloudflareMagicTransitSiteWan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_wan";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteWan to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteWan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteWanConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteWanConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get healthCheckRate(): any;
    get id(): any;
    get name(): any;
    get physport(): any;
    get priority(): any;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    private _staticAddressing;
    get staticAddressing(): DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference;
    get vlanTag(): any;
    private _wanId?;
    get wanId(): string;
    set wanId(value: string);
    get wanIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
