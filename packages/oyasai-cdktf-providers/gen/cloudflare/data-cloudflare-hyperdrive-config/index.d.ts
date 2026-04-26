import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareHyperdriveConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Define configurations using a unique string identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config#account_id DataCloudflareHyperdriveConfig#account_id}
    */
    readonly accountId?: string;
    /**
    * Define configurations using a unique string identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config#hyperdrive_id DataCloudflareHyperdriveConfig#hyperdrive_id}
    */
    readonly hyperdriveId: string;
}
export interface DataCloudflareHyperdriveConfigCaching {
}
export declare function dataCloudflareHyperdriveConfigCachingToTerraform(struct?: DataCloudflareHyperdriveConfigCaching): any;
export declare function dataCloudflareHyperdriveConfigCachingToHclTerraform(struct?: DataCloudflareHyperdriveConfigCaching): any;
export declare class DataCloudflareHyperdriveConfigCachingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigCaching | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigCaching | undefined);
    get disabled(): any;
    get maxAge(): any;
    get staleWhileRevalidate(): any;
}
export interface DataCloudflareHyperdriveConfigMtls {
}
export declare function dataCloudflareHyperdriveConfigMtlsToTerraform(struct?: DataCloudflareHyperdriveConfigMtls): any;
export declare function dataCloudflareHyperdriveConfigMtlsToHclTerraform(struct?: DataCloudflareHyperdriveConfigMtls): any;
export declare class DataCloudflareHyperdriveConfigMtlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigMtls | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigMtls | undefined);
    get caCertificateId(): any;
    get mtlsCertificateId(): any;
    get sslmode(): any;
}
export interface DataCloudflareHyperdriveConfigOrigin {
}
export declare function dataCloudflareHyperdriveConfigOriginToTerraform(struct?: DataCloudflareHyperdriveConfigOrigin): any;
export declare function dataCloudflareHyperdriveConfigOriginToHclTerraform(struct?: DataCloudflareHyperdriveConfigOrigin): any;
export declare class DataCloudflareHyperdriveConfigOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHyperdriveConfigOrigin | undefined;
    set internalValue(value: DataCloudflareHyperdriveConfigOrigin | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config}
*/
export declare class DataCloudflareHyperdriveConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_hyperdrive_config";
    /**
    * Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHyperdriveConfig to import
    * @param importFromId The id of the existing DataCloudflareHyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHyperdriveConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHyperdriveConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareHyperdriveConfigConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _caching;
    get caching(): DataCloudflareHyperdriveConfigCachingOutputReference;
    get createdOn(): any;
    private _hyperdriveId?;
    get hyperdriveId(): string;
    set hyperdriveId(value: string);
    get hyperdriveIdInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _mtls;
    get mtls(): DataCloudflareHyperdriveConfigMtlsOutputReference;
    get name(): any;
    private _origin;
    get origin(): DataCloudflareHyperdriveConfigOriginOutputReference;
    get originConnectionLimit(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
