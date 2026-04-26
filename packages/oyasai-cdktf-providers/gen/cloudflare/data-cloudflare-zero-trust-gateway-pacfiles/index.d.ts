import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayPacfilesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_pacfiles#account_id DataCloudflareZeroTrustGatewayPacfiles#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_pacfiles#max_items DataCloudflareZeroTrustGatewayPacfiles#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustGatewayPacfilesResult {
}
export declare function dataCloudflareZeroTrustGatewayPacfilesResultToTerraform(struct?: DataCloudflareZeroTrustGatewayPacfilesResult): any;
export declare function dataCloudflareZeroTrustGatewayPacfilesResultToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPacfilesResult): any;
export declare class DataCloudflareZeroTrustGatewayPacfilesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayPacfilesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayPacfilesResult | undefined);
    get createdAt(): any;
    get description(): any;
    get id(): any;
    get name(): any;
    get slug(): any;
    get updatedAt(): any;
    get url(): any;
}
export declare class DataCloudflareZeroTrustGatewayPacfilesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayPacfilesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_pacfiles cloudflare_zero_trust_gateway_pacfiles}
*/
export declare class DataCloudflareZeroTrustGatewayPacfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_pacfiles";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPacfiles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPacfiles to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPacfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_pacfiles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPacfiles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_pacfiles cloudflare_zero_trust_gateway_pacfiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayPacfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewayPacfilesConfig);
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
    get result(): DataCloudflareZeroTrustGatewayPacfilesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
