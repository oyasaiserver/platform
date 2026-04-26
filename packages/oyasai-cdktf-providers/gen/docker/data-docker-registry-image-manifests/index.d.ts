import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerRegistryImageManifestsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}
    */
    readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker image, including any tags. e.g. `alpine:latest`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}
    */
    readonly name: string;
    /**
    * auth_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}
    */
    readonly authConfig?: DataDockerRegistryImageManifestsAuthConfig;
}
export interface DataDockerRegistryImageManifestsManifests {
}
export declare function dataDockerRegistryImageManifestsManifestsToTerraform(struct?: DataDockerRegistryImageManifestsManifests): any;
export declare function dataDockerRegistryImageManifestsManifestsToHclTerraform(struct?: DataDockerRegistryImageManifestsManifests): any;
export declare class DataDockerRegistryImageManifestsManifestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataDockerRegistryImageManifestsManifests | undefined;
    set internalValue(value: DataDockerRegistryImageManifestsManifests | undefined);
    get architecture(): any;
    get mediaType(): any;
    get os(): any;
    get sha256Digest(): any;
}
export declare class DataDockerRegistryImageManifestsManifestsList extends cdktf.ComplexList {
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
    get(index: number): DataDockerRegistryImageManifestsManifestsOutputReference;
}
export interface DataDockerRegistryImageManifestsAuthConfig {
    /**
    * The address of the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}
    */
    readonly address: string;
    /**
    * The password for the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}
    */
    readonly password?: string;
    /**
    * The username for the Docker registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}
    */
    readonly username?: string;
}
export declare function dataDockerRegistryImageManifestsAuthConfigToTerraform(struct?: DataDockerRegistryImageManifestsAuthConfigOutputReference | DataDockerRegistryImageManifestsAuthConfig): any;
export declare function dataDockerRegistryImageManifestsAuthConfigToHclTerraform(struct?: DataDockerRegistryImageManifestsAuthConfigOutputReference | DataDockerRegistryImageManifestsAuthConfig): any;
export declare class DataDockerRegistryImageManifestsAuthConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataDockerRegistryImageManifestsAuthConfig | undefined;
    set internalValue(value: DataDockerRegistryImageManifestsAuthConfig | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests}
*/
export declare class DataDockerRegistryImageManifests extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_registry_image_manifests";
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageManifests to import
    * @param importFromId The id of the existing DataDockerRegistryImageManifests that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageManifestsConfig
    */
    constructor(scope: Construct, id: string, config: DataDockerRegistryImageManifestsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _insecureSkipVerify?;
    get insecureSkipVerify(): boolean | cdktf.IResolvable;
    set insecureSkipVerify(value: boolean | cdktf.IResolvable);
    resetInsecureSkipVerify(): void;
    get insecureSkipVerifyInput(): any;
    private _manifests;
    get manifests(): DataDockerRegistryImageManifestsManifestsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _authConfig;
    get authConfig(): DataDockerRegistryImageManifestsAuthConfigOutputReference;
    putAuthConfig(value: DataDockerRegistryImageManifestsAuthConfig): void;
    resetAuthConfig(): void;
    get authConfigInput(): DataDockerRegistryImageManifestsAuthConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
