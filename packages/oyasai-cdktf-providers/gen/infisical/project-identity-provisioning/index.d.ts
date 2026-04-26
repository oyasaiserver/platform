import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectIdentityProvisioningConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether the identity has delete protection enabled. Defaults to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#has_delete_protection ProjectIdentityProvisioning#has_delete_protection}
    */
    readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
    /**
    * The metadata associated with this identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#metadata ProjectIdentityProvisioning#metadata}
    */
    readonly metadata?: ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable;
    /**
    * The name of the identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#name ProjectIdentityProvisioning#name}
    */
    readonly name: string;
    /**
    * The ID of the project that owns this identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#project_id ProjectIdentityProvisioning#project_id}
    */
    readonly projectId: string;
}
export interface ProjectIdentityProvisioningMetadata {
    /**
    * The key of the metadata entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#key ProjectIdentityProvisioning#key}
    */
    readonly key: string;
    /**
    * The value of the metadata entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#value ProjectIdentityProvisioning#value}
    */
    readonly value: string;
}
export declare function projectIdentityProvisioningMetadataToTerraform(struct?: ProjectIdentityProvisioningMetadata | cdktf.IResolvable): any;
export declare function projectIdentityProvisioningMetadataToHclTerraform(struct?: ProjectIdentityProvisioningMetadata | cdktf.IResolvable): any;
export declare class ProjectIdentityProvisioningMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectIdentityProvisioningMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectIdentityProvisioningMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class ProjectIdentityProvisioningMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectIdentityProvisioningMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning infisical_project_identity_provisioning}
*/
export declare class ProjectIdentityProvisioning extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_identity_provisioning";
    /**
    * Generates CDKTF code for importing a ProjectIdentityProvisioning resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentityProvisioning to import
    * @param importFromId The id of the existing ProjectIdentityProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentityProvisioning to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_provisioning infisical_project_identity_provisioning} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentityProvisioningConfig
    */
    constructor(scope: Construct, id: string, config: ProjectIdentityProvisioningConfig);
    get authMethods(): any;
    private _hasDeleteProtection?;
    get hasDeleteProtection(): boolean | cdktf.IResolvable;
    set hasDeleteProtection(value: boolean | cdktf.IResolvable);
    resetHasDeleteProtection(): void;
    get hasDeleteProtectionInput(): any;
    get id(): any;
    private _metadata;
    get metadata(): ProjectIdentityProvisioningMetadataList;
    putMetadata(value: ProjectIdentityProvisioningMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
