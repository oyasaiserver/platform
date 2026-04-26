import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether the identity has delete protection, defaults to false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#has_delete_protection Identity#has_delete_protection}
    */
    readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
    /**
    * The metadata associated with this identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#metadata Identity#metadata}
    */
    readonly metadata?: IdentityMetadata[] | cdktf.IResolvable;
    /**
    * The name for the identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#name Identity#name}
    */
    readonly name: string;
    /**
    * The ID of the organization for the identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#org_id Identity#org_id}
    */
    readonly orgId: string;
    /**
    * The role for the identity. Available default role options are 'admin', 'member', and 'no-access'. If you've created custom roles, you can use their slugs as well.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#role Identity#role}
    */
    readonly role: string;
}
export interface IdentityMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#key Identity#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#value Identity#value}
    */
    readonly value: string;
}
export declare function identityMetadataToTerraform(struct?: IdentityMetadata | cdktf.IResolvable): any;
export declare function identityMetadataToHclTerraform(struct?: IdentityMetadata | cdktf.IResolvable): any;
export declare class IdentityMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IdentityMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: IdentityMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class IdentityMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IdentityMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IdentityMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity infisical_identity}
*/
export declare class Identity extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity";
    /**
    * Generates CDKTF code for importing a Identity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Identity to import
    * @param importFromId The id of the existing Identity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Identity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity infisical_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityConfig
    */
    constructor(scope: Construct, id: string, config: IdentityConfig);
    get authModes(): any;
    private _hasDeleteProtection?;
    get hasDeleteProtection(): boolean | cdktf.IResolvable;
    set hasDeleteProtection(value: boolean | cdktf.IResolvable);
    resetHasDeleteProtection(): void;
    get hasDeleteProtectionInput(): any;
    get id(): any;
    private _metadata;
    get metadata(): IdentityMetadataList;
    putMetadata(value: IdentityMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _orgId?;
    get orgId(): string;
    set orgId(value: string);
    get orgIdInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
