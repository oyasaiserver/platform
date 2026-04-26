import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareKeylessCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificates#max_items DataCloudflareKeylessCertificates#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificates#zone_id DataCloudflareKeylessCertificates#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareKeylessCertificatesResultTunnel {
}
export declare function dataCloudflareKeylessCertificatesResultTunnelToTerraform(struct?: DataCloudflareKeylessCertificatesResultTunnel): any;
export declare function dataCloudflareKeylessCertificatesResultTunnelToHclTerraform(struct?: DataCloudflareKeylessCertificatesResultTunnel): any;
export declare class DataCloudflareKeylessCertificatesResultTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareKeylessCertificatesResultTunnel | undefined;
    set internalValue(value: DataCloudflareKeylessCertificatesResultTunnel | undefined);
    get privateIp(): any;
    get vnetId(): any;
}
export interface DataCloudflareKeylessCertificatesResult {
}
export declare function dataCloudflareKeylessCertificatesResultToTerraform(struct?: DataCloudflareKeylessCertificatesResult): any;
export declare function dataCloudflareKeylessCertificatesResultToHclTerraform(struct?: DataCloudflareKeylessCertificatesResult): any;
export declare class DataCloudflareKeylessCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareKeylessCertificatesResult | undefined;
    set internalValue(value: DataCloudflareKeylessCertificatesResult | undefined);
    get createdOn(): any;
    get enabled(): any;
    get host(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    get permissions(): any;
    get port(): any;
    get status(): any;
    private _tunnel;
    get tunnel(): DataCloudflareKeylessCertificatesResultTunnelOutputReference;
}
export declare class DataCloudflareKeylessCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareKeylessCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificates cloudflare_keyless_certificates}
*/
export declare class DataCloudflareKeylessCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_keyless_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareKeylessCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareKeylessCertificates to import
    * @param importFromId The id of the existing DataCloudflareKeylessCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareKeylessCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificates cloudflare_keyless_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareKeylessCertificatesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareKeylessCertificatesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareKeylessCertificatesResultList;
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
