// https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComposeConfig extends cdktf.TerraformMetaArguments {
  /**
  * One or more Compose file paths, equivalent to repeating the `-f` flag with `docker compose`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#config_paths Compose#config_paths}
  */
  readonly configPaths: string[];
  /**
  * Optional list of env files to load before parsing the Compose configuration. If omitted, Compose uses the default `.env` behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#env_files Compose#env_files}
  */
  readonly envFiles?: string[];
  /**
  * Optional list of Compose profiles to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#profiles Compose#profiles}
  */
  readonly profiles?: string[];
  /**
  * Optional project directory used as the Compose working directory. If omitted, Compose uses the directory of the first file in `config_paths`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#project_directory Compose#project_directory}
  */
  readonly projectDirectory?: string;
  /**
  * Optional Compose project name. If omitted, Compose derives the project name the same way as the CLI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#project_name Compose#project_name}
  */
  readonly projectName?: string;
  /**
  * If `true`, remove containers for services that are no longer present in the Compose configuration during apply and destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#remove_orphans Compose#remove_orphans}
  */
  readonly removeOrphans?: boolean | cdktf.IResolvable;
  /**
  * If `true`, wait until services reach the running or healthy state before returning from apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#wait Compose#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * Optional duration for `wait`, for example `30s` or `2m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#wait_timeout Compose#wait_timeout}
  */
  readonly waitTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose docker_compose}
*/
export class Compose extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_compose";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Compose resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Compose to import
  * @param importFromId The id of the existing Compose that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Compose to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_compose", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.4.0/docs/resources/compose docker_compose} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComposeConfig
  */
  public constructor(scope: Construct, id: string, config: ComposeConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_compose',
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
    this._configPaths = config.configPaths;
    this._envFiles = config.envFiles;
    this._profiles = config.profiles;
    this._projectDirectory = config.projectDirectory;
    this._projectName = config.projectName;
    this._removeOrphans = config.removeOrphans;
    this._wait = config.wait;
    this._waitTimeout = config.waitTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_paths - computed: false, optional: false, required: true
  private _configPaths?: string[]; 
  public get configPaths() {
    return this.getListAttribute('config_paths');
  }
  public set configPaths(value: string[]) {
    this._configPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths;
  }

  // env_files - computed: false, optional: true, required: false
  private _envFiles?: string[]; 
  public get envFiles() {
    return this.getListAttribute('env_files');
  }
  public set envFiles(value: string[]) {
    this._envFiles = value;
  }
  public resetEnvFiles() {
    this._envFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFilesInput() {
    return this._envFiles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // project_directory - computed: false, optional: true, required: false
  private _projectDirectory?: string; 
  public get projectDirectory() {
    return this.getStringAttribute('project_directory');
  }
  public set projectDirectory(value: string) {
    this._projectDirectory = value;
  }
  public resetProjectDirectory() {
    this._projectDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDirectoryInput() {
    return this._projectDirectory;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // remove_orphans - computed: false, optional: true, required: false
  private _removeOrphans?: boolean | cdktf.IResolvable; 
  public get removeOrphans() {
    return this.getBooleanAttribute('remove_orphans');
  }
  public set removeOrphans(value: boolean | cdktf.IResolvable) {
    this._removeOrphans = value;
  }
  public resetRemoveOrphans() {
    this._removeOrphans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOrphansInput() {
    return this._removeOrphans;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPaths),
      env_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._envFiles),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      project_directory: cdktf.stringToTerraform(this._projectDirectory),
      project_name: cdktf.stringToTerraform(this._projectName),
      remove_orphans: cdktf.booleanToTerraform(this._removeOrphans),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_timeout: cdktf.stringToTerraform(this._waitTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      env_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._envFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_directory: {
        value: cdktf.stringToHclTerraform(this._projectDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_orphans: {
        value: cdktf.booleanToHclTerraform(this._removeOrphans),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_timeout: {
        value: cdktf.stringToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
