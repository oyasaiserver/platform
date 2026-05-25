// https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerRegistryImageTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags#insecure_skip_verify DataDockerRegistryImageTags#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker image repository, including any tag or digest. For example, `alpine:latest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags#name DataDockerRegistryImageTags#name}
  */
  readonly name: string;
  /**
  * If `true`, only stable semantic version tags are returned. Prerelease tags such as `1.2.3-rc.1` are excluded as well as any other tags that do not conform to the semantic versioning specification. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags#strict_semver DataDockerRegistryImageTags#strict_semver}
  */
  readonly strictSemver?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags docker_registry_image_tags}
*/
export class DataDockerRegistryImageTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_registry_image_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDockerRegistryImageTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDockerRegistryImageTags to import
  * @param importFromId The id of the existing DataDockerRegistryImageTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDockerRegistryImageTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/data-sources/registry_image_tags docker_registry_image_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerRegistryImageTagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDockerRegistryImageTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_registry_image_tags',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._name = config.name;
    this._strictSemver = config.strictSemver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // strict_semver - computed: false, optional: true, required: false
  private _strictSemver?: boolean | cdktf.IResolvable; 
  public get strictSemver() {
    return this.getBooleanAttribute('strict_semver');
  }
  public set strictSemver(value: boolean | cdktf.IResolvable) {
    this._strictSemver = value;
  }
  public resetStrictSemver() {
    this._strictSemver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSemverInput() {
    return this._strictSemver;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      name: cdktf.stringToTerraform(this._name),
      strict_semver: cdktf.booleanToTerraform(this._strictSemver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_semver: {
        value: cdktf.booleanToHclTerraform(this._strictSemver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
