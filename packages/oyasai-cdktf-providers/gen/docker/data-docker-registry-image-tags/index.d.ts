import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerRegistryImageTagsConfig extends cdktf.TerraformMetaArguments {
    /**
    * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#insecure_skip_verify DataDockerRegistryImageTags#insecure_skip_verify}
    */
    readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker image repository, including any tag or digest. For example, `alpine:latest`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#name DataDockerRegistryImageTags#name}
    */
    readonly name: string;
    /**
    * If `true`, only stable semantic version tags are returned. Prerelease tags such as `1.2.3-rc.1` are excluded as well as any other tags that do not conform to the semantic versioning specification. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#strict_semver DataDockerRegistryImageTags#strict_semver}
    */
    readonly strictSemver?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags}
*/
export declare class DataDockerRegistryImageTags extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_registry_image_tags";
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageTags resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageTags to import
    * @param importFromId The id of the existing DataDockerRegistryImageTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageTags to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageTagsConfig
    */
    constructor(scope: Construct, id: string, config: DataDockerRegistryImageTagsConfig);
    get id(): any;
    private _insecureSkipVerify?;
    get insecureSkipVerify(): boolean | cdktf.IResolvable;
    set insecureSkipVerify(value: boolean | cdktf.IResolvable);
    resetInsecureSkipVerify(): void;
    get insecureSkipVerifyInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _strictSemver?;
    get strictSemver(): boolean | cdktf.IResolvable;
    set strictSemver(value: boolean | cdktf.IResolvable);
    resetStrictSemver(): void;
    get strictSemverInput(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
