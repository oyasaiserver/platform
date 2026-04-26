import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomOriginTrustStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#custom_origin_trust_store_id DataCloudflareCustomOriginTrustStore#custom_origin_trust_store_id}
    */
    readonly customOriginTrustStoreId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}
    */
    readonly filter?: DataCloudflareCustomOriginTrustStoreFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#zone_id DataCloudflareCustomOriginTrustStore#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomOriginTrustStoreFilter {
    /**
    * Limit to the number of records returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#limit DataCloudflareCustomOriginTrustStore#limit}
    */
    readonly limit?: number;
    /**
    * Offset the results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#offset DataCloudflareCustomOriginTrustStore#offset}
    */
    readonly offset?: number;
}
export declare function dataCloudflareCustomOriginTrustStoreFilterToTerraform(struct?: DataCloudflareCustomOriginTrustStoreFilter | cdktf.IResolvable): any;
export declare function dataCloudflareCustomOriginTrustStoreFilterToHclTerraform(struct?: DataCloudflareCustomOriginTrustStoreFilter | cdktf.IResolvable): any;
export declare class DataCloudflareCustomOriginTrustStoreFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomOriginTrustStoreFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCustomOriginTrustStoreFilter | cdktf.IResolvable | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    resetLimit(): void;
    get limitInput(): number;
    private _offset?;
    get offset(): number;
    set offset(value: number);
    resetOffset(): void;
    get offsetInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store}
*/
export declare class DataCloudflareCustomOriginTrustStore extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_origin_trust_store";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomOriginTrustStore to import
    * @param importFromId The id of the existing DataCloudflareCustomOriginTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomOriginTrustStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomOriginTrustStoreConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomOriginTrustStoreConfig);
    get certificate(): any;
    private _customOriginTrustStoreId?;
    get customOriginTrustStoreId(): string;
    set customOriginTrustStoreId(value: string);
    resetCustomOriginTrustStoreId(): void;
    get customOriginTrustStoreIdInput(): string;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareCustomOriginTrustStoreFilterOutputReference;
    putFilter(value: DataCloudflareCustomOriginTrustStoreFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get issuer(): any;
    get signature(): any;
    get status(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
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
