import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#auth_id_characteristics ApiShield#auth_id_characteristics}
    */
    readonly authIdCharacteristics: ApiShieldAuthIdCharacteristics[] | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#zone_id ApiShield#zone_id}
    */
    readonly zoneId: string;
}
export interface ApiShieldAuthIdCharacteristics {
    /**
    * The name of the characteristic field, i.e., the header or cookie name. When using type "jwt", this must be a claim location expressed as `$(token_config_id):$(json_path)`, where `token_config_id` is the ID of the token configuration used in validating the JWT, and `json_path` is a RFC 9535 JSONPath expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#name ApiShield#name}
    */
    readonly name: string;
    /**
    * The type of characteristic.
    * Available values: "header", "cookie", "jwt".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#type ApiShield#type}
    */
    readonly type: string;
}
export declare function apiShieldAuthIdCharacteristicsToTerraform(struct?: ApiShieldAuthIdCharacteristics | cdktf.IResolvable): any;
export declare function apiShieldAuthIdCharacteristicsToHclTerraform(struct?: ApiShieldAuthIdCharacteristics | cdktf.IResolvable): any;
export declare class ApiShieldAuthIdCharacteristicsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiShieldAuthIdCharacteristics | cdktf.IResolvable | undefined;
    set internalValue(value: ApiShieldAuthIdCharacteristics | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class ApiShieldAuthIdCharacteristicsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ApiShieldAuthIdCharacteristics[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ApiShieldAuthIdCharacteristicsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield cloudflare_api_shield}
*/
export declare class ApiShield extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield";
    /**
    * Generates CDKTF code for importing a ApiShield resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShield to import
    * @param importFromId The id of the existing ApiShield that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShield to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield cloudflare_api_shield} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldConfig);
    private _authIdCharacteristics;
    get authIdCharacteristics(): ApiShieldAuthIdCharacteristicsList;
    putAuthIdCharacteristics(value: ApiShieldAuthIdCharacteristics[] | cdktf.IResolvable): void;
    get authIdCharacteristicsInput(): any;
    get id(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
