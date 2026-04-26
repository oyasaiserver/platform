import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TokenValidationConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}
    */
    readonly credentials: TokenValidationConfigCredentials;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#description TokenValidationConfig#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#title TokenValidationConfig#title}
    */
    readonly title: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}
    */
    readonly tokenSources: string[];
    /**
    * Available values: "JWT".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#token_type TokenValidationConfig#token_type}
    */
    readonly tokenType: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#zone_id TokenValidationConfig#zone_id}
    */
    readonly zoneId?: string;
}
export interface TokenValidationConfigCredentialsKeys {
    /**
    * Algorithm
    * Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#alg TokenValidationConfig#alg}
    */
    readonly alg: string;
    /**
    * Curve
    * Available values: "P-256", "P-384".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#crv TokenValidationConfig#crv}
    */
    readonly crv?: string;
    /**
    * RSA exponent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#e TokenValidationConfig#e}
    */
    readonly e?: string;
    /**
    * Key ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#kid TokenValidationConfig#kid}
    */
    readonly kid: string;
    /**
    * Key Type
    * Available values: "RSA", "EC".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#kty TokenValidationConfig#kty}
    */
    readonly kty: string;
    /**
    * RSA modulus
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#n TokenValidationConfig#n}
    */
    readonly n?: string;
    /**
    * X EC coordinate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#x TokenValidationConfig#x}
    */
    readonly x?: string;
    /**
    * Y EC coordinate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#y TokenValidationConfig#y}
    */
    readonly y?: string;
}
export declare function tokenValidationConfigCredentialsKeysToTerraform(struct?: TokenValidationConfigCredentialsKeys | cdktf.IResolvable): any;
export declare function tokenValidationConfigCredentialsKeysToHclTerraform(struct?: TokenValidationConfigCredentialsKeys | cdktf.IResolvable): any;
export declare class TokenValidationConfigCredentialsKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TokenValidationConfigCredentialsKeys | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationConfigCredentialsKeys | cdktf.IResolvable | undefined);
    private _alg?;
    get alg(): string;
    set alg(value: string);
    get algInput(): string;
    private _crv?;
    get crv(): string;
    set crv(value: string);
    resetCrv(): void;
    get crvInput(): string;
    private _e?;
    get e(): string;
    set e(value: string);
    resetE(): void;
    get eInput(): string;
    private _kid?;
    get kid(): string;
    set kid(value: string);
    get kidInput(): string;
    private _kty?;
    get kty(): string;
    set kty(value: string);
    get ktyInput(): string;
    private _n?;
    get n(): string;
    set n(value: string);
    resetN(): void;
    get nInput(): string;
    private _x?;
    get x(): string;
    set x(value: string);
    resetX(): void;
    get xInput(): string;
    private _y?;
    get y(): string;
    set y(value: string);
    resetY(): void;
    get yInput(): string;
}
export declare class TokenValidationConfigCredentialsKeysList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TokenValidationConfigCredentialsKeys[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TokenValidationConfigCredentialsKeysOutputReference;
}
export interface TokenValidationConfigCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}
    */
    readonly keys: TokenValidationConfigCredentialsKeys[] | cdktf.IResolvable;
}
export declare function tokenValidationConfigCredentialsToTerraform(struct?: TokenValidationConfigCredentials | cdktf.IResolvable): any;
export declare function tokenValidationConfigCredentialsToHclTerraform(struct?: TokenValidationConfigCredentials | cdktf.IResolvable): any;
export declare class TokenValidationConfigCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TokenValidationConfigCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationConfigCredentials | cdktf.IResolvable | undefined);
    private _keys;
    get keys(): TokenValidationConfigCredentialsKeysList;
    putKeys(value: TokenValidationConfigCredentialsKeys[] | cdktf.IResolvable): void;
    get keysInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config}
*/
export declare class TokenValidationConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_token_validation_config";
    /**
    * Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TokenValidationConfig to import
    * @param importFromId The id of the existing TokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TokenValidationConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TokenValidationConfigConfig
    */
    constructor(scope: Construct, id: string, config: TokenValidationConfigConfig);
    get createdAt(): any;
    private _credentials;
    get credentials(): TokenValidationConfigCredentialsOutputReference;
    putCredentials(value: TokenValidationConfigCredentials): void;
    get credentialsInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    private _tokenSources?;
    get tokenSources(): string[];
    set tokenSources(value: string[]);
    get tokenSourcesInput(): string[];
    private _tokenType?;
    get tokenType(): string;
    set tokenType(value: string);
    get tokenTypeInput(): string;
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
