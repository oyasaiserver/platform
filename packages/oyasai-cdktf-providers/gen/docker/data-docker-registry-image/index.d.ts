import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDockerRegistryImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#id DataDockerRegistryImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#insecure_skip_verify DataDockerRegistryImage#insecure_skip_verify}
    */
    readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
    /**
    * The name of the Docker image, including any tags. e.g. `alpine:latest`. You can also specify a digest, e.g. `nginx:1.28.0@sha256:eaa7e36decc3421fc04478c586dfea0d931cebe47d5bc0b15d758a32ba51126f`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#name DataDockerRegistryImage#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image}
*/
export declare class DataDockerRegistryImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "docker_registry_image";
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImage to import
    * @param importFromId The id of the existing DataDockerRegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageConfig
    */
    constructor(scope: Construct, id: string, config: DataDockerRegistryImageConfig);
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get sha256Digest(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
