import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMtlsCertificatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificates#account_id DataCloudflareMtlsCertificates#account_id}
    */
    readonly accountId: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificates#max_items DataCloudflareMtlsCertificates#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareMtlsCertificatesResult {
}
export declare function dataCloudflareMtlsCertificatesResultToTerraform(struct?: DataCloudflareMtlsCertificatesResult): any;
export declare function dataCloudflareMtlsCertificatesResultToHclTerraform(struct?: DataCloudflareMtlsCertificatesResult): any;
export declare class DataCloudflareMtlsCertificatesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareMtlsCertificatesResult | undefined;
    set internalValue(value: DataCloudflareMtlsCertificatesResult | undefined);
    get ca(): any;
    get certificates(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    get name(): any;
    get serialNumber(): any;
    get signature(): any;
    get uploadedOn(): any;
}
export declare class DataCloudflareMtlsCertificatesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareMtlsCertificatesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificates cloudflare_mtls_certificates}
*/
export declare class DataCloudflareMtlsCertificates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_mtls_certificates";
    /**
    * Generates CDKTF code for importing a DataCloudflareMtlsCertificates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMtlsCertificates to import
    * @param importFromId The id of the existing DataCloudflareMtlsCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMtlsCertificates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificates cloudflare_mtls_certificates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMtlsCertificatesConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMtlsCertificatesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareMtlsCertificatesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
