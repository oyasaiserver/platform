import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuthenticatedOriginPullsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}
    */
    readonly config: AuthenticatedOriginPullsConfigA[] | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}
    */
    readonly zoneId: string;
}
export interface AuthenticatedOriginPullsConfigA {
    /**
    * Certificate identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#cert_id AuthenticatedOriginPulls#cert_id}
    */
    readonly certId?: string;
    /**
    * Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#enabled AuthenticatedOriginPulls#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The hostname on the origin for which the client certificate uploaded will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}
    */
    readonly hostname?: string;
}
export declare function authenticatedOriginPullsConfigAToTerraform(struct?: AuthenticatedOriginPullsConfigA | cdktf.IResolvable): any;
export declare function authenticatedOriginPullsConfigAToHclTerraform(struct?: AuthenticatedOriginPullsConfigA | cdktf.IResolvable): any;
export declare class AuthenticatedOriginPullsConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AuthenticatedOriginPullsConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: AuthenticatedOriginPullsConfigA | cdktf.IResolvable | undefined);
    private _certId?;
    get certId(): string;
    set certId(value: string);
    resetCertId(): void;
    get certIdInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
}
export declare class AuthenticatedOriginPullsConfigAList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AuthenticatedOriginPullsConfigA[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AuthenticatedOriginPullsConfigAOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}
*/
export declare class AuthenticatedOriginPulls extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls";
    /**
    * Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuthenticatedOriginPulls to import
    * @param importFromId The id of the existing AuthenticatedOriginPulls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuthenticatedOriginPulls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuthenticatedOriginPullsConfig
    */
    constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsConfig);
    get certId(): any;
    get certStatus(): any;
    get certUpdatedAt(): any;
    get certUploadedOn(): any;
    get certificate(): any;
    private _config;
    get config(): AuthenticatedOriginPullsConfigAList;
    putConfig(value: AuthenticatedOriginPullsConfigA[] | cdktf.IResolvable): void;
    get configInput(): any;
    get createdAt(): any;
    get enabled(): any;
    get expiresOn(): any;
    get hostname(): any;
    get id(): any;
    get issuer(): any;
    get privateKey(): any;
    get serialNumber(): any;
    get signature(): any;
    get status(): any;
    get updatedAt(): any;
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
