import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingAddressConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#account_id DataCloudflareEmailRoutingAddress#account_id}
    */
    readonly accountId?: string;
    /**
    * Destination address identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#destination_address_identifier DataCloudflareEmailRoutingAddress#destination_address_identifier}
    */
    readonly destinationAddressIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}
    */
    readonly filter?: DataCloudflareEmailRoutingAddressFilter;
}
export interface DataCloudflareEmailRoutingAddressFilter {
    /**
    * Sorts results in an ascending or descending order.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#direction DataCloudflareEmailRoutingAddress#direction}
    */
    readonly direction?: string;
    /**
    * Filter by verified destination addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#verified DataCloudflareEmailRoutingAddress#verified}
    */
    readonly verified?: boolean | cdktf.IResolvable;
}
export declare function dataCloudflareEmailRoutingAddressFilterToTerraform(struct?: DataCloudflareEmailRoutingAddressFilter | cdktf.IResolvable): any;
export declare function dataCloudflareEmailRoutingAddressFilterToHclTerraform(struct?: DataCloudflareEmailRoutingAddressFilter | cdktf.IResolvable): any;
export declare class DataCloudflareEmailRoutingAddressFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingAddressFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareEmailRoutingAddressFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _verified?;
    get verified(): boolean | cdktf.IResolvable;
    set verified(value: boolean | cdktf.IResolvable);
    resetVerified(): void;
    get verifiedInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address cloudflare_email_routing_address}
*/
export declare class DataCloudflareEmailRoutingAddress extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_address";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingAddress to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingAddress to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_address cloudflare_email_routing_address} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingAddressConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingAddressConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    private _destinationAddressIdentifier?;
    get destinationAddressIdentifier(): string;
    set destinationAddressIdentifier(value: string);
    resetDestinationAddressIdentifier(): void;
    get destinationAddressIdentifierInput(): string;
    get email(): any;
    private _filter;
    get filter(): DataCloudflareEmailRoutingAddressFilterOutputReference;
    putFilter(value: DataCloudflareEmailRoutingAddressFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get modified(): any;
    get tag(): any;
    get verified(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
