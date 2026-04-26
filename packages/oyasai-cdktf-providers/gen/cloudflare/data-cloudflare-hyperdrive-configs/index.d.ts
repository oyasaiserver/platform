import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareHyperdriveConfigsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Define configurations using a unique string identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs#account_id DataCloudflareHyperdriveConfigs#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs#max_items DataCloudflareHyperdriveConfigs#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareHyperdriveConfigsResultCaching {
}
export declare function dataCloudflareHyperdriveConfigsResultCachingToTerraform(struct?: DataCloudflareHyperdriveConfigsResultCaching): any;
export declare function dataCloudflareHyperdriveConfigsResultCachingToHclTerraform(struct?: DataCloudflareHyperdriveConfigsResultCaching): any;
export declare class DataCloudflareHyperdriveConfigsResultCachingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigsResultCaching | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigsResultCaching | undefined);
    get disabled(): any;
    get maxAge(): any;
    get staleWhileRevalidate(): any;
}
export interface DataCloudflareHyperdriveConfigsResultMtls {
}
export declare function dataCloudflareHyperdriveConfigsResultMtlsToTerraform(struct?: DataCloudflareHyperdriveConfigsResultMtls): any;
export declare function dataCloudflareHyperdriveConfigsResultMtlsToHclTerraform(struct?: DataCloudflareHyperdriveConfigsResultMtls): any;
export declare class DataCloudflareHyperdriveConfigsResultMtlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigsResultMtls | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigsResultMtls | undefined);
    get caCertificateId(): any;
    get mtlsCertificateId(): any;
    get sslmode(): any;
}
export interface DataCloudflareHyperdriveConfigsResultOrigin {
}
export declare function dataCloudflareHyperdriveConfigsResultOriginToTerraform(struct?: DataCloudflareHyperdriveConfigsResultOrigin): any;
export declare function dataCloudflareHyperdriveConfigsResultOriginToHclTerraform(struct?: DataCloudflareHyperdriveConfigsResultOrigin): any;
export declare class DataCloudflareHyperdriveConfigsResultOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigsResultOrigin | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigsResultOrigin | undefined);
    get accessClientId(): any;
    get accessClientSecret(): any;
    get database(): any;
    get host(): any;
    get password(): any;
    get port(): any;
    get scheme(): any;
    get serviceId(): any;
    get user(): any;
}
export interface DataCloudflareHyperdriveConfigsResult {
}
export declare function dataCloudflareHyperdriveConfigsResultToTerraform(struct?: DataCloudflareHyperdriveConfigsResult): any;
export declare function dataCloudflareHyperdriveConfigsResultToHclTerraform(struct?: DataCloudflareHyperdriveConfigsResult): any;
export declare class DataCloudflareHyperdriveConfigsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareHyperdriveConfigsResult | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigsResult | undefined);
    private _caching;
    get caching(): DataCloudflareHyperdriveConfigsResultCachingOutputReference;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _mtls;
    get mtls(): DataCloudflareHyperdriveConfigsResultMtlsOutputReference;
    get name(): any;
    private _origin;
    get origin(): DataCloudflareHyperdriveConfigsResultOriginOutputReference;
    get originConnectionLimit(): any;
}
export declare class DataCloudflareHyperdriveConfigsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareHyperdriveConfigsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs cloudflare_hyperdrive_configs}
*/
export declare class DataCloudflareHyperdriveConfigs extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_hyperdrive_configs";
    /**
    * Generates CDKTF code for importing a DataCloudflareHyperdriveConfigs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHyperdriveConfigs to import
    * @param importFromId The id of the existing DataCloudflareHyperdriveConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHyperdriveConfigs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs cloudflare_hyperdrive_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHyperdriveConfigsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareHyperdriveConfigsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareHyperdriveConfigsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
